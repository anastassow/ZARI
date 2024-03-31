from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Exercise, Weight, Reps
from authentication.models import User

@api_view(['POST'])
def create_exercise(request):
    exercise_name = request.data.get('name')
    user_id = request.data.get('user_id')

    Exercise.objects.create(name=exercise_name, user_id = user_id)

    return Response("Exercise created!", status=status.HTTP_201_CREATED)

@api_view(['POST'])
def add_weight_with_reps(request):
    exercise_name = request.data.get('name')

    try:
        exercise = Exercise.objects.get(name=exercise_name)
    except Exercise.DoesNotExist:
        return Response("Exercise with the provided name does not exist", status=status.HTTP_404_NOT_FOUND)
    
    weight_data = request.data.get('weight')
    reps_data = request.data.get('reps')

    if reps_data is None:
        return Response("Reps data is missing", status=status.HTTP_400_BAD_REQUEST)
    
    try:
        reps = Reps.objects.create(value=reps_data)
    except (ValueError, TypeError):
        return Response("Invalid reps data", status=status.HTTP_400_BAD_REQUEST)

    if weight_data is None:
        return Response("Weight data is missing", status=status.HTTP_400_BAD_REQUEST)

    try:
        weight = Weight.objects.create(value=weight_data, reps=reps)
    except (ValueError, TypeError):
        return Response("Invalid weight data", status=status.HTTP_400_BAD_REQUEST)

    exercise.weights.add(weight)

    return Response("Weight added to exercise with reps!", status=status.HTTP_201_CREATED)
