from application.extension import db


class Rate(db.Model):
    __tablename__ = 'rates'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    speed = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.Text, nullable=True)
    superpower = db.Column(db.Text, nullable=True)
    image_link = db.Column(db.Text, nullable=True)

    first_sub = db.Column(db.Text, nullable=True)
    first_sub_text = db.Column(db.Text, nullable=True)
    first_sub_image = db.Column(db.Text, nullable=True)

    second_sub = db.Column(db.Text, nullable=True)
    second_sub_text = db.Column(db.Text, nullable=True)
    second_sub_image = db.Column(db.Text, nullable=True)

    third_sub = db.Column(db.Text, nullable=True)
    third_sub_text = db.Column(db.Text, nullable=True)
    third_sub_image = db.Column(db.Text, nullable=True)

    def __repr__(self):
        return f'<Rate {self.name}>'
