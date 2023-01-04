from django.shortcuts import get_object_or_404
from rest_framework.response import Response

from .models import Note
from .serializers import NoteSerializer


def get_list_of_notes(_):
    notes = Note.objects.all().order_by('-updated')
    serializer = NoteSerializer(
        instance=notes,
        many=True,
    )
    return Response(serializer.data)


def get_note_details(_, pk):
    serializer = NoteSerializer(
        instance=get_object_or_404(Note, pk=pk),
        many=False,
    )
    return Response(serializer.data)


def create_note(request):
    note = Note.objects.create(
        body=request.data['body'],
    )
    serializer = NoteSerializer(
        instance=note,
        many=False,
    )
    return Response(serializer.data)


def update_note(request, pk):
    serializer = NoteSerializer(
        instance=get_object_or_404(Note, pk=pk),
        data=request.data,
    )

    if serializer.is_valid():
        serializer.save()

    return serializer.data


def delete_note(_, pk):
    get_object_or_404(Note, pk=pk).delete()
    return Response('Note was deleted!')
