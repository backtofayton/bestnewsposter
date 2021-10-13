from django.db import models

# Create your models here.
# from django.contrib.auth.models import User
# from django.contrib.postgres.fields import ArrayField

# from django.db.models.signals import post_save
# from django.dispatch import receiver

from users.models import CustomUser


class Newspost(models.Model):
    title = models.CharField(max_length=200)
    url = models.CharField(max_length=200, blank=True)
    text = models.CharField(max_length=1500, blank=True)
    pub_date = models.DateTimeField(auto_now_add=True)
    point = models.IntegerField(default=0)
    author = models.ForeignKey(
        CustomUser, on_delete=models.DO_NOTHING, default='')

    class Meta:
        ordering = ('pub_date',)


class Comment(models.Model):
    newspost = models.ForeignKey(
        Newspost, on_delete=models.SET_DEFAULT, default='<anonymous>')
    text = models.CharField(max_length=2000)
    comment_date = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(
        CustomUser, on_delete=models.SET_DEFAULT, default='<anonymous>')
    # replies = models.JSONField()
    replyTo = models.ForeignKey(
        'Comment', on_delete=models.CASCADE, null=True, blank=True)
    hasReplies = models.BooleanField(default=False)
    # replyFor = models.ForeignKey(
    #     'Comment', on_delete=models.CASCADE)

    @property
    def customuser(self):
        return self.user.username

    class Meta:
        ordering = ('comment_date',)


# building on django user model


# class Profile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     favorites = ArrayField(models.IntegerField(default=0), default=list)


# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         Profile.objects.create(user=instance)


# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
#     instance.profile.save()
