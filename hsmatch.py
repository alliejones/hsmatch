#!/usr/bin/env python
# encoding: utf-8

import sys, json, os, string
from hcluster import jaccard, euclidean, cityblock

class HSMatch(object):

  def __init__(self):
    self.data = self.load_data()

  def load_data(self):
    data_file = open(os.path.join(os.path.dirname(__file__), 'data.json'))
    data = json.load(data_file)
    data_file.close()
    return data

  def compare(self, compare_person):
    all_skills = []
    all_people = []

    for person, info in self.data.items():
      all_people.append(person)
      all_skills.extend(info['skills'])

    all_skills = list(set(all_skills))

    numerical_data = {}
    for person, info in self.data.items():
      v = []
      for s in all_skills:
        if s in info['skills']:
          v.append(1)
        else:
          v.append(0)
      numerical_data[person] = v

    # compare_person set via command line argument
    results = {}
    for person, vector in numerical_data.items():
      d = jaccard(numerical_data[compare_person], numerical_data[person])
      results[person] = {
        'score': d,
        'shared_skills': list(set(self.data[compare_person]['skills']).intersection(set(self.data[person]['skills'])))
      }

    return sorted(results.items(), key=lambda(u,s):(s['score'], u))


  def print_results(self, results):
    print "Hacker Schoolers with skills most similar to yours:"
    for person, info in results[1:6]:
      print "  %s: %s" % (person, string.join(info['shared_skills'], ', '))

if __name__ == '__main__':
  try:
    compare_person = sys.argv[1]
  except ValueError:
    print "Usage: python delicious_import.py username password"

  sim = HSMatch()
  sim.print_results(sim.compare(compare_person))
