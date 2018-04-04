from rest_framework import views, status, generics
from rest_framework.response import Response
from .serializers import *


# Create your views here.
class EchoView(views.APIView):
    def post(self, request):
        serializer = MessageSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED)


class CreateView(generics.ListCreateAPIView):
    """This class defines the create behavior of our rest api."""
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def perform_create(self, serializer):
        """Save the post data when creating a new product."""
        serializer.save()
