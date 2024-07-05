from flask import Blueprint, render_template, redirect, request
from application.util import rate_util

bp = Blueprint('rate', __name__)


@bp.route('/')
def show_rates():
    rates = rate_util.get_all()
    return render_template('sasha/rate/rates.html', rates=rates)


@bp.route('/basic/<int:rate_id>')
def show_rate_by_id(rate_id):
    rate = rate_util.get_by_id(rate_id)  # Здесь должна быть функция для получения тарифа по его ID
    return render_template('sasha/rate/rate_info.html', rate=rate)


@bp.route('/add', methods=('POST',))
def do_add():
    values = {'name': request.form['name'], 'speed': request.form['speed'],
              'price': request.form['price'],
              'description': request.form['description']}
    rate_util.add_new(values)
    return redirect('/sasha')


@bp.route('/add', methods=('GET',))
def add_page():
    return render_template('sasha/rate/rate_add.html')


@bp.route('/editPage/<int:rate_id>', methods=['GET'])
def edit_page(rate_id):
    rate = rate_util.get_by_id(rate_id)
    return render_template('sasha/rate/rate_edit.html', rate=rate)


@bp.route('/edit/<int:rate_id>', methods=('POST',))
def do_edit(rate_id):
    if request.method == 'POST':
        values = {'name': request.form['name'], 'speed': request.form['speed'],
                  'price': request.form['price'],
                  'description': request.form['description']}
        rate_util.edit(rate_id, values)
    return redirect('/sasha')


@bp.route('/delete/<int:rate_id>')
def delete_rate(rate_id):
    rate_util.delete(rate_id)
    return redirect('/sasha')
