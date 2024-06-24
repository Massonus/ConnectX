from flask import Blueprint
from flask import session

bp = Blueprint('main', __name__)


@bp.route('/')
def test_username():
    username = session.get('username')
    return username if username is not None else 'Unauthorized'
