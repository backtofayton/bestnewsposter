from django.db.models.fields import IntegerField
from django.shortcuts import get_object_or_404
from .models import Newspost, Comment
from rest_framework import viewsets, permissions
from .serializers import CommentSerializer, NewspostSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.filters import SearchFilter
from django.db.models import F
from users.models import CustomUser
from rest_framework.response import Response
from rest_framework import status


# Newspost Viewset
class NewspostViewSet(viewsets.ModelViewSet):
    queryset = Newspost.objects.all()
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = NewspostSerializer

    def create(self, request, *args, **kwargs):
        print('post request received!')
        user = self.request.user.id
        print('user: ', user)
        try:
            request.data._mutable = True
            request.data['author'] = user
            request.data._mutable = False
        except:
            request.data['author'] = user
        print(request.data)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def get_queryset(self):
        req = self.request
        queryset = self.queryset.all()
        vote = req.query_params.get('vote')
        print('user: ', req.user.id)
        print('vote: ', vote)

        if (vote == 'up'):
            postId = self.kwargs['pk']
            print('post id: ', postId)
            user = CustomUser.objects.get(pk=req.user.id)
            print('user', user)
            user.favorites.append(postId)
            user.save()
            Newspost.objects.filter(pk=postId).update(
                point=F('point') + 1)

            return self.queryset
        elif (vote == 'down'):
            postId = self.kwargs['pk']
            print('post id: ', postId)
            user = CustomUser.objects.get(pk=req.user.id)
            print('user', user)
            user.favorites.remove(int(postId))
            user.save()
            Newspost.objects.filter(pk=postId).update(
                point=F('point') - 1)
            return self.queryset
        else:
            print('no queries for news')
            return queryset  # FUKCING IMPORTANT!!!!


class CommentViewSet(viewsets.ModelViewSet):
    print('comment set')
    queryset = Comment.objects.all()
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = CommentSerializer

    def destroy(self, request, *args, **kwargs):
        user = self.request.user.id
        commentId = self.kwargs['pk']
        print('user: ', user, ' comment: ', commentId)
        commentObj = get_object_or_404(Comment, id=commentId)
        # commentObj = Comment.objects.get(pk=commentId)
        print('comment user: ', commentObj.user.id)
        if (commentObj.user.id == user):
            print('user authorized')
            commentObj.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            print('user not authorized')
            return Response(data={'message': "You are not authorized to delete"},
                            status=status.HTTP_400_BAD_REQUEST)

    def get_queryset(self):
        req = self.request
        queryset = self.queryset.all()
        print('request received\n', req)
        newspost = req.query_params.get('newspost') or None
        postId = req.query_params.get('id') or None
        replyTo = req.query_params.get('replyTo') or None
        print('newspost:', newspost)
        if newspost:
            self.queryset = Comment.objects.filter(
                newspost_id=newspost, replyTo=replyTo)
            return self.queryset
        elif postId:
            self.queryset = Comment.objects.filter(id=postId)
            return self.queryset
        else:
            return queryset  # FUKCING IMPORTANT!!!!
