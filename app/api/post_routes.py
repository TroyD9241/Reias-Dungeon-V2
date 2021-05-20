from flask import Blueprint, jsonify, redirect, request
from flask_login import login_required, current_user
from app.models import db, User, Post, PostLike, Comment
from app.forms import PostForm

post_routes = Blueprint('posts', __name__)

# Get all posts
# localhost:5000/api/post/


@post_routes.route('/')
@login_required
def get_posts():
    posts = Post.query.all()
    return {"posts": [post.to_dict() for post in posts]}


# GET all of a users posts
# localhost:5000/api/posts/user/id


@post_routes.route('/user/<int:id>')
@login_required
def get_all_user_posts(id):
    posts = Post.query.filter_by(user_id=id).all()

    return {"posts": [post.to_dict() for post in posts]}


# User can like a post
# loaclhost:5000/api/posts/like/likeId

@post_routes.route('/like', methods=["POST"])
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
# Get one post by id
# localhost:5000/api/posts/id


@post_routes.route('/<int:id>')
@login_required
def get_single_post(id):
    post = Post.query.get(id)

    return {"post": post.to_dict()}

# create a new post POST
# localhost:5000/api/posts


@post_routes.route('/', methods=['POST'])
@login_required
def create_post():

    form = PostForm
    data = request.json()

    if form.validate_on_submit():
        post = Post(
            title=form.title.data,
            body_content=form.body_content.data
        )
        db.session.add(post)
        db.session.commit()
    return jsonify('postfailed')

# Create a comment
# localhost:5000/api/posts/postid/comments


@post_routes.route('/comments', methods=['POST'])
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

# edit a post by ID patch
# localhost:5000/api/posts/id


@post_routes.route('/<int:id>', methods=['PATCH'])
@login_required
def edit_post(id):
    form = PostForm()
    current_post = Post.query.get(id)
    if(current_post.user_id == current_user.id):
        if(form.title.data):
            current_post.title = form.title.data
        if(form.body_content.data):
            current_post.body_content = form.body_content.data

        db.session.add(current_post)
        db.session.commit()
    return redirect('/')
# delete a post by id DELETE
# localhost:5000/api/posts/id


@post_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_post(id):
    yeeted_post = Post.query.get(id)
    if (yeeted_post):
        db.session.delete(yeeted_post)
        db.session.commit()
        return jsonify('yeeted')
    return jsonify('Not Deleted')


# Delete a comment
# localhost:5000/api/posts/postid/comments/id


@post_routes.route('/<int:id>/comments/<int:id>', methods=['DELETE'])
@login_required
def delete_comment(commentId):
    comment = Comment.query(commentId)
    db.session.delete(comment)
    db.session.commit()
    return redirect('/')

# Delete a like
# localhost:5000/api/posts/comments/likeID


@post_routes.route('/like', methods=["DELETE"])
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
