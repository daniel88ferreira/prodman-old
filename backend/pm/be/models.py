from django.db import models


# Create your models here.
class Product(models.Model):
    code = models.CharField(max_length=200, unique=True)
    name = models.CharField(max_length=200)

    def __str__(self):
        return '{}:{}'.format(self.code, self.name)
