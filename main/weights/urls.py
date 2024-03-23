from django.urls import path
from .views import exersizeHandle, addWeight

urlpatterns = [
    path('exersize/', exersizeHandle, name = 'exersize'),
    path('addWeight/', addWeight, name = 'addWeight'),
]