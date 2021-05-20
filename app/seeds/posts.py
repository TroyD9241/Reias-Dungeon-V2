from app.models import db, Post
from sqlalchemy import Date, DateTime
import datetime


def seed_posts():

    post1 = Post(title='fake', body_content='ohiewgpwea pgwegwehi pgowhgio',
                 user_id=2
                 )
    post2 = Post(title='faker', body_content='ohiewgpwea pgwegwehi pgowhgio',
                 user_id=2
                 )
    post3 = Post(title='fakrerwre', body_content='ohiewgpwea pgwegwehi pgowhgio',
                 user_id=2
                 )

    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
