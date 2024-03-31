from django.db import models
from authentication.models import User

class Reps(models.Model):
    value = models.PositiveIntegerField(default=0) 


class Exercise(models.Model):
    name = models.TextField(max_length=100)
    user_id = models.IntegerField(default = 0)

class Weight(models.Model):
    value = models.FloatField(default=0)
    reps = models.ForeignKey(Reps, on_delete=models.CASCADE)
    exercise = models.ForeignKey(Exercise, related_name='weights', on_delete=models.CASCADE, null = True)
