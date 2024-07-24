import os

from dotenv import load_dotenv

dotenv_path = os.path.join(os.path.dirname(__file__), '..', 'dev.env')
load_dotenv(dotenv_path=dotenv_path)

SECRET_KEY = os.getenv("APPLICATION_SECRET_KEY")
SQLALCHEMY_DATABASE_URI = os.getenv("INITIALIZE_DB_ENGINE")
RECAPTCHA_SECRET_KEY = os.getenv("RECAPTCHA_SECRET_KEY")
RECAPTCHA_SITE_KEY = os.getenv("RECAPTCHA_SITE_KEY")
