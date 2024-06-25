from flask import Blueprint
from flask import session
from flask import render_template, request, session

bp = Blueprint('main', __name__)


@bp.route('/')
def index():
    username = session.get('username')
    return render_template('index.html')
