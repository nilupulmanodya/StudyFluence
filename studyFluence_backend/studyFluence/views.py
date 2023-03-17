from django.contrib.auth import login, logout
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import StdUserRegisterSerializer, UserLoginSerializer, UserSerializer, ProfUserRegisterSerializer
from rest_framework import permissions, status
from .validations import custom_validation, validate_email, validate_password
# Create your views here.

class StdUserRegister(APIView):
	permission_classes = (permissions.AllowAny,)
	
	def post(self, request):
		
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
			print('serializer',serializer)
			if serializer.is_valid(raise_exception=True):
				user = serializer.check_user(data)
				print('useruseruser',user)
				print('request',request.user)
				login(request, user)
				print('request.user', request.user.get_username())
				userGroup = '0'
				
				if request.user.groups.all()[0].name == 'std':
					userGroup = '1'
				elif request.user.groups.all()[0].name == 'prof':
					userGroup = '2'

				print('reg userGroup output view',userGroup)
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

			print('reg userGroup output view',userGroup)
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