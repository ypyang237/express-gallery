'use strict';

var login = document.getElementById('login');

login.addEventListener('click', function() {

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  var request = new XMLHttpRequest();
  request.addEventListener('load', function(data) {
    window.location='/gallery';
  });

  request.open('POST', '/login');
  request.setRequestHeader('Content-type', 'application/json');
  request.send(JSON.stringify({
                username : username,
                password : password
              }));


});