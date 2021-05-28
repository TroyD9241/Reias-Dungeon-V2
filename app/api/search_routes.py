from flask import Blueprint

from app.models import db, Post

search_routes = Blueprint('search', __name__)

@search_routes.route('/<string:query>')
def get_results(query):
    results = Post.query.filter(
        Post.title.ilike(f"%{query}%")
    ).all()

    return {post.id: post.to_dict() for post in results}
