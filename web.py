from flask import Flask
from flask_cors import CORS
from api.setup import start_api
from react_site import start_react_site


# Flask constructor takes the name of
# current module (__name__) as argument.
app = Flask(__name__)
CORS(app)

start_api(app)

start_react_site(app)

# main driver function
if __name__ == '__main__':

	# run() method of Flask class runs the application
	# on the local development server.
	app.run()
