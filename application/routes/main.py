from datetime import datetime

from flask import Blueprint
from flask import render_template, jsonify
from application.config import EMAILJS_TEMPLATE_ID, EMAILJS_SERVICE_ID, PUBLIC_EMAILJS_KEY

bp = Blueprint('main', __name__)


@bp.route('/')
def index():
    return render_template('index.html')


@bp.route('/get_end_date')
def get_end_date():
    end_date = datetime(2024, 8, 8, 15, 30, 0)
    end_date_str = end_date.strftime('%Y-%m-%d %H:%M:%S')
    return jsonify({'end_date': end_date_str})


@bp.route('/api/keys', methods=['GET'])
def get_keys():
    keys = {
        'public_key': PUBLIC_EMAILJS_KEY,
        'service_id': EMAILJS_SERVICE_ID,
        'template_id': EMAILJS_TEMPLATE_ID
    }
    return jsonify(keys)
