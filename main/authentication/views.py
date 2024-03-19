from django.shortcuts import render
from rest_framework.decorators  import api_view
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib.auth import logout

# Create your views here.
@api_view(['POST'])
def register(request,):
    username = request.data.get('username')
    password = request.data.get('password')
    if User.objects.filter(username=username).exists():
        print(username)
        return Response("Username allready exists!")
    else:
        new_user = User.objects.create(username=username, password=make_password(password))
        return Response("You have created a new account!")
    
@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request=request, username = username, password = password)
    if user is not None:
        login(request, user)
        print(password)
        return Response("Hello, {username} you have loged into your account!")
    else:
        return Response("There is not a user with this username and password!")
    
@api_view(['POST'])
def logout_view(request):
    logout(request)
    return Response("You have been logged out.")
