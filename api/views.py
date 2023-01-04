from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.services import get_note_details, create_note, \
    get_list_of_notes, update_note, delete_note


@api_view(['GET'])
def get_routes(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]

    return Response(routes)


@api_view(['GET', 'POST'])
def get_notes(request):
    match request.method:
        case 'GET':
            return get_list_of_notes(request)
        case 'POST':
            return create_note(request)


@api_view(['GET', 'PUT', 'DELETE'])
def get_note(request, pk):
    match request.method:
        case 'GET':
            return get_note_details(request, pk)
        case 'PUT':
            return update_note(request, pk)
        case 'DELETE':
            return delete_note(request, pk)
