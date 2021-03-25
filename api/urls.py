from django.urls import path
from .views import RoomView, CreateRoomView


urlpatterns = [
    path('room', RoomView.as_view(), name='api_view'),
    path('create-room', CreateRoomView.as_view())
]
