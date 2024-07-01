from flask import Blueprint, render_template, redirect
from application.util import rate_util

bp = Blueprint('rate', __name__)


@bp.route('/')
def show_rates():
    rates = rate_util.get_all()
    return render_template('rate/rate_detail.html', rates=rates)


@bp.route('/basic/<int:rate_id>')
def show_rate_by_id(rate_id):
    rate = rate_util.get_rate_by_id(rate_id)  # Здесь должна быть функция для получения тарифа по его ID
    return render_template('rate/rate_main_page.html', rate=rate)


@bp.route('/delete/<int:rate_id>')
def delete_rate(rate_id):
    rate_util.delete(rate_id)
    return redirect('/rate')