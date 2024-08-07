from flask import Blueprint, render_template, redirect, request
from application.util import rate_util

bp = Blueprint('rate', __name__)


@bp.route('/')
def show_rates():
    rates = rate_util.get_all()
    return render_template('rates/rates.html', rates=rates)


@bp.route('/description')
def show_rate_description():
    rates = rate_util.get_all()
    return render_template('rates/rate-info.html', rates=rates)


@bp.route('/add', methods=('POST',))
def do_add():
    values = {'name': request.form['name'], 'speed': request.form['speed'],
              'price': request.form['price'],
              'description': request.form['description']}
    rate_util.add_new(values)
    return redirect('/rate')


@bp.route('/add', methods=('GET',))
def add_page():
    return render_template('rates/rate-add.html')


@bp.route('/editPage/<int:rate_id>', methods=['GET'])
def edit_page(rate_id: int):
    rate = rate_util.get_by_id(rate_id)
    return render_template('rates/rate-edit.html', rate=rate)


@bp.route('/edit/<int:rate_id>', methods=('POST',))
def do_edit(rate_id: int):
    if request.method == 'POST':
        values = {'name': request.form['name'], 'speed': request.form['speed'],
                  'price': request.form['price'],
                  'description': request.form['description']}
        rate_util.edit(rate_id, values)
    return redirect('/rate')


@bp.route('/delete/<int:rate_id>')
def delete_rate(rate_id: int):
    rate_util.delete(rate_id)
    return redirect('/rate')
