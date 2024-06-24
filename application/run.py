from flask import render_template, request, session
from application import create_app, initialize_tables
import re
import application.util.user_util as user_util

app = create_app()


@app.route('/')
@app.route('/login', methods=['GET', 'POST'])
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


@app.route('/register', methods=['GET', 'POST'])
def register():
    msg = ''
    if request.method == 'POST' and 'username' in request.form and 'password' in request.form:
        username = request.form['username']
        password = request.form['password']
        is_username_exist = user_util.is_username_already_exists(username)

        if is_username_exist:
            msg = 'Username already exists !'
        elif not re.match(r'[A-Za-z0-9]+', username):
            msg = 'Username must contain only characters and numbers !'
        else:
            user_util.add_new_user(username, password)
            msg = 'You have successfully registered !'
    return render_template('register.html', msg=msg)


@app.route('/test')
def test_username():
    username = session.get('username')
    return username if username is not None else 'Unauthorized'


if __name__ == '__main__':
    with app.app_context():
        initialize_tables()
        user_util.add_new_user('username', 'password')
    app.run()
