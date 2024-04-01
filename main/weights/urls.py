from django.urls import path
from .views import create_exercise, add_weight_with_reps, get_user_exercise_data

urlpatterns = [
    path('exercise/', create_exercise, name = 'exercise'),
    path('weight/', add_weight_with_reps, name = 'weight'),
    path('get_user_exercise_data/', get_user_exercise_data, name='get_user_exercise_data')
]