from .models import Newspost, Comment

from django.forms import ModelForm

from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


# class UserForm(UserCreationForm):
#     class Meta:
#         model = User
#         fields = ['username', 'password1', 'password2']


class NewspostForm(ModelForm):
    class Meta:
        model = Newspost
        fields = ['title', 'url']


class CommentForm(ModelForm):
    class Meta:
        model = Comment
        fields = ['newspost']

# class UserOwnForm(ModelForm):
#     class Meta:
#         model = UserOwn
#         fields = ['username', 'password']
