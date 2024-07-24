from application.models.rate import Rate
from application.util import do_commit
from application.util import session


def get_all():
    return session.query(Rate).all()


def add_new(values: dict):
    rate = Rate(**values)
    session.add(rate)
    do_commit()


def delete(rate_id: int):
    rate = get_by_id(rate_id)
    session.delete(rate)
    do_commit()


def get_by_id(rate_id: int):
    rate = session.query(Rate).filter_by(id=rate_id).first()
    return rate


def edit(rate_id: int, values: dict):
    session.query(Rate).filter_by(id=rate_id).update(values)
    do_commit()
