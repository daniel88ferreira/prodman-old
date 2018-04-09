from django.test import TestCase
from .models import Product


class ProductTests(TestCase):
    def test_create_new_product(self):
        product = Product.objects.create(code='1', name='Regina', size='80')
        product.save()
        saved_product = Product.objects.get(id=1)
        self.assertEqual(saved_product.code, product.code)
