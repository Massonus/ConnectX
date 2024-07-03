from flask import Blueprint, render_template, redirect, request
from application.util import rate_util

bp = Blueprint('category', __name__)


@bp.route('/')
def show_categories():
    return render_template('category/category.html')
