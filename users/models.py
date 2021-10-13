# users/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.postgres.fields import ArrayField


class CustomUser(AbstractUser):
    # Any extra fields would go here
    favorites = ArrayField(models.IntegerField(default=0), default=list)

    def __str__(self):
        return self.username
