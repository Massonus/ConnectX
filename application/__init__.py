from flask import Flask

from application.config import SECRET_KEY, SQLALCHEMY_DATABASE_URI
from application.extension import db
from application.extension import db
from application.util import user_util, rate_util
from application.util import user_util, rate_util


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = SECRET_KEY
    app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI

    db.init_app(app)
    with app.app_context():
        initialize_tables()
        user_util.add_new_user('username', 'password', True)
        rate_util.add_new({'name': 'Basic Connect', 'speed': 50, 'price': 29.99,
                           'description': "A reliable and affordable plan for everyday internet usage. Perfect for browsing, emailing, and staying connected with friends and family",
                           'superpower': "Super Speed — Delivers speeds up to 200 Mbps, ensuring fast downloads and high-quality video streaming without buffering.",
                           'image_link': 'img/additional-inform-rates/basic.png',
                           'first_sub': 'Week of trust', 'first_sub_text': 'Did you accidentally miss a payment day? Connect Confidence Week and you will have access to the Internet and TV for another 7 days', 'first_sub_image': 'img/additional-inform-rates/basic/basic-first.png',
                           'second_sub': 'Change of address', 'second_sub_text': "Need Home Internet for a day or don't have enough money to pay for a tariff plan? Order the Home Day service for 1 USD and use the Internet until the end of the next day.", 'second_sub_image': 'img/additional-inform-rates/basic/basic-second.png',
                           'third_sub': 'Change of address', 'third_sub_text': "Are you moving? Home Internet and ConnectX change your address together with you - the tariff, account balance and connected services are preserved", 'third_sub_image': 'img/additional-inform-rates/basic/basic-third.png'})

        rate_util.add_new({'name': 'Standard Surf', 'speed': 100, 'price': 49.99,
                           'description': "A balanced plan for those who need a bit more speed and reliability. Suitable for streaming, online learning, and casual gaming.",
                           'superpower': "Enhanced Stability — Offers consistent speeds up to 100 Mbps, allowing for seamless streaming and multitasking.",
                           'image_link': 'img/additional-inform-rates/standard-surf.png',
                           'first_sub': 'Free Wi-Fi router', 'first_sub_text': "Get a free Wi-Fi router when you connect to the Standard Surf tariff.", 'first_sub_image': 'img/additional-inform-rates/standard/standard-surf-first.png',
                           'second_sub': 'Evening Internet', 'second_sub_text': 'Use unlimited internet from 18:00 to 00:00 without any speed reduction.', 'second_sub_image': 'img/additional-inform-rates/standard/standard-surf-second.png',
                           'third_sub': 'Technical support 24/7', 'third_sub_text': 'Get round-the-clock technical support to solve any connection problems.', 'third_sub_image': 'img/additional-inform-rates/standard/standard-surf-third.png'})

        rate_util.add_new({'name': 'Advanced Stream', 'speed': 200, 'price': 69.99,
                           'description': "A high-performance plan for demanding users. Ideal for HD streaming, video conferencing, and heavy downloads.",
                           'superpower': "Super Speed — Delivers speeds up to 200 Mbps, ensuring fast downloads and high-quality video streaming without buffering.",
                           'image_link': 'img/additional-inform-rates/advanced.png',
                           'first_sub': 'Free installation', 'first_sub_text': 'Free installation of equipment when you connect to the Basic Connect tariff.', 'first_sub_image': 'img/additional-inform-rates/advanced/advanced-stream-first.png',
                           'second_sub': 'Night turbo mode', 'second_sub_text': 'Get an increased speed of up to 300 Mbps from 00:00 to 06:00 for night downloads and streaming.', 'second_sub_image': 'img/additional-inform-rates/advanced/advanced-stream-second.png',
                           'third_sub': 'Free access to streaming services', 'third_sub_text': 'Access to popular streaming services at no extra cost.', 'third_sub_image': 'img/additional-inform-rates/advanced/advanced-stream-third.png'})

        rate_util.add_new({'name': 'Ultra Gamer', 'speed': 300, 'price': 89.99,
                           'description': "An excellent plan for avid gamers and streamers. Provides ultra-fast speeds for online gaming and 4K streaming.",
                           'superpower': "Lightning Fast — Ensures a high-speed connection with up to 300 Mbps, minimizing lag and buffering during gameplay and streaming.",
                           'image_link': 'img/additional-inform-rates/gamer.png',
                           'first_sub': 'Priority service', 'first_sub_text': 'Get priority service for fast resolution of technical and support issues.', 'first_sub_image': 'img/additional-inform-rates/ultra/ultra-gamer-first.png',
                           'second_sub': 'Gamer package', 'second_sub_text': 'Special services and benefits for gamers, including discounts on game servers and accessories.', 'second_sub_image': 'img/additional-inform-rates/ultra/ultra-gamer-second.png',
                           'third_sub': 'Optimized for gaming', 'third_sub_text': 'Optimized network to reduce ping and lag during online gaming.', 'third_sub_image': 'img/additional-inform-rates/ultra/ultra-gamer-third.png'})

        rate_util.add_new({'name': 'Pro Connect', 'speed': 500, 'price': 109.99,
                           'description': "A premium plan designed for professionals and heavy internet users. Perfect for large file transfers, video conferencing, and multiple device connections.",
                           'superpower': "Blazing Speed — Delivers exceptional speeds up to 500 Mbps, providing the ultimate experience for demanding tasks and high-volume usage.",
                           'image_link': 'img/additional-inform-rates/pro.png',
                           'first_sub': 'Free consultation on network setup', 'first_sub_text': 'Get a free consultation from our experts to optimize your home network.', 'first_sub_image': 'img/additional-inform-rates/pro/pro-connect-first.png',
                           'second_sub': 'Backup Internet', 'second_sub_text': 'Ensure uninterrupted access to the Internet with a backup connection in case the main one goes down.', 'second_sub_image': 'img/additional-inform-rates/pro/pro-connect-second.png',
                           'third_sub': 'Personal manager', 'third_sub_text': 'Get a personal manager to solve all issues related to your Internet connection and services.', 'third_sub_image': 'img/additional-inform-rates/pro/pro-connect-third.png'})

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
