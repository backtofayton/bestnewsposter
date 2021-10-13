from django.db.models.signals import post_save
from models import Profile
from django.contrib.auth.models import User


# def create_profile(sender, **kwargs):
#     user = kwargs["instance"]
#     if kwargs["created"]:
#         profile = user.models.Profile()
#         profile.setUser(sender)
#         profile.save()


# post_save.connect(create_profile, sender=User)
