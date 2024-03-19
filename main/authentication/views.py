from django.shortcuts import render
from rest_framework.decorators  import api_view
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User

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