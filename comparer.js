var Comparer = function() {
  this.scrape();
};

Comparer.prototype.initData = function() {
  var allSkills = [];
  var allPeople = [];
  var skillVectors = {};

  $.each(this.data, function (i, person) {
    allPeople.push(person.name);

    if (person.skills.length > 0) {
      $.each(person.skills, function (i, skill) {
        if (allSkills.indexOf(skill.toLowerCase()) === -1 && skill !== '') { allSkills.push(skill.toLowerCase()); }
      });
    }
  });

  this.allSkills = allSkills;
  this.allPeople = allPeople;
};

Comparer.prototype.matchesFor = function (targetName) {
  var target = _.find(this.data, { name: targetName });
  var results = [];
  _.forEach(this.data, function(person, key) {
    results.push({
      name: person.name,
      score: this.jaccardIndex(target.skills, person.skills),
      sharedSkills: _.intersection(target.skills, person.skills)
    });
  }, this);
  results = _.sortBy(results, 'score');
  var indexes = _.range(results.length - 6, results.length - 1).reverse();
  return _.at(results, indexes);
};

Comparer.prototype.jaccardIndex = function(a, b) {
  // http://en.wikipedia.org/wiki/Jaccard_index
  return _.intersection(a, b).length / _.union(a, b).length;
};

Comparer.prototype.scrape = function() {
  var people = [];
  $.each($('.person'), function() {
    var skills = $('.skills', this).text().split(/\n|,\s|\//);
    $.map(skills, function (val, i) {
      return $.trim(val).toLowerCase().replace(/[-\/]/g, '');
    });
    var name = $('.name', this).text();
    people.push({
      name: name,
      skills: skills
    });
  });
  this.data = people;
};