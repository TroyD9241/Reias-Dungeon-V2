from flask import Blueprint, jsonify
from flask_login import current_user, login_user, logout_user, login_required
from app.models import db, User
from app.forms import SignupForm

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/', methods=['DELETE'])
@login_required
def delete_user():
    if current_user.id == 1:
        return

    user_id = current_user.id
    sacrificed_user = User.query.get(user_id)
    db.session.delete(sacrificed_user)
    db.session.commit()

    return {'message': 'user deleted'}


@user_routes.route('/<int:id>', methods=['PATCH'])
@login_required
def edit_user():
    user = User.query.get(current_user.id)
    edit_form = SignupForm()
    edit_form.populate_obj(user)
    return user.to_dict()
