from flask import render_template, request, redirect, url_for, session
from database import database_owm as owm
from config import app


@app.route('/')
@app.route('/login', methods=['GET', 'POST'])
def login():
    msg = ''
    if request.method == 'POST' and 'username' in request.form and 'password' in request.form:
        username = request.form['username']
        password = request.form['password']

        account = owm.User.get_by_username_and_password(username, password)
        if account:
            session['loggedin'] = True
            session['id'] = account.id
            session['username'] = account.username
            msg = 'Logged in successfully !'
            return render_template('index.html', msg=msg)
        else:
            msg = 'Incorrect username / password !'
    return render_template('login.html', msg=msg)


@app.route('/logout')
def logout():
    session.pop('loggedin', None)
    session.pop('id', None)
    session.pop('username', None)
    return render_template('index.html')


@app.route('/test')
def test_username():
    username = session.get('username')
    return username if username is not None else 'Unauthorized'


if __name__ == '__main__':
    with app.app_context():
        owm.initialize_tables()
        owm.User.add_new_user('username', 'password')
    app.run()
