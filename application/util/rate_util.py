from application.models.rate import Rate
from application.util import do_commit
from application.util import session


def get_all():
    return session.query(Rate).all()


def add_new(name, speed, price, description):
    rate = Rate(name=name, speed=speed, price=price, description=description)
    session.add(rate)
    do_commit()


def delete(rate_id):
    rate = get_by_id(rate_id)
    session.delete(rate)
    do_commit()


def get_by_id(rate_id):
    rate = session.query(Rate).filter_by(id=rate_id).first()
    return rate


def edit(rate_id, values):
    session.query(Rate).filter_by(id=rate_id).update(values)
    do_commit()
