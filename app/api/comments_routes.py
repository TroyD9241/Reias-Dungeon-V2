from flask import Blueprint, redirect, request
from flask_login import login_required, current_user
from app.models import db,Comment


comment_routes = Blueprint('comments', __name__)


# # Create a comment
# # localhost:5000/api/posts/postid/comments

@comment_routes.route('/', methods=['GET', 'POST'])
@login_required
def post_comment():
    current_post_id = request.json['postId']
    print('currentpost===============',current_post_id)
    content = request.json['bodyContent']
    print('content========',content)

    if not content:
        return {"message": "content required"}, 401

    new_comment = Comment(
        user_id=current_user.id,
        post_id=current_post_id,
        comment_body=content
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
