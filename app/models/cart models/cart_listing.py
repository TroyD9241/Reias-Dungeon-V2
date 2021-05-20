from .db import db

# cart listing has one listing
# cart listing has one cart #! done


class Cart_Listing(db.Model):
    __tablename__ = 'cart_listings'
    id = db.Column(db.Integer, primary_key=True)
    listing_id = db.Column(db.Integer, db.ForeignKey(
        'listings.id'), nullable=False)
    cart_id = db.Column(db.Integer, db.ForeignKey('carts.id'), nullable=False)

    cart = db.relationship('Cart', back_populates='cart_listings')

    listing = db.relationship('Listing', back_populates='cart_items')

    def to_dict(self):
        return {
            "id": self.id,
            "listing_id": self.listing_id,
            "cart_id": self.cart_id,
            "listing": self.listing.to_dict()
        }
