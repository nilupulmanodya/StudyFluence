from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.contrib.auth.models import Group, User
from django.conf import settings

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

class Question(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    student = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        app_label = 'studyFluence'

class Answer(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    teacher = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)

    class Meta:
        app_label = 'studyFluence'

class PersonalInfo(models.Model):
    fullName = models.TextField()
    age = models.TextField()
    location = models.TextField()
    firstLanguage = models.TextField()
    highestLevelofEducation = models.TextField()
    importanceOfTutionCost = models.TextField()
    afterLearningLocation = models.TextField()
    afterLearningPlan = models.TextField()
    financialPlan = models.TextField()
    budget = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    student = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        app_label = 'studyFluence'