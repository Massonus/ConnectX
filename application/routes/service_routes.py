from flask import Blueprint, render_template, redirect, request
from application.util import rate_util

bp = Blueprint('service', __name__)


@bp.route('/')
def show_services():
    return render_template('service/service.html')
