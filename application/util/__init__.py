from application.extension import db

session = db.session


def do_commit():
    try:
        session.commit()
    except Exception:
        session.rollback()
