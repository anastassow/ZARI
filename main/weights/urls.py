from django.urls import path
from .views import create_exercise, add_weight_with_reps, test

urlpatterns = [
    path('exercise/', create_exercise, name = 'exercise'),
    path('weight/', add_weight_with_reps, name = 'weight'),
    path('test/', test, name = 'test'),
]