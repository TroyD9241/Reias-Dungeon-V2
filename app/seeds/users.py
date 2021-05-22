# from werkzeug.security import generate_password_hash
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(pen_name='Demo', email='demo@aa.io',
                password='password', first_name='demo', last_name='demo', location='demoville', profile_picture='https://64.media.tumblr.com/a64b0f5c12355ab630dab6ac9b4fa778/5ec8a48c96ca0f25-8a/s400x600/a1191f62df89180de22eaa5882ec107ae67a7196.png')
    myhero = User(pen_name='MyHeroFan', email='myhero@aca.com',
                  password='password', first_name='shoto', last_name='todoroki', location='UA', profile_picture='https://i.pinimg.com/236x/67/d3/61/67d361cb47317d70f47300d49e6bb357.jpg')
    kimetsu = User(pen_name='ripRengoku', email='rengo@kimetsu.com',
                   password='password', first_name='kyoujuru', last_name='rengoku', location='sad', profile_picture='https://i.pinimg.com/564x/0c/33/94/0c339402cd5f70cacc72f14fb9f22ff0.jpg')
    fate = User(pen_name='nerosimp', email='nero@numbaone.com',
                password='password', first_name='hakuno', last_name='kishinami', location='extella', profile_picture='https://images2.alphacoders.com/972/thumb-350-972762.jpg')
    jujutsu = User(pen_name='jujutsufan', email='juju@tsu.com',
                   password='password', first_name='satoru', last_name='gojo', location='TOKYO', profile_picture='https://i.redd.it/va8dusoo06861.jpg')

    db.session.add(demo)
    db.session.add(myhero)
    db.session.add(kimetsu)
    db.session.add(fate)
    db.session.add(jujutsu)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
