from django.db import models
from rest_framework import serializers

# Create your models here.
class registerSerializer(serializers.ModelSerializer):
    username = models.TextField(max_length = 100)
    password = models.TextField(max_length = 100)

    