from django.db import models


# Create your models here.
class Product(models.Model):
    code = models.CharField(max_length=200, unique=True)
    name = models.CharField(max_length=200)
    color = models.CharField(max_length=20, default='raw')
    size = models.CharField(max_length=20)
    final = models.BooleanField(default=False)
    stock = models.IntegerField(default=0)

    def __str__(self):
        return '{}:{}:{}:{}'.format(self.code, self.name, self.color, self.size)
