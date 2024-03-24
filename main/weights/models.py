from django.db import models

class Reps(models.Model):
    value = models.PositiveIntegerField(default=0) 

class Weight(models.Model):
    value = models.FloatField(default=0)
    reps = models.ForeignKey(Reps, on_delete=models.CASCADE)

class Exercise(models.Model):
    name = models.TextField(max_length=100)
    weights = models.ManyToManyField(Weight, related_name='exercises')
