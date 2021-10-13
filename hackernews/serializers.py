from rest_framework import serializers, fields
from .models import Newspost, Comment
from django.contrib.auth.models import User


class NewspostSerializer(serializers.ModelSerializer):
    # pub_date = fields.DateTimeField(input_formats=['%Y-%m-%dT%H:%M:%S.%fZ'])

    class Meta:
        model = Newspost
        fields = ('__all__')
        # fields = ('title', 'url', 'author', 'point', 'pub_date')


class CommentSerializer(serializers.ModelSerializer):
    customuser = serializers.ReadOnlyField()
    # hasReplies = serializers.ReadOnlyField()

    class Meta:
        model = Comment
        # fields = ('newspost', 'text')
        fields = ('__all__')
