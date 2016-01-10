(function() {

  // TODO - put these inside functions

  window.addEventListener('scroll', function(e) {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop;
    var shrinkDistance = 40;
    var header = document.querySelector('header');
    if (distanceY > shrinkDistance) {
      header.className = 'site-header nav-shrink';
    } else {
      header.className = 'site-header';
    }
  });

  /* Randomly selecting a theme for the website */
  // var tagline = document.getElementById('tagline');
  // var taglineArray = ['avocados', 'blueberries', 'chocolate', 'ketchup'];
  // var chosenTagline = taglineArray[Math.floor(Math.random()*taglineArray.length)];

  // document.body.className += " " + chosenTagline;
  // tagline.innerHTML = chosenTagline;
})();