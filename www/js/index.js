App.controller('home', function (page) {
    // put stuff here
  });

  App.controller('about', function (page) {
    // put stuff here
  });

  
  App.controller('experience', function (page) {
    // put stuff here
  });

  
  App.controller('skills', function (page) {
    // put stuff here
  });

  try {
    App.restore();
  } catch (err) {
    App.load('home');
  }