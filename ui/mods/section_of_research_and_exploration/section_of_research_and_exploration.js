(function() {
  var empty = {
    summarize: function() {return ''},
    icon: function() {}
  }
  model.research_and_exploration = ko.observable(empty)
  ko.computed(function() {
    var card = model.selection.system().star.card()
    if (card) {
      new CardViewModel(card).card.then(model.research_and_exploration)
    } else {
      model.research_and_exploration(empty)
    }
  })

  url = 'coui://ui/mods/section_of_research_and_exploration/section_of_research_and_exploration.html'
  $.get(url, function(html) {
    console.log("Loaded html " + url);
    var $html = $(html)
    $('#system-detail').append($html)
    ko.applyBindings(model, $html[0])
  })
})()
