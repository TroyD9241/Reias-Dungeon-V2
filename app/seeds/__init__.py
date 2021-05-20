from flask.cli import AppGroup
from .users import seed_users, undo_users
from .posts import seed_posts, undo_posts
from .comment import seed_comments, undo_comments
from .post_like import seed_post_likes, undo_post_likes
from .photos import seed_photos, undo_photos


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command


@seed_commands.command('all')
def seed():
    seed_users()
    seed_posts()
    seed_comments()
    seed_post_likes()
    seed_photos()

    # Add other seed functions here

# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():
    undo_users()
    undo_posts()
    undo_comments()
    undo_post_likes()
    undo_photos()

    # Add other undo functions here
