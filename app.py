from database import database_owm as owm
from main import app


@app.route('/')
def hello_world():  # put application's code here
    return f'Hello World!'


if __name__ == '__main__':
    with app.app_context():
        owm.initialize_tables()
    app.run()
