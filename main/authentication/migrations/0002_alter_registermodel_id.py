# Generated by Django 5.0.3 on 2024-03-29 21:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registermodel',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
