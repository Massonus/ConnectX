from database import db, session


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.BigInteger, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)

    @staticmethod
    def add_new_user(username, password):
        user = User(username=username, password=password)
        session.add(user)
        session.commit()

    @staticmethod
    def get_by_id(user_id):
        user = session.query(User).filter_by(id=user_id).first()
        return user.username

    @staticmethod
    def get_by_username_and_password(username, password):
        user = session.query(User).filter_by(username=username, password=password).first()
        return user

    @staticmethod
    def is_username_already_exists(username):
        result = session.query(User).filter_by(username=username).first()
        return True if result is not None else False

    @staticmethod
    def is_email_already_exists(email):
        result = session.query(User).filter_by(email=email).first()
        return True if result is not None else False


def initialize_tables():
    db.drop_all()
    db.create_all()
