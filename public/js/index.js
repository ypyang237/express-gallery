'use strict';



var button = document.getElementById('photos');
button.addEventListener('click', function(event) {
  if(event.target.className === 'edit') {
    window.location='/gallery/' + event.target.dataset.id + '/edit';
  }
  else if(event.target.className === 'delete') {
    var deleteReq = new XMLHttpRequest();
    deleteReq.addEventListener('load', function(data) {
      window.location='/gallery';
    });

    deleteReq.open('DELETE', '/gallery/' + event.target.dataset.id);
    deleteReq.send();
  }
});

var addButton = document.getElementById('new_photo');
addButton.addEventListener('click', function(){
  window.location='/gallery/new';
});
