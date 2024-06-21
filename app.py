from flask import render_template, request, redirect, url_for, session
from database import database_owm as owm
from config import app


@app.route('/')
def hello_world():
    return f'Hello World!'


if __name__ == '__main__':
    with app.app_context():
        owm.initialize_tables()
    app.run()
