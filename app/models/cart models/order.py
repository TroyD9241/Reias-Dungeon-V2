from .db import db
from sqlalchemy import Date

# an order has one user
# an order has one cart


class Order(db.Model):
    __tablename__ = 'orders'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    # artist_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    purchase_date = db.Column(Date)
    shipping_address = db.Column(db.String(500))
    is_completed = db.Column(db.Boolean, default=False, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "purchase_date": self.purchase_date,
            "shipping_address": self.shipping_address
        }
