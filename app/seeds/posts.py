from app.models import db, Post
from sqlalchemy import Date, DateTime
import datetime


def seed_posts():

    toga = Post(title='Himiko Toga', body_content='best girl',
                user_id=2
                )
    jiro = Post(title='Kyouka Jiro', body_content='favorite girl',
                user_id=2
                )
    background = Post(title='Castle', body_content='A castle, took me longer than exepcted :(',
                      user_id=1
                      )
    kimetsu = Post(title='Tanjiro & Kanao', body_content='Not all heros wear capes',
                   user_id=3
                   )
    aerith = Post(title='Aerith', body_content='Generations meet',
                  user_id=1
                  )
    fushigura = Post(title='Fushigura Card', body_content='Part 1 of a series',
                     user_id=5
                     )
    jujutsu = Post(title='Day Off', body_content='The team ;(',
                   user_id=5
                   )
    miwa = Post(title='Miwa', body_content='Im not a meme',
                user_id=5
                )
    kingdom = Post(title='Hi Shin Unit ', body_content='Squad',
                   user_id=1
                   )
    ishitar = Post(title='Ishitar ', body_content='Rin or Ishitar ?',
                   user_id=4)
    nero = Post(title='Nero Claudis', body_content='actually best girl',
                user_id=4)
    lelouch = Post(title='I command you',
                   body_content="You cant change the world without getting your hands dirty.",
                   user_id=1)
    joker = Post(title='Light & Shadow',
                 body_content="Joker a.k.a Akira Kurusu the protagonist from Persona5",
                 user_id=1)

    db.session.add(toga)
    db.session.add(jiro)
    db.session.add(background)
    db.session.add(kimetsu)
    db.session.add(aerith)
    db.session.add(fushigura)
    db.session.add(miwa)
    db.session.add(kingdom)
    db.session.add(ishitar)
    db.session.add(nero)
    db.session.add(jujutsu)
    db.session.add(lelouch)
    db.session.add(joker)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
