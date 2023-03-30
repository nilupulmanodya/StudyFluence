from django.contrib.auth import login, logout
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import StdUserRegisterSerializer, UserLoginSerializer, UserSerializer, ProfUserRegisterSerializer
from rest_framework import permissions, status, generics
from .validations import custom_validation, validate_email, validate_password
from rest_framework.permissions import IsAuthenticated
from .models import Question, Answer, PersonalInfo
from .serializers import QuestionSerializer, AnswerSerializer, PersonalInfoSerializer
import pandas as pd
import pickle
import os
from django.http import HttpResponse, FileResponse

# Create your views here.

class StdUserRegister(APIView):
	permission_classes = (permissions.AllowAny,)
	
	def post(self, request):
		# print("data",request.data)
		try:
			clean_data = custom_validation(request.data)
			serializer = StdUserRegisterSerializer(data=clean_data)
		
			if serializer.is_valid(raise_exception=True):
				user = serializer.create(clean_data)
				if user:
					return Response(serializer.data, status=status.HTTP_201_CREATED)
		except Exception as error:
			return Response(error, status=status.HTTP_400_BAD_REQUEST)




class ProfUserRegister(APIView):
	permission_classes = (permissions.AllowAny,)
	
	def post(self, request):
		try:
			clean_data = custom_validation(request.data)
			serializer = ProfUserRegisterSerializer(data=clean_data)
			if serializer.is_valid(raise_exception=True):
				user = serializer.create(clean_data)
				if user:
					return Response(serializer.data, status=status.HTTP_201_CREATED)
		except Exception as error:
			return Response(error, status=status.HTTP_400_BAD_REQUEST)


class UserLogin(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = (SessionAuthentication,)
	##

	def post(self, request):
		try:
			data = request.data
			# assert validate_email(data)
			assert validate_password(data)
			serializer = UserLoginSerializer(data=data)
			# print('serializer',serializer)
			if serializer.is_valid(raise_exception=True):
				user = serializer.check_user(data)
				print('useruseruser',user)
				print('request',request.user)
				login(request, user)
				print('request.user', request.user.get_username())
				userGroup = '0'

				print('request.user.groups.all()[0].name',request.user.groups.all()[0].name)
				
				if request.user.groups.all()[0].name == 'std':
					userGroup = '1'
				elif request.user.groups.all()[0].name == 'prof':
					userGroup = '2'
				return Response(data = {"data":serializer.data,"userGroup":userGroup} , status=status.HTTP_200_OK)
		

		except Exception as error:
			return Response(error, status=status.HTTP_400_BAD_REQUEST)


class UserLogout(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()	
	
	def post(self, request):
		logout(request)
		return Response(status=status.HTTP_200_OK)


class UserView(APIView):
	permission_classes = (permissions.IsAuthenticated,)
	authentication_classes = (SessionAuthentication,)
	##

	def get(self, request):
		try:
			serializer = UserSerializer(request.user)
			userGroup = '0'	
			if request.user.groups.all()[0].name == 'std':
				userGroup = '1'
			elif request.user.groups.all()[0].name == 'prof':
				userGroup = '2'
			return Response(data = {"data":serializer.data,"userGroup":userGroup} , status=status.HTTP_200_OK)
		
		except Exception as error:
			return Response(error, status=status.HTTP_400_BAD_REQUEST)
	
class ContentView(APIView):
	permission_classes = (permissions.IsAuthenticated,)
	authentication_classes = (SessionAuthentication,)


	def get(self, request):
		content = {
			"hellowold": "Hello World",
			"hiworld": "Hi World"
}
		return Response({'content': content}, status=status.HTTP_200_OK)
	



class QuestionList(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = QuestionSerializer
	

    def get_queryset(self):
        return Question.objects.all()

    def perform_create(self, serializer):
        serializer.save(student=self.request.user)

class QuestionDetail(generics.RetrieveAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class AnswerList(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = AnswerSerializer
    

    def get_queryset(self):
        return Answer.objects.filter(question_id=self.kwargs['question_pk'])

    def perform_create(self, serializer):
        question = Question.objects.get(pk=self.kwargs['question_pk'])
        serializer.save(teacher=self.request.user, question=question)

class AnswerDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer


class PersonalInfoList(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = PersonalInfoSerializer
    def get_queryset(self):
      print('get personal info user id',self.request.user.id)
      return PersonalInfo.objects.filter(student=self.request.user.id)
    

    def perform_create(self, serializer):
        serializer.save(student=self.request.user)
	

class ALSubSelectionTest(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = (SessionAuthentication,)

	module_dir = os.path.dirname(__file__)  # get current directory
	model_path = module_dir+"\ml_models\\alSubSelectorLogRegressionModel.sav"
	label_encoder_path = module_dir+"\label_encoders\label_encoder_al_sub_selection.pkl"

	# print('module_dir',module_dir)

	def post(self, request):
		try:

			# print('request.get_host()',request.get_host())

			# load the label encoder from disk
			label_encoders = pickle.load(open(self.label_encoder_path, 'rb'))
			# print(label_encoders)

			# load the model from disk
			loaded_model = pickle.load(open(self.model_path, 'rb'))

			# print("data",request.data)
			data_request = request.data

			df_data_request = pd.DataFrame([data_request])
			# print('df_data_request',df_data_request)

			# encoding labels for the data
			for column in df_data_request.columns:
				df_data_request[column] = label_encoders[column].transform(df_data_request[column])
		
			predicted_result = loaded_model.predict(df_data_request)
			result = predicted_result[0]

			# print('predicion result for AL sub selection test',0)
			if result == 1:
				print('result is 1 Science...............')
				return Response('http://'+request.get_host()+'/static/results/alSubSelector/RecSciStream.pdf')
			elif result == 0:
				print('result is 0 Commerce ...............')
				return Response('http://'+request.get_host()+'/static/results/alSubSelector/RecComStream.pdf')
			return Response(0, status=status.HTTP_201_CREATED)
		except Exception as error:
			return Response(error, status=status.HTTP_400_BAD_REQUEST)



class OLSubSelectionTest(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = (SessionAuthentication,)
	module_dir = os.path.dirname(__file__)  # get current directory
	model_path = module_dir+"\ml_models\\olSubSelectorSVMModel.sav"
	label_encoder_path = module_dir+"\label_encoders\label_encoder_ol_sub_selection.pkl"

	# print('module_dir',module_dir)

	def post(self, request):
		try:

			# print('request.get_host()',request.get_host())

			# load the label encoder from disk
			label_encoders = pickle.load(open(self.label_encoder_path, 'rb'))
			# print(label_encoders)

			# load the model from disk
			loaded_model = pickle.load(open(self.model_path, 'rb'))

			# print("data",request.data)
			data_request = request.data

			df_data_request = pd.DataFrame([data_request])
			print('df_data_request',df_data_request)

			# encoding labels for the data
			for column in df_data_request.columns:
				df_data_request[column] = label_encoders[column].transform(df_data_request[column])
		
			predicted_result = loaded_model.predict(df_data_request)
			result = predicted_result[0]

			print('predicion result for OL sub selection test',0)
			if result == 1:
				print('result is 1 Rec 2...............')
				return Response('http://'+request.get_host()+'/static/results/olSubSelector/OLevelOptionalSubjectRecommendations_2.pdf')
			elif result == 0:
				print('result is 0 Rec 1 ...............')
				return Response('http://'+request.get_host()+'/static/results/olSubSelector/OLevelOptionalSubjectRecommendations_1.pdf')
			return Response(0, status=status.HTTP_201_CREATED)
		except Exception as error:
			return Response(error, status=status.HTTP_400_BAD_REQUEST)
		

class HigherEducationSelectionTest(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = (SessionAuthentication,)
	module_dir = os.path.dirname(__file__)  # get current directory
	model_path = module_dir+"\ml_models\\higherEducationSelectorSVMModel.sav"
	label_encoder_path = module_dir+"\label_encoders\label_encoder_highereducation_selection.pkl"

	# print('module_dir',module_dir)

	def post(self, request):
		try:

			print('request.get_host()',request.get_host())

			# load the label encoder from disk
			label_encoders = pickle.load(open(self.label_encoder_path, 'rb'))
			# print(label_encoders)

			# load the model from disk
			loaded_model = pickle.load(open(self.model_path, 'rb'))

			# print("data",request.data)
			data_request = request.data

			df_data_request = pd.DataFrame([data_request])
			print('df_data_request',df_data_request)

			# encoding labels for the data
			for column in df_data_request.columns:
				df_data_request[column] = label_encoders[column].transform(df_data_request[column])
		
			predicted_result = loaded_model.predict(df_data_request)
			result = predicted_result[0]

			print('predicion result for OL sub selection test',0)
			if result == 1:
				print('result is 1 IT ...............')
				return Response('http://'+request.get_host()+'/static/results/higherEducationRecomendations/HigherEducationRecommendationReports_1.pdf')
			elif result == 0:
				print('result is 0 Arts ...............')
				return Response('http://'+request.get_host()+'/static/results/higherEducationRecomendations/HigherEducationRecommendationReports_2.pdf')
			return Response(0, status=status.HTTP_201_CREATED)
		except Exception as error:
			return Response(error, status=status.HTTP_400_BAD_REQUEST)


class VocationalSelectionTest(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = (SessionAuthentication,)
	module_dir = os.path.dirname(__file__)  # get current directory
	model_path = module_dir+"\ml_models\\vocationalSelectorSVMModel.sav"
	label_encoder_path = module_dir+"\label_encoders\label_encoder_vocational_selection.pkl"

	# print('module_dir',module_dir)

	def post(self, request):
		try:

			print('request.get_host()',request.get_host())

			# load the label encoder from disk
			label_encoders = pickle.load(open(self.label_encoder_path, 'rb'))
			# print(label_encoders)

			# load the model from disk
			loaded_model = pickle.load(open(self.model_path, 'rb'))

			# print("data",request.data)
			data_request = request.data

			df_data_request = pd.DataFrame([data_request])
			print('df_data_request',df_data_request)

			# encoding labels for the data
			for column in df_data_request.columns:
				df_data_request[column] = label_encoders[column].transform(df_data_request[column])
		
			predicted_result = loaded_model.predict(df_data_request)
			result = predicted_result[0]

			print('predicion result for OL sub selection test',0)
			if result == 1:
				print('result is 1 IT ...............')
				return Response('http://'+request.get_host()+'/static/results/technicalVocationalRecomendations/TechnicalandVocationalEducationRecommendations_2.pdf')
			elif result == 0:
				print('result is 0 Hospitality ...............')
				return Response('http://'+request.get_host()+'/static/results/technicalVocationalRecomendations/TechnicalandVocationalEducationRecommendations_1.pdf')
			return Response(0, status=status.HTTP_201_CREATED)
		except Exception as error:
			return Response(error, status=status.HTTP_400_BAD_REQUEST)
		
class CareerSelectionTest(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = (SessionAuthentication,)
	module_dir = os.path.dirname(__file__)  # get current directory
	model_path = module_dir+"\ml_models\\careerSelectorKNNModel.sav"
	label_encoder_path = module_dir+"\label_encoders\label_encoder_career_selection.pkl"

	# print('module_dir',module_dir)

	def post(self, request):
		try:

			print('request.get_host()',request.get_host())

			# load the label encoder from disk
			label_encoders = pickle.load(open(self.label_encoder_path, 'rb'))
			# print(label_encoders)

			# load the model from disk
			loaded_model = pickle.load(open(self.model_path, 'rb'))

			print("data",request.data)
			data_request = request.data

			df_data_request = pd.DataFrame([data_request])
			print('df_data_request',df_data_request)

			# encoding labels for the data
			for column in df_data_request.columns:
				df_data_request[column] = label_encoders[column].transform(df_data_request[column])

		
			predicted_result = loaded_model.predict(df_data_request)
			result = predicted_result[0]

			print('predicion result for OL sub selection test',0)
			if result == 0:
				print('result is 0 Rec ...............')
				return Response('http://'+request.get_host()+'/static/results/careerRecomendations/CareerRecommendations_1.pdf')
			elif result == 1:
				print('result is 1 Rec ...............')
				return Response('http://'+request.get_host()+'/static/results/careerRecomendations/CareerRecommendations_2.pdf')
			elif result == 2:
				print('result is 2 Rec ...............')
				return Response('http://'+request.get_host()+'/static/results/careerRecomendations/CareerRecommendations_3.pdf')
			return Response(0, status=status.HTTP_201_CREATED)
		except Exception as error:
			return Response(error, status=status.HTTP_400_BAD_REQUEST)
