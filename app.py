import database_owm as owm
from main import app


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'


if __name__ == '__main__':
    owm.initialize_tables()
    app.run()
