from django.urls import path
from . import views

urlpatterns = [
	path('stdregister', views.StdUserRegister.as_view(), name='stdregister'),
    path('profregister', views.ProfUserRegister.as_view(), name='profregister'),
	path('login', views.UserLogin.as_view(), name='login'),
	path('logout', views.UserLogout.as_view(), name='logout'),
	path('user', views.UserView.as_view(), name='user'),
    path('questionlist', views.QuestionList.as_view(), name='questionlist'),
    path('answerlist/<int:question_pk>', views.AnswerList.as_view(), name='answerlist'),
]
