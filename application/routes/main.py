from datetime import datetime

from flask import Blueprint
from flask import render_template, jsonify

bp = Blueprint('main', __name__)


@bp.route('/')
def index():
    return render_template('index.html')


@bp.route('/get_end_date')
def get_end_date():
    end_date = datetime(2024, 8, 8, 15, 30, 0)
    end_date_str = end_date.strftime('%Y-%m-%d %H:%M:%S')
    return jsonify({'end_date': end_date_str})
