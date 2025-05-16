import pytest
from app import app

@pytest.fixture
def client():
    return app.test_client()

def test_get_movies(client):
    response = client.get("/movies")
    assert response.status_code == 200
    data = response.get_json()
    assert "movies" in data
    assert isinstance(data["movies"], list)

def test_get_movies_with_title(client):
    response = client.get("/movies?title=Matrix")
    assert response.status_code == 200
    data = response.get_json()
    assert "movies" in data
    assert isinstance(data["movies"], list)
    assert all("Matrix" in movie["title"] for movie in data["movies"])
