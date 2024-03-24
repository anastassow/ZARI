from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Exercise, Weight, Reps

@api_view(['POST'])
def create_exercise(request):
    exercise_name = request.data.get('name')

    Exercise.objects.create(name=exercise_name)

    return Response("Exercise created!", status=status.HTTP_201_CREATED)

@api_view(['POST'])
def add_weight_with_reps(request):
    exercise_name = request.data.get('name')

    try:
        exercise = Exercise.objects.get(name=exercise_name)
    except Exercise.DoesNotExist:
        return Response("Exercise with the provided name does not exist", status=status.HTTP_404_NOT_FOUND)

    weights_data = request.data.get('weights')  # Assuming weights are passed as a list of dictionaries

    if not weights_data:
        return Response("No weights provided", status=status.HTTP_400_BAD_REQUEST)

    for weight_data in weights_data:
        weight_value = weight_data.get('weight')
        reps_value = weight_data.get('reps')

        reps = Reps.objects.create(value=reps_value)
        weight = Weight.objects.create(value=weight_value, reps=reps)

        exercise.weights.add(weight)  # Associate weight with exercise

    return Response("Weights added to exercise with reps!", status=status.HTTP_201_CREATED)

