from flask_sqlalchemy import SQLAlchemy

from main import app

db = SQLAlchemy(app)


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.BigInteger, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)


def initialize_tables():
    with app.app_context():
        db.drop_all()
        db.create_all()
