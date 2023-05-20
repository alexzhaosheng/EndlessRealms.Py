import os
from flask import Flask

from flask import send_from_directory
def start_react_site(app: Flask):    
    path = os.path.abspath(os.path.join(os.getcwd(), "ui/build"))
    @app.route('/')
    def ui_site():	
        print (path)
        return send_from_directory(path, "index.html")

    static_path = os.path.join(path, "static")
    @app.route('/static/<folder>/<file>')
    def static_files(folder, file):
        print("load:"+os.path.join(static_path, folder) + "   file:" + file)
        return send_from_directory(os.path.join(static_path, folder), file)
	
