from .db import db
from sqlalchemy import Date, DateTime
import datetime

# listings have one artist #! done
# listings have many photos #! done
# test


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(), nullable=False)
    body_content = db.Column(db.String(5000), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(DateTime, default=datetime.datetime.utcnow)

    post_likes = db.relationship(
        'PostLike', backref="like_post", cascade="all, delete")
    comments = db.relationship(
        'Comment', backref="post", cascade="all, delete")
    photos = db.relationship('Photo', backref='post', cascade='all, delete')
    #listing.photos['gives back an array']

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "body_content": self.body_content,
            "comment_id": self.comment_id,
            "user_id": self.user_id,
            "photos": {photo.to_dict() for photo in self.photos},
            "number_likes": len(self.post_likes),
            "number_comments": len(self.comments)
        }
