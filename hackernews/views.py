from django.shortcuts import render, redirect

# Create your views here.

from django.http import HttpResponse
from .models import Newspost
from .forms import NewspostForm

from django.contrib.auth.models import User
from django.contrib.auth.forms import AuthenticationForm  # add this
from django.contrib.auth.forms import UserCreationForm

from django.contrib.auth import login, authenticate, logout
from django.contrib import messages

from django.utils import timezone


def index(request):
    newsposts = Newspost.objects.all().order_by('-pub_date')
    # newsposts = {v: k for k, v in newsposts.items()}
    context = {'newsposts': newsposts}
    return render(request, 'hackernews/index.html', context)


def userLogin(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        print('login-form-validation: ', form.is_valid())
        # print('password: ', form)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            print('password: ', password)
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.info(request, f"You are now logged in as {username}.")
                return redirect("hackernews:index")
            else:
                messages.error(request, "Invalid username or password.")
        else:
            messages.error(request, "Invalid username or password.")
        return redirect("hackernews:index")
    # return HttpResponse('you wanna login')


def userLogout(request):
    logout(request)
    messages.info(request, "You have successfully logged out.")
    return redirect("hackernews:index")


def newPost(request):
    if (request.method == 'POST'):
        if request.user.is_authenticated:
            f = NewspostForm(request.POST)
            print(f.is_valid())
            print(f.cleaned_data)
            if f.is_valid():
                obj = f.save(commit=False)
                # obj.pub_date = timezone.now()
                obj.author = request.user
                obj.save()
                messages.info(request, "You have successfully posted.")
                return redirect('hackernews:index')
                print(obj)
            else:
                messages.error(request, "Please fill all the fields.")
        else:
            messages.error(request, "Please login.")
        return redirect('hackernews:newPostFormRender')
    else:
        return render(request, 'hackernews/new_post.html')


def signup(request):
    if (request.method == 'POST'):
        form = UserCreationForm(request.POST)
        print('form is valid: ', form.is_valid())
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, "Registration successfull")
            return redirect('hackernews:index')
        messages.error(request, "Registration error.")
        return render(request, 'hackernews/signup.html', {'form': form})
    form = UserCreationForm()
    return render(request, 'hackernews/signup.html', {'form': form})
