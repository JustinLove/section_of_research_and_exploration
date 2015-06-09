(function() {
  var empty = {
    summarize: function() {return ''},
    icon: function() {}
  }
  model.research_and_exploration = ko.observableArray([])
  ko.computed(function() {
    model.research_and_exploration([])
    model.selection.system().star.cardList().forEach(function(card) {
      new CardViewModel(card).card.then(function(c) {
        model.research_and_exploration.push(c)
      })
    })
  })

  url = 'coui://ui/mods/section_of_research_and_exploration/section_of_research_and_exploration.html'
  $.get(url, function(html) {
    console.log("Loaded html " + url);
    var $html = $(html)
    $('#system-detail').append($html)
    ko.applyBindings(model, $html[0])
  })
})()
