# Generated by Django 5.0.3 on 2024-03-25 19:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('weights', '0005_remove_exercise_weight_exercise_weights_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='exercise',
            name='username',
            field=models.TextField(blank=True, default='none', max_length=100, null=True),
        ),
    ]