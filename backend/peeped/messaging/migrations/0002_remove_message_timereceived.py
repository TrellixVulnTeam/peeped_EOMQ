# Generated by Django 3.0.5 on 2020-04-23 02:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('messaging', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='message',
            name='timeReceived',
        ),
    ]
