from application.extension import db


class News(db.Model):
    __tablename__ = 'news'
    id = db.Column(db.BigInteger, primary_key=True)
    title = db.Column(db.String)
    description = db.Column(db.String)
    news_date = db.Column(db.String)
    category = db.Column(db.String)
