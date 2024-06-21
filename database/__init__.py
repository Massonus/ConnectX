from flask_sqlalchemy import SQLAlchemy

from main import app

db = SQLAlchemy(app)
session = db.session
