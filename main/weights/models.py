from django.db import models

# Create your models here.
class Weight(models.Model):
    value = models.FloatField(default = 0)
    
class Exersize(models.Model):
    name = models.TextField(max_length = 100)
    weight = models.ForeignKey(Weight, on_delete = models.CASCADE)
