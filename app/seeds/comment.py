from app.models import db, Comment


# Adds a demo user, you can add other users here if you want
def seed_comments():

    comment1 = Comment(
        comment_body='this is a great photo', user_id=1, post_id=2

    )

    db.session.add(comment1)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
