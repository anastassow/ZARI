from django.db import models

# Create your models here.
class registerModel(models.Model):
    username = models.TextField(max_length = 100)
    password = models.TextField(max_length = 100)

