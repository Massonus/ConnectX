from flask import Flask
from application.util import user_util
from application.extension import db


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'super secret key'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg://postgres:root@localhost/ConnectX'

    db.init_app(app)
    with app.app_context():
        initialize_tables()
        user_util.add_new_user('username', 'password')

    from application.routes.main import bp as main_bp
    app.register_blueprint(main_bp)

    from application.routes.user_routes import bp as posts_bp
    app.register_blueprint(posts_bp, url_prefix='/user')  ###
    return app


def initialize_tables():
    db.drop_all()
    db.create_all()
