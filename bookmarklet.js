// don't reinitialize the bookmarklet if it has already been run

  var HSMatch = function() {
    this.init();
  };

  HSMatch.prototype.init = function() {
    this.modal = new Modal(this);
    this.comparer = new Comparer();
    this.createLinks();

    $('body').on('click', '.close', this.modal.closeHandler());
    $('body').on('click', '.find_matches', this.showModalHandler());
  };

  HSMatch.prototype.createLinks = function() {
    $('.person').css('height', '280px');
    $('.name').filter(function() {
      return $(this).siblings('.skills').text() !== '';
    }).after('<a href="#" class="find_matches">Find matches</a>');
  };

  HSMatch.prototype.showModalHandler = function() {
    var modal = this.modal;
    return function(e) {
      e.preventDefault();
      var name = $(e.target).prev('.name').text();
      modal.show(name);
    };
  };

  HSMatch.prototype.showMatches = function(name, matches) {
    var modal = $('#'+this.modal.id);
    var peopleSelector = $.map(matches, function(match, i) { return '.person:contains("'+match.name+'")'; }).join(', ');
    var people = $(peopleSelector).clone().css({ width: '150px', display: 'inline-block', verticalAlign: 'top', margin: '15px' });
    $('.find_matches, .skills, .irc', people).remove();

    $('.matches', modal).empty().append('<h2>Hacker Schoolers with the skillset most like '+name+':</h2>').after(people);

    $.each(matches, function(i, match) {
      var name = match.name;
      $('.name:contains('+name+')', modal).append('<br><strong>Shared skills:</strong> '+match.sharedSkills.join(', '));
    });
  };

  HSMatch.prototype.getMatches = function (name) {
    var matches = this.comparer.matchesFor(name);
    this.showMatches(name, matches);
  };

  var Modal = function(page) {
    this.id = 'hsmatch-modal';
    this.page = page;

    this.styles = {
      background: '#fff',
      border: '5px solid #000',
      width: '920px',
      height: '550px',
      position: 'fixed',
      top: '50%',
      marginTop: '-275px',
      left: '50%',
      marginLeft: '-460px',
      padding: '0 20px',
      boxShadow: '0 0 15px rgba(0, 0, 0, .5)'
    };
  };

  Modal.prototype.show = function(name) {
    var html = '<div id="'+this.id+'"><h1>Hacker School Match</h1><br><ul class="matches" style="text-align:center"><p class="loading">Loading matches for '+name+' ...</p></ul><p><a href="#" class="close" style="position:absolute;top:10px;right:20px;">Close</a></div>';
    $(html).css(this.styles).appendTo('body');
    this.page.getMatches(name);
  };

  Modal.prototype.closeHandler = function() {
    var id = this.id;
    return function(e) {
      $('#hsmatch-modal').remove();
      e.preventDefault();
    };
  };

  window.hsmatch = new HSMatch();

  $(function() {
    if (typeof hsmatch === 'undefined') { hsmatch.init(); }
  });
