from django import forms

class RegisterForm(forms.Form):
    username = forms.CharField(required=True, label="Username")
    password = forms.CharField(required=False, widget=forms.PasswordInput)
    email = forms.EmailField(required=False)
    contact = forms.CharField(required=False)