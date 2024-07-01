from application.models.rate import Rate
from application.extension import db

session = db.session


def get_all():
    return session.query(Rate).all()


def add_new(name, speed, price, description):
    rate = Rate(name=name, speed=speed, price=price, description=description)
    session.add(rate)
    session.commit()


def delete(rate_id):
    rate = get_rate_by_id(rate_id)
    session.delete(rate)
    session.commit()


def get_rate_by_id(rate_id):
    rate = db.session.query(Rate).filter_by(id=rate_id).first()
    return rate
