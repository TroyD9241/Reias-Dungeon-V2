from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, BooleanField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError


class PostForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    body_content = TextAreaField('body_content', validators=[DataRequired()])
