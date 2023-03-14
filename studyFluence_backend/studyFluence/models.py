from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

from django.contrib.auth.models import Group

# Create your models here.
class AppUserManager(BaseUserManager):
	
	def create_user(self, email, password=None, username=None):
		
		if not email:
			raise ValueError('An email is required.')
		if not password:
			raise ValueError('A password is required.')
		if not username:
			raise ValueError('Username is required.')
		email = self.normalize_email(email)
		user = self.model(email=email)
		username = self.model(username=username)
		user.set_password(password)
		user.save()
		return user
	
	def create_superuser(self, email, password=None, username=None):
		print('creating super user')
		if not email:
			raise ValueError('An email is required.')
		if not password:
			raise ValueError('A password is required.')
		username = self.model(username=username)
		user = self.create_user(email, password, username)
		user.staff = True
		user.is_superuser = True
		user.save()
		return user
