from application.database import db, session


def initialize_tables():
    db.drop_all()
    db.create_all()
