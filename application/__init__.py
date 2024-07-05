from flask import Flask
from application.util import user_util, rate_util, service_util, news_util
from application.extension import db


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'super secret key'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg://postgres:root@localhost/ConnectX'
    # app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg://postgres:massonus@connectx.cps2ceiewud2.eu-central-1.rds.amazonaws.com/postgres'

    db.init_app(app)
    with app.app_context():
        initialize_tables()
        user_util.add_new_user('username', 'password', True)
        rate_util.add_new({'name': 'Basic', 'speed': 50, 'price': 100, 'description': "Basic rate"})
        rate_util.add_new({'name': 'Basic1', 'speed': 41, 'price': 24, 'description': "Standart rate"})
        category_util.add_new({'name': 'service'})
        news_util.add_news({'title': 'Test new', 'description': 'Test news'})
        news_util.add_news({'title': 'Test new1', 'description': 'Test news'})

    from application.routes.main import bp as main_bp
    app.register_blueprint(main_bp)

    from application.routes.user_routes import bp as posts_bp
    app.register_blueprint(posts_bp, url_prefix='/user')

    from application.routes.rate_main import bp as rate_bp
    app.register_blueprint(rate_bp, url_prefix='/rate')

    from application.routes.news_routes import bp as news_bp
    app.register_blueprint(news_bp, url_prefix='/news')

    from application.routes.service_routes import bp as service_bp
    app.register_blueprint(service_bp, url_prefix='/service')

    return app


def initialize_tables():
    db.drop_all()
    db.create_all()
