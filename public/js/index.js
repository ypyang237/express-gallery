'use strict';

var button = document.getElementById('photos');
button.addEventListener('click', function(event) {
  if(event.target.className === 'edit') {
    console.log('edit', event.target.dataset.id);
  }
  else if(event.target.className === 'delete') {
    var deleteReq = new XMLHttpRequest();
    deleteReq.addEventListener('load', function(data) {
      window.location='/gallery';
    });
      // console.log('delete', event.target.dataset.id);
    deleteReq.open('DELETE', '/gallery/' + event.target.dataset.id);
    deleteReq.send();
  }
});