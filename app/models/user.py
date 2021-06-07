from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin



class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=True)
    last_name = db.Column(db.String(50), nullable=True)
    location = db.Column(db.String(75), nullable=True)
    email = db.Column(db.String(255), nullable=False)
    hashed_password = db.Column(db.String(4000), nullable=False)
    pen_name = db.Column(db.String(100), nullable=False)
    profile_picture = db.Column(db.String(200), nullable=True)

    posts = db.relationship(
        'Post', backref='user', cascade='all, delete')

    user_post_likes = db.relationship(
        "PostLike", backref="user", cascade='all, delete'
    )

    comments = db.relationship(
        "Comment", back_populates="user", cascade='all, delete')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "location": self.location,
            "email": self.email,
            "pen_name": self.pen_name,
            "profile_picture": self.profile_picture,
            "likes": {like.post_id: like.post_id for like in self.user_post_likes},
        }

    def full_name(self):
        return {
            "user": self.first_name + self.last_name
        }
