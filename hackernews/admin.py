from django.contrib import admin

from .models import Newspost, Comment
# Register your models here.


class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'url', 'author', 'pub_date', 'point')


class CommentAdmin(admin.ModelAdmin):
    list_display = ('newspost', 'user', 'text')

# Register your models here.


admin.site.register(Newspost, NewsAdmin)
# admin.site.register(Profile)
# admin.site.register(Newspost)
admin.site.register(Comment, CommentAdmin)
