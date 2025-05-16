from flask import Flask, jsonify, request
from flask_cors import CORS
from movies import movies

app = Flask(__name__)
CORS(app)

@app.route("/movies", methods=["GET"])
def get_movies():
    title = request.args.get("title")
    page = request.args.get("page", default=1, type=int)
    offset = request.args.get("offset", default=40, type=int)

    start_index = (page - 1) * offset
    end_index = start_index + offset

    if title:
        data = [movie for movie in movies if title.lower() in str(movie["title"]).lower()]
    else:
        data = movies

    total = len(data)
    data = data[start_index:end_index]

    return jsonify({
        "page": page,
        "offset": offset,
        "total": total,
        "movies": data
    })

if __name__ == "__main__":
    app.run(port=5000, debug=True)
