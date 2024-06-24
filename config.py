from flask import Flask

app = Flask(__name__, template_folder='app/templates')
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg://postgres:root@localhost/ConnectX'
app.secret_key = 'super secret key'
