import os
from flask import Flask
from flask.ext.jsonpify import jsonify

app = Flask(__name__)

@app.route('/')
def hello():
  return jsonify(user="User Name")

if __name__ == '__main__':
  port = int(os.environ.get('PORT', 5000))
  app.run(host='0.0.0.0', port=port)