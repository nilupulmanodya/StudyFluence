from django.contrib.auth.models import Group
from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from django.core.exceptions import ValidationError

UserModel = get_user_model()


class StdUserRegisterSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserModel
		fields = '__all__'
		
	def create(self, clean_data):
		user_obj = UserModel.objects.create_user(email=clean_data['email'], password=clean_data['password'],username = clean_data['username'])
		user_obj.save()
		my_group = Group.objects.get(name='std')
		my_group.user_set.add(user_obj)
		return user_obj
	

	
class ProfUserRegisterSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserModel
		fields = '__all__'
		
	def create(self, clean_data):
		user_obj = UserModel.objects.create_user(email=clean_data['email'], password=clean_data['password'],username = clean_data['username'])
		user_obj.save()
		my_group = Group.objects.get(name='prof')
		my_group.user_set.add(user_obj)
		return user_obj

class UserLoginSerializer(serializers.Serializer):
	# email = serializers.EmailField()
	password = serializers.CharField()
	username = serializers.CharField()
	##

	def check_user(self, clean_data):
		print(clean_data)
		user = authenticate(username=clean_data['username'], password=clean_data[
			'password'])
		print('user',user)
		if not user:
			raise ValidationError('user not found')
		return user


class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserModel
		fields = ('email', 'username')