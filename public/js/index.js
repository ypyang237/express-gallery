var button = document.getElementById('photos');
button.addEventListener('click', function(event) {
  if(event.target.className === 'edit') {

  console.log('edit', event.target.dataset.id);
  } else if(event.target.className === 'delete') {

    console.log('delete', event.target.dataset.id);

  }
});