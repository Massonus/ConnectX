from application.models.news import News
from application.util import do_commit
from application.util import session


def get_all():
    return session.query(News).all()


def add_news(values):
    news = News(**values)
    session.add(news)
    do_commit()
