from flask import Blueprint
from flask import render_template

bp = Blueprint('contact', __name__)


@bp.route('/')
def index():
    return render_template('contact/contact.html')
