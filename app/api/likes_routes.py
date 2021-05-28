from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, PostLike

like_routes = Blueprint('likes', __name__)
# # User can like a post
# # loaclhost:5000/api/posts/like/likeId


@like_routes.route('/like', methods=["POST"])
@login_required
def like_a_post():
    liked_post = request.json['post_id']

    old_like = PostLike.query.filter(
        PostLike.post_id == liked_post.id,
        PostLike.user_id == current_user.id
    ).first()

    if old_like:
        return
    new_like = PostLike.post(
        user_id=current_user.id,
        post_id=liked_post.id
    )

    db.session.add(new_like)
    db.session.commit()
    return

    # # Delete a like
# # localhost:5000/api/posts/comments/likeID


@like_routes.route('/like', methods=["DELETE"])
@login_required
def unlike():
    post_id = request.json['post_id']
    yeeted_like = PostLike.query.filter(
        PostLike.post_id == post_id,
        PostLike.user_id == current_user.id
    ).first()

    db.session.delete(yeeted_like)
    db.session.commit()
    return
