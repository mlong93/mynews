import flask
from flask import request, jsonify, render_template, flash, redirect, Blueprint
from '../Users/themindinator/mynews/src/form.js' import SearchForm

scraper_bp = Blueprint("scraper", __name__)

@scraper_bp.route('/search')

app = flask.Flask(__name__)
app.config["DEBUG"] = True

@app.route('/')
def home():
    return "<h1>In development</h1><p>This site is a prototype API for a search query.</p>"

@app.errorhandler(404)
def page_not_found(e):
    return "<h1>404</h1><p>The resource could not be found.</p>", 404

@app.route('/submit', methods = ['POST'])
def onSubmit():
    form = SearchForm()
    
    if form.validate_on_submit():
        pass
    return render_template('login.html', title='Sign In', form=form)

app.run()