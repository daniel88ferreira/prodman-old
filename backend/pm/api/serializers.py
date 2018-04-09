from rest_framework import serializers
from be.models import *


class MessageSerializer(serializers.Serializer):
    message = serializers.CharField()


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'code', 'name', 'color', 'size')
