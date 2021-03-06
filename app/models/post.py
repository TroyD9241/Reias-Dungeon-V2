from .db import db
from sqlalchemy import Date, DateTime
import datetime

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(), nullable=False)
    body_content = db.Column(db.String(5000), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    media_url = db.Column(db.String, nullable=False)
    created_at = db.Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(DateTime, default=datetime.datetime.utcnow)

    post_likes = db.relationship(
        'PostLike', backref="like_post", cascade="all, delete")
    comments = db.relationship(
        'Comment', backref="post", cascade="all, delete")
    # photos = db.relationship('Photo', backref='post',
    #                          uselist=False, cascade='all, delete')

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "body_content": self.body_content,
            "media_url": self.media_url,
            "user_id": self.user.to_dict(),
            "number_likes": len(self.post_likes),
            "number_comments": len(self.comments)
        }
