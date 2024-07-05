from flask import Flask
from application.util import user_util, rate_util
from application.extension import db


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'super secret key'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg://postgres:root@localhost/ConnectX'

    db.init_app(app)
    with app.app_context():
        initialize_tables()
        user_util.add_new_user('username', 'password', True)
        rate_util.add_new({'name': 'Basic', 'speed': 50, 'price': 100, 'description': "Basic sasha"})
        rate_util.add_new({'name': 'Basic1', 'speed': 41, 'price': 24, 'description': "Standart sasha"})

    from application.routes.main import bp as main_bp
    app.register_blueprint(main_bp)

    from application.routes.user_routes import bp as posts_bp
    app.register_blueprint(posts_bp, url_prefix='/user')

    from application.routes.rate_main import bp as rate_bp
    app.register_blueprint(rate_bp, url_prefix='/rate')

    from application.routes.about_us import bp as about_bp
    app.register_blueprint(about_bp, url_prefix='/about')

    from application.routes.contact import bp as contact_bp
    app.register_blueprint(contact_bp, url_prefix='/contact')

    return app


def initialize_tables():
    db.drop_all()
    db.create_all()
