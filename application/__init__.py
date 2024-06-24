from flask import Flask

from application.extension import db


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'super secret key'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg://postgres:root@localhost/ConnectX'

    # Initialize Flask extensions here
    db.init_app(app)
    return app


def initialize_tables():
    db.drop_all()
    db.create_all()
