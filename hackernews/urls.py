from django.urls import path
from django.conf.urls import url, include
import rest_framework
from rest_framework import urlpatterns

from . import views

from rest_framework import routers
from .api import NewspostViewSet, CommentViewSet


router = routers.DefaultRouter()
# router.register('/', views.index, 'index')
router.register('news', NewspostViewSet, 'news')
# router.register('api/comment(?P<postId>\d+)', CommentSearchSet, 'comments')
router.register('comment', CommentViewSet, 'comments')
# router.register('^api/comment/(?P<postId>.+)/$',
# CommentListViewSet, 'commentList')
# re_path('^purchases/(?P<username>.+)/$', PurchaseList.as_view()),


# urlpatterns = router.urls

app_name = 'hackernews'
urlpatterns = [
    path('', views.index, name='index'),
    path('signup/', views.signup, name='signup'),
    path('new-post/', views.newPost, name='newPost'),
    path('login/', views.userLogin, name='userLogin'),
    path('logout/', views.userLogout, name='userLogout'),
    url(r'^', include(router.urls), name='routerurls'),
    # path('api/', include(router.urls)),
    # path('<int:question_id>/', views.detail, name='detail'),
    # path('<int:question_id>/results/', views.results, name='results'),
    # path('<int:question_id>/vote/', views.vote, name='vote'),
    # path('', views.IndexView.as_view(), name='index'),
    # path('<int:pk>/', views.DetailView.as_view(), name='detail'),
    # path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
    # path('<int:question_id>/vote/', views.vote, name='vote'),
]
