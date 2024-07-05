from application.models.service import Test
from application.util import do_commit
from application.util import session


def get_all():
    session.query(Test).all()


def add_new(values):
    rate = Test(**values)
    session.add(rate)
    do_commit()
