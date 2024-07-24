from application.models.user import User
from application.extension import db

session = db.session


def add_new_user(username: str, password: str, is_admin: bool):
    user = User(username=username, password=password, is_admin=is_admin)
    session.add(user)
    session.commit()


def get_by_id(user_id: int):
    user = session.query(User).filter_by(id=user_id).first()
    return user.username


def get_by_username_and_password(username: str, password: str):
    user = session.query(User).filter_by(username=username, password=password).first()
    return user


def is_username_already_exists(username: str):
    result = session.query(User).filter_by(username=username).first()
    return True if result is not None else False


def is_email_already_exists(email: str):
    result = session.query(User).filter_by(email=email).first()
    return True if result is not None else False
