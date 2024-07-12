from flask import Blueprint
from flask import render_template

bp = Blueprint('about', __name__)


@bp.route('/')
def index():
    return render_template('about-us.html')
