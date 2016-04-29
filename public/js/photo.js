'use strict';

var button = document.getElementById('photos');
button.addEventListener('click', function(event) {
  if(event.target.id === 'edit') {
    window.location='/gallery/' + event.target.dataset.id + '/edit';
  }
  else if(event.target.id === 'delete') {
    var deleteReq = new XMLHttpRequest();
    deleteReq.addEventListener('load', function(data) {
      var data = (JSON.parse(data.currentTarget.responseText));

      if(data.success){
        window.location='/gallery';
      }
      else{
        alert("You cannot delete another user's photo");
      }
    });

    deleteReq.open('DELETE', '/gallery/' + event.target.dataset.id);
    deleteReq.send();
  }
});
