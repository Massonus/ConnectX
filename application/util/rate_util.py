from application.models.rate import Rate
from application.extension import db

session = db.session


def get_all():
    return session.query(Rate).all()


def add_new(name, speed, price, description):
    rate = Rate(name=name, speed=speed, price=price, description=description)
    session.add(rate)
    session.commit()
