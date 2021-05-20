from .db import db
from sqlalchemy import Date, DateTime
import datetime

# a cart has one user #! done
# a cart has many cart_listings #! done
# a cart has one order


class Cart(db.Model):
    __tablename__ = "carts"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    order_id = db.Column(db.Integer, nullable=True)
    created_at = db.Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(DateTime, default=datetime.datetime.utcnow)

    user = db.relationship("User", backref="cart", cascade="all, delete")

    cart_listings = db.relationship(
        'Cart_Listing', back_populates='cart', cascade='all, delete')

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "order_id": self.order_id,
            "listings": [listing.to_dict() for listing in self.cart_listings]
        }
