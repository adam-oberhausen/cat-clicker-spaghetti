var cats = {
  cat: [{
      name: "Buttons",
      url: "images/buttons.jpg",
      clickCount: 0,
      id: 0
    },
    {
      name: "Stinky",
      url: "images/stinky.jpg",
      clickCount: 0,
      id: 1
    },
    {
      name: "Yoshi",
      url: "images/yoshi.jpg",
      clickCount: 0,
      id: 2
    },
    {
      name: "Phoenix",
      url: "images/phoenix.jpg",
      clickCount: 0,
      id: 3
    },
    {
      name: "Bubba",
      url: "images/bubba.jpg",
      clickCount: 0,
      id: 4
    },
  ]
};

cats.display = function(cat) {
    if (typeof cat === 'undefined') {
      cat = cats.cat[0];
    }

    $(".cats").empty();

    var formattedCatImage = '';
    var formattedClickCount = '';
    var formatttedCatName = '';

    console.log('This cats click count is ' + cat.clickCount);

    formattedCatImage = HTMLcatImage.replace("%url%", cat.url);
    formattedCatImage = formattedCatImage.replace("%id%", cat.id);
    formattedCatName = HTMLcatName.replace("%name%", cat.name);
    formattedClickCount = HTMLcatClickCount.replace("%id%", cat.id);
    formattedClickCount = formattedClickCount.replace("%count%", cat.clickCount);

    $(".cats").append(formattedCatImage);
    $("#cat-" + cat.id).prepend(formattedCatName);
    $("#cat-" + cat.id).append(formattedClickCount);
};

cats.addClickEvents = function() {
  for (i = 0; i < cats.cat.length; i++) {
    var cat = document.getElementById("cat-" + i);
    if (cat !== null) {
      cat.addEventListener('click', catClickEvent(i));
    }
  }
};

cats.displayList = function() {
  var $catList = $('#list-of-cats');

  cats.cat.forEach(function(cat) {
    $catList.append('<li id="list-item-' + cat.id + '">' + cat.name + '</li>');
    var $listItem = $('#list-item-' + cat.id);
    $listItem.click(function() {
      console.log(cat);
      cats.display(cat);
      cats.addClickEvents();
    });
  });
};

cats.displayList();
cats.display();

function catClickEvent(id) {
  return function() {
    var $clickCount = $("#click-count-" + id);
    var count = $clickCount.html();

    count++;
    $clickCount.html(count);
    cats.cat[id].clickCount = count;    
  };
}

$(document).ready(function() {
  cats.addClickEvents();
});
