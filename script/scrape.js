// run on https://www.hackerschool.com/private

var people = [];
$.each($('.person'), function() {
  people.push({
    name: $('.name', this).text(),
    skills: $('.skills', this).text()
  });
});

$.map(people, function (val, i) {
  $.map(val.skills, function (sval, si) {
    return sval.toLowerCase();
  });
  return val;
});

JSON.stringify(people);