import os, json
from flask import Flask, Response, request
from hsmatch import HSMatch
from werkzeug.contrib.cache import SimpleCache

app = Flask(__name__)
app.debug = True

@app.before_first_request
def before_first_request():
  app.hsmcache = SimpleCache()
  app.hsmcache.set('match_data', {})

@app.route('/')
def index():
  person = request.args.get('person', None)
  callback = request.args.get('callback', None)
  content = ''

  if person is None:
    content = json.dumps({})
  else:
    data = match_json(person)
    if callback is None:
      content = data
    else:
      content = callback + '(' + data + ')'

  resp = Response('success', status=200, mimetype='application/javascript')
  return resp

@app.route('/update', methods = ['POST'])
def update():
  data = request.form['data']
  if data is not None:
    app.hsmcache.set('match_data', json.loads(data))

  resp = Response('success', status=200, mimetype='text/plain')
  resp.headers.add('Access-Control-Allow-Origin', '*')
  return resp



def match_json(person):
  data = app.hsmcache.get('match-data')
  if data is not None:
    sim = HSMatch(data)
    try:
      results = sim.compare(person)[1:6]
      return json.dumps(results)
    except KeyError:
      return json.dumps({})
  else:
    return json.dumps({})


if __name__ == '__main__':
  port = int(os.environ.get('PORT', 5000))
  app.run(host='0.0.0.0', port=port)