# Generated by Django 5.0.3 on 2024-03-29 21:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('weights', '0006_exercise_username'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='exercise',
            name='username',
        ),
    ]