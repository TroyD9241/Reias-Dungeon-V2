from flask import Blueprint, jsonify
from flask_login import current_user, login_user, logout_user, login_required
from app.models import db, User, Post

search_routes = Blueprint('search', __name__)
