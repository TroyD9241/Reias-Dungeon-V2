
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Post, Comment

post_routes = Blueprint('posts', __name__)

# # Get all posts
# # localhost:5000/api/posts/

# def validation_errors_to_error_messages(validation_errors):
#     """
#     Simple function that turns the WTForms validation errors into a simple list
#     """
#     errorMessages = []
#     for field in validation_errors:
#         for error in validation_errors[field]:
#             errorMessages.append(f"{field} : {error}")
#     return errorMessages


@post_routes.route('/')
def get_posts():
    # posts = db.session.query(Post, User).join(
    #     User, User.id == Post.user_id).all()
    # print('posts===', type(posts)) # lis
    posts = Post.query.all()
    # for post, user in db.session.query(Post, User).join(User, User.id == Post.user_id).all():
    #     post_dict = post.to_dict() # dictionary with a
    #     user_dict = {"user": user.to_dict()}
    #     # print('post and user=======',type(post_dict), type(user_dict))
    #     for value in post_dict:
    #         print('val====',value)
    # a = {"KeyA": 1, "title": 'hello', "id": 3}
    # b = {"KeyB": 2, "user": "test"}
    # test_merge = merge(a, b)

    # print('test_merge======',test_merge)

    # print('postdict======',{"post": post_dict | user_dict})
    # print([post.to_dict() for post in posts])
    # merged = merge(post_dict, user_dict)
    # print('merged-=====---',{"post": merged})
    return {"posts": {post.id: post.to_dict() for post in posts}}


# @post_routes.route('/')
# def get_posts():
#     posts = db.session.query(Post, User).join(
#         User, User.id == Post.user_id).all()
#     # print('====================', posts)
#     return {"posts": [{'post': post[0].to_dict(), "user": post[1].to_dict()} for post in posts]}
#     #! Only returning one post, need to figure out how to itterate through all
#     # return None

    #remove dictionary/list comprehension and use a for loop
    #one line is the primary issue
    # all comprehension can be a for loop


# # GET all of a users posts
# # localhost:5000/api/posts/user/id

#not working
@post_routes.route('/user/<int:artist_id>')
def get_all_user_posts(id):
    posts = Post.query.filter_by(user_id=id).all()

    return {"posts": [post.to_dict() for post in posts]}


# Get one post by id
# localhost:5000/api/posts/id

#! issue with the store returning undefined, Bad data. Currently band-aided.
@post_routes.route('/<int:id>')
def get_single_post(id):
    post = Post.query.get(id)
    # comment = Comment.query.get()

    return {"post": post.to_dict()}

# # create a new post POST
# # localhost:5000/api/posts
@post_routes.route('/<int:id>/comments')
def get_post_comments(id):
    comments = Comment.query.filter_by(post_id=id)

    return {"comment": comment.to_dict() for comment in comments}

@post_routes.route('/', methods=['POST'])
@login_required
def create_post():
    media_url = request.json['image']
    title_json = request.json['title']
    body_content_json = request.json['bodyContent']

    post = Post(
        user_id = current_user.id,
        media_url=media_url,
        title=title_json,
        body_content=body_content_json,
    )

    db.session.add(post)
    db.session.commit()
    return post.to_dict()

# # edit a post by ID patch
# # localhost:5000/api/posts/id


@post_routes.route('/', methods=['PATCH'])
@login_required
def edit_post():
    current_post = Post.query.get(request.json["postId"])
    if(current_post.user_id == current_user.id):
        if(request.json['title']):
            current_post.title = request.json['title']
        if(request.json['bodyContent']):
            current_post.body_content = request.json['bodyContent']

        db.session.commit()
    return current_post.to_dict()
# # delete a post by id DELETE
# # localhost:5000/api/posts/id


@post_routes.route('/', methods=['DELETE'])
@login_required
def delete_post():
    yeeted_post = Post.query.get(request.json['postId'])
    if (yeeted_post):
        db.session.delete(yeeted_post)
        db.session.commit()
        return jsonify('yeeted')
    return jsonify('Not Deleted')
