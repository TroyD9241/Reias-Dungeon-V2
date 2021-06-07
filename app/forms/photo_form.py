from flask_wtf import FlaskForm
from wtforms import FileField, IntegerField
from wtforms.validators import DataRequired


class PhotoForm(FlaskForm):
    media_url = FileField('media_url', validators=[DataRequired()])
    post_id = IntegerField('post_id')
