from flask import Blueprint, render_template, redirect, request
from application.util import news_util

bp = Blueprint('news', __name__)


@bp.route('/')
def show_news():
    news = news_util.get_all()
    return render_template('news/news.html', news=news[0])
