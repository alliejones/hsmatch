;(function() {
  // don't reinitialize the bookmarklet if it has already been run
  if(typeof HSMatch === 'undefined') {

    var HSMatch = function() {
      this.baseUrl = 'http://0.0.0.0:5000/';
    };

    HSMatch.prototype.init = function() {
      this.modal = new Modal(this);
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
      }
    };

    HSMatch.prototype.showMatchesHandler = function(name) {
      var self = this;
      var name = name;

      return function (matches) {
        var selector = $.map(matches, function(match, i) { return '.person:contains("'+match[0]+'")'; }).join(', ');
        var people = $(selector).clone().css({ width: '150px', display: 'inline-block', verticalAlign: 'top', margin: '15px' });
        $('.find_matches, .skills, .irc', people).remove();
        $('#'+self.modal.id+' .matches').empty().append('<h2>Hacker Schoolers with the skillset most like '+name+':</h2>').after(people);
      };
    };

    HSMatch.prototype.getMatches = function (name) {
      $.getJSON(this.baseUrl + "?person="+encodeURIComponent(name)+"&callback=?", null, this.showMatchesHandler(name));
    };


    /* Not used in bookmarklet itself
     * Returns person/skill data from page as an object
     */
    HSMatch.prototype.scrape = function() {
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



    var Modal = function(page) {
      this.id = 'hsmatch-modal';
      this.page = page;

      this.styles = {
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
    };

    Modal.prototype.show = function(name) {
      var html = '<div id="'+this.id+'"><h1>Hacker School Match</h1><br><ul class="matches" style="text-align:center"><p class="loading">Loading matches for '+name+' ...</p></ul><p><a href="#" class="close">Close</a></div>';
      $(html).css(this.styles).appendTo('body');
      this.page.getMatches(name);
    };

    Modal.prototype.closeHandler = function() {
      var id = this.id;
      return function(e) {
        $('#'+id).remove();
        e.preventDefault();
      }
    };

    window.hsmatch = new HSMatch();

    $(function() { hsmatch.init() });
 }
})();