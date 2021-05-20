from app.models import db, Photo
import random


def seed_photos():
    photo = Photo(media_url='giopwhhgieow', post_id=1)
    photo1 = Photo(media_url='giopwhhgigewwgewgewgeow', post_id=3)
    photo2 = Photo(media_url='giopwhhgieowhrerhah3w4h3', post_id=2)
    photo3 = Photo(media_url='giopwhhgieowhrewegegewgrhah3w4h3', post_id=1)

    db.session.add(photo)
    db.session.add(photo1)
    db.session.add(photo2)
    db.session.add(photo3)
    db.session.commit()


def undo_photos():
    db.session.execute('TRUNCATE photos RESTART IDENTITY CASCADE;')
    db.session.commit()
