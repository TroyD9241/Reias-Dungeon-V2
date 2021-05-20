from .db import db
from sqlalchemy import Date, DateTime
import datetime


class Comment (db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    comment_body = db.Column(db.String(300), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey(
        'posts.id'), nullable=False)

    user = db.relationship(
        "User", back_populates="comments"
    )

    def to_dict(self):
        return {
            "id": self.id,
            "comment_body": self.comment_body,
            "user_id": self.user_id,
            "post_id": self.listing_id,
        }
