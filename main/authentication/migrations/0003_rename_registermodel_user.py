# Generated by Django 5.0.3 on 2024-03-29 21:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_alter_registermodel_id'),
        ('weights', '0007_remove_exercise_username'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='registerModel',
            new_name='User',
        ),
    ]
