from .db import db

# a photo has one listing #! done


class Photo(db.Model):
    __tablename__ = 'photos'
    id = db.Column(db.Integer, primary_key=True)
    media_url = db.Column(db.String(5000), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey(
        'posts.id'), nullable=False)


    def to_dict(self):
        return {
            "id": self.id,
            "media_url": self.media_url,
            "post_id": self.post_id
        }
