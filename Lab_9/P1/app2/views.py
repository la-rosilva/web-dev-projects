from django.shortcuts import render
from .forms import VoteForm

good=0
satisfactory=0
bad=0


def index(request):
    global good, satisfactory, bad
  
    if request.method=='POST':
        form=VoteForm(request.POST)

        if form.is_valid():
            choice=form.cleaned_data['option']

            if choice == 'Good':
                good += 1
            elif choice == 'Satisfactory':
                satisfactory += 1
            elif choice == 'Bad':
                bad += 1
           
            request.session['choice']=choice
    else:
        form=VoteForm()

    total=good+satisfactory+bad

    if total >0:
        good_percent = (good * 100) // total
        sat_percent = (satisfactory * 100) // total
        bad_percent = (bad * 100) // total
    else:
        good_percent = sat_percent = bad_percent = 0

    return render(request, 'index.html', {
        'form': form,
        'good': good_percent,
        'satisfactory': sat_percent,
        'bad': bad_percent,
 
        'choice': request.session.get('choice')
    })
