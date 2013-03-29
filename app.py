import os, json
from flask import Flask, request
from hsmatch import HSMatch

app = Flask(__name__)
app.debug = True

@app.route('/')
def index():
  person = request.args.get('person', None)
  callback = request.args.get('callback', None)
  if person is None:
    return json.dumps({})
  else:
    data = match_json(person)
    if callback is None:
      return data
    else:
      return callback + '(' + data + ')'




def match_json(person):
  sim = HSMatch()
  try:
    results = sim.compare(person)[1:6]
    return json.dumps(results)
  except KeyError:
    return json.dumps({})


if __name__ == '__main__':
  port = int(os.environ.get('PORT', 5000))
  app.run(host='0.0.0.0', port=port)