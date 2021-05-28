from flask import Blueprint, redirect, request
from flask_login import login_required, current_user
from app.models import db,Comment


comment_routes = Blueprint('comments', __name__)


# # Create a comment
# # localhost:5000/api/posts/postid/comments


@comment_routes.route('/comments', methods=['POST'])
@login_required
def post_comment():
    new_comment = Comment(
        user_id=current_user.id,
        post_id=request.json["postId"],
        comment_body=request.json['commentBody']
    )

    db.session.add(new_comment)
    db.session.commit()
    return new_comment.to_dict()

# # Delete a comment
# # localhost:5000/api/posts/postid/comments/id


# @comment_routes.route('/<int:id>/comments/<int:comment_id>', methods=['DELETE'])
# @login_required
# def delete_comment():
#     comment = Comment.query(commentId)
#     db.session.delete(comment)
#     db.session.commit()
#     return redirect('/')

# # Delete a like
# # localhost:5000/api/posts/comments/likeID
