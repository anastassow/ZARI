from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from .models import Exersize, Weight
from rest_framework.response import Response

@api_view(['POST'])
def exersizeHandle(request):
    exersize_name = request.data.get('name')

    weight = Weight.objects.create()

    exersize = Exersize.objects.create(name=exersize_name, weight=weight)

    return Response("Exersize added!", status=status.HTTP_201_CREATED)

@api_view(['POST'])
def addWeight(request):
    weight_value = request.data.get('weight')
    exersize_name = request.data.get('name')

    try:
        exersize = Exersize.objects.get(name=exersize_name)
    except Exersize.DoesNotExist:
        return Response("Exersize with the provided name does not exist", status=404)

    try:
        weight = Weight.objects.get(value=weight_value)
    except Weight.DoesNotExist:
        weight = Weight.objects.create(value=weight_value)

    exersize.weight = weight
    exersize.save()

    return Response("The weight is added!")

