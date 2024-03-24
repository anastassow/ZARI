from django.db import models

# Create your models here.
class Reps(models.Model):
    value = models.PositiveIntegerField(default=0) 

class Weight(models.Model):
    value = models.FloatField(default = 0)
    reps = models.ForeignKey(Reps, on_delete=models.CASCADE, null=True, blank=True)
    
class Exercise(models.Model):
    name = models.TextField(max_length = 100)
    weight = models.ForeignKey(Weight, on_delete = models.CASCADE, null=True, blank=True)

