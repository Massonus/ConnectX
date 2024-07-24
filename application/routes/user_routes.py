import re

import requests
from flask import Blueprint
from flask import render_template, request, jsonify
from flask import session

import application.util.user_util as user_util
from application.config import RECAPTCHA_SECRET_KEY, RECAPTCHA_SITE_KEY

bp = Blueprint('user', __name__)


@bp.route('/')
@bp.route('/login', methods=['GET', 'POST'])
def login():
    msg = ''
    if request.method == 'POST' and 'username' in request.form and 'password' in request.form:
        username = request.form['username']
        password = request.form['password']

        account = user_util.get_by_username_and_password(username, password)
        if account:
            session['loggedin'] = True
            session['id'] = account.id
            session['username'] = account.username
            if account.is_admin:
                session['is_admin'] = True
            else:
                session['is_admin'] = False
            msg = 'Logged in successfully !'
            return render_template('index.html', msg=msg)
        else:
            msg = 'Incorrect username / password !'
    return render_template('user/login.html', msg=msg)


@bp.route('/logout')
def logout():
    session.pop('loggedin', None)
    session.pop('id', None)
    session.pop('username', None)
    session.pop('is_admin', None)
    return render_template('index.html')


@bp.route('/register', methods=['GET', 'POST'])
def register():
    msg = ''
    if request.method == 'POST':
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        is_username_exist = user_util.is_username_already_exists(username)

        if is_username_exist:
            msg = 'Username already exists !'
        elif not re.match(r'[A-Za-z0-9]+', username):
            msg = 'Username must contain only characters and numbers !'
        else:
            user_util.add_new_user(username, password, False)
            return jsonify({'registered': True})
    return render_template('user/register.html', msg=msg, site_key=RECAPTCHA_SITE_KEY)


@bp.route('/verify-captcha', methods=['POST'])
def verify_captcha():
    response = request.json.get('response')
    verify_url = f'https://www.google.com/recaptcha/api/siteverify?secret={RECAPTCHA_SECRET_KEY}&response={response}'
    verification_response = requests.post(verify_url)
    verification_result = verification_response.json()
    verification_result.update({'username': request.json.get('username'), 'password': request.json.get('password')})
    return jsonify(verification_result)
