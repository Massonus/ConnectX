from application.models.user import User
from application.extension import db

session = db.session


def add_new_user(username, password, is_admin):
    user = User(username=username, password=password, is_admin=is_admin)
    session.add(user)
    session.commit()


def get_by_id(user_id):
    user = session.query(User).filter_by(id=user_id).first()
    return user.username


def get_by_username_and_password(username, password):
    user = session.query(User).filter_by(username=username, password=password).first()
    return user


def is_username_already_exists(username):
    result = session.query(User).filter_by(username=username).first()
    return True if result is not None else False


def is_email_already_exists(email):
    result = session.query(User).filter_by(email=email).first()
    return True if result is not None else False
