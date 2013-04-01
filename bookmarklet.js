$(document).ready(function() { if (typeof HSMatch === 'undefined') {
  var baseUrl = 'http://0.0.0.0:5000/';

  /* Results display */

  var modalStyles = {
    background: '#fff',
    border: '5px solid #000',
    width: '920px',
    height: '500px',
    position: 'fixed',
    top: '50%',
    marginTop: '-250px',
    left: '50%',
    marginLeft: '-485px',
    padding: '0 20px',
    boxShadow: '0 0 15px rgba(0, 0, 0, .5)'
  };

  var showModal = function (name) {
    var html = '<div id="hsmatch-modal"><h1>Hacker School Match</h1><br><ul class="matches" style="text-align:center"><p class="loading">Loading matches for '+name+' ...</p></ul><p><a href="#" class="close">Close</a></div>';
    $(html).css(modalStyles).appendTo('body');
    getMatches(name);
  };

  var closeModal = function (e) { $('#hsmatch-modal').remove(); e.preventDefault(); }

  var findMatches = function (e) {
    e.preventDefault();
    var name = $(e.target).prev('.name').text();
    showModal(name);
  };

  var createLinks = function() {
    $('.person').css('height', '280px');
    $('.name').filter(function() {
      return $(this).siblings('.skills').text() !== '';
    }).after('<a href="#" class="find_matches">Find matches</a>');

  };


  var getMatches = function (name) {
    $.getJSON(baseUrl + "?person="+encodeURIComponent(name)+"&callback=?", null, showMatches(name));
  };

  var showMatches = function(name) {
    var name = name;

    return function (matches) {
      var selector = $.map(matches, function(match, i) { return '.person:contains("'+match[0]+'")'; }).join(', ');
      var people = $(selector).clone().css({ width: '150px', display: 'inline-block', verticalAlign: 'top', margin: '15px' });
      $('.find_matches, .skills, .irc', people).remove();
      $('#hsmatch-modal .matches').empty().append('<h2>Hacker Schoolers with the skillset most like '+name+':</h2>').after(people);
    };
  };


  /* Setup */

  // Scrape the skill data from the page
  var scrape = function() {
    var people = [];
    $.each($('.person'), function() {
      var skills = $('.skills', this).text().split(', ');
      $.map(skills, function (val, i) {
        return $.trim(val).toLowerCase().replace(/[-\/]/g, '');
      });
      people.push({
        name: $('.name', this).text(),
        skills: skills
      });
    });
    return people;
  };

  createLinks();

  $('body').on('click', '.close', closeModal);
  $('body').on('click', '.find_matches', findMatches);

  window.HSMatch = {};
  window.HSMatch.data = scrape();

  $.post(baseUrl+'update', { data: HSMatch.data });
}});