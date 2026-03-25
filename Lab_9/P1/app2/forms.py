from django import forms
class VoteForm(forms.Form):
    CHOICES=[
        ('Good','Good'),
        ('Satisfactory','Satisfactory'),
        ('Bad','Bad'),
    ]

    option=forms.ChoiceField(
        choices=CHOICES,
        widget=forms.RadioSelect,
        required=True
    )