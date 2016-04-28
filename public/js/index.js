'use strict';

var addButton = document.getElementById('new_photo');
addButton.addEventListener('click', function(){
  window.location='/gallery/new';
});

var logOut = document.getElementById('logOut');
logOut.addEventListener('click', function() {
  window.location='/logout';
});
