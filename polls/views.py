from django.http.response import HttpResponseRedirect
from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from .models import Question
from django.template import loader
from django.http import Http404
from django.shortcuts import get_object_or_404, render

from django.urls import reverse
from .models import Choice, Question

from django.views import generic

from django.utils import timezone

class IndexView(generic.ListView):
    template_name = 'polls/index.html'
    context_object_name = 'latest_question_list'

    def get_queryset(self):
        """Return the last five published questions."""
        return Question.objects.filter(pub_date__lte=timezone.now()).order_by('-pub_date')[:5]


class DetailView(generic.DetailView):
    model = Question
    template_name = 'polls/detail.html'
    
    def get_queryset(self):
        """
        Excludes any questions that aren't published yet.
        """
        return Question.objects.filter(pub_date__lte=timezone.now())


class ResultsView(generic.DetailView):
    model = Question
    template_name = 'polls/results.html'

# def index(request):
#     latest_question_list=Question.objects.order_by('-pub_date')[:5]
#     # output= ','.join([q.question_text for q in latest_question_list])
#     template=loader.get_template('polls/index.html')
#     context={'latest_question_list': latest_question_list,}
#     # return HttpResponse(output)
#     return HttpResponse(template.render(context, request))

# def detail(request, question_id):
#     # try:
#     #     question=Question.objects.get(pk=question_id)
#     # except Question.DoesNotExist:
#     #     raise Http404('Question does not exist')

#     question = get_object_or_404(Question, pk=question_id)

#     return render(request, 'polls/detail.html', {'question':question})

#     # return HttpResponse("You're looking at question %s." % question_id )

# def results(request, question_id):
#     # response="You're looking at the results of questions %s."
#     # return HttpResponse(response % question_id)
#     question = get_object_or_404(Question, pk=question_id)
#     return render(request, 'polls/results.html', {'question': question})

def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        #redisplay voting form
        return render(request, 'polls/detail.html', {'question': question, 'error_message': "You didn't select a choice",})
    else:
        selected_choice.votes += 1
        selected_choice.save()
        return HttpResponseRedirect(reverse('polls:results', args = (question.id, )))

    # return HttpResponse("You're voting on question %s." % question_id)


