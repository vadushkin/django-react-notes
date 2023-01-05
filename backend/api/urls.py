from django.urls import path

from . import views

urlpatterns = [
    path('', views.get_routes, name="routes"),
    path('note/<int:pk>/', views.get_note, name="note"),
    path('notes/', views.get_notes, name="notes"),
]
