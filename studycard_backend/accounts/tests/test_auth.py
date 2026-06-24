# from rest_framework.test import APIClient
# from django.urls import reverse
#
# def test_registration():
#
#     client = APIClient()
#
#     url = reverse("register")
#
#     response = client.post(
#         url,
#         {
#             "username": "salina",
#             "password": "12345"
#         }
#     )
#
#     assert response.status_code == 201
import pytest
from rest_framework.test import APIClient
from django.urls import reverse
#regiter
@pytest.mark.django_db
def test_user_registration():
    client = APIClient()

    url = reverse("register")

    data = {
        "username": "testuser",
        "password": "testpass123"
    }

    response = client.post(url, data)

    assert response.status_code == 201


# login
@pytest.mark.django_db
def test_user_login():
    client = APIClient()

    # create user first
    from django.contrib.auth.models import User
    User.objects.create_user(username="loginuser", password="pass123")

    url = reverse("login")

    data = {
        "username": "loginuser",
        "password": "pass123"
    }

    response = client.post(url, data)

    assert response.status_code == 200