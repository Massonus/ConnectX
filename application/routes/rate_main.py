from flask import Blueprint, render_template
from application.util import rate_util

bp = Blueprint('rate', __name__)


@bp.route('/')
def show_rates():
    rates = rate_util.get_all()
    return render_template('rate/rate_detail.html', rates=rates)
