
$("#doBtn").on( "click", function() {
    console.log( "button press" );
    let li = document.createElement('li');
    li.textContent = document.querySelector('#doInput').value;
    $('#doList').append(li);
    document.querySelector('#doInput').value = "";
  });

  $("#buyBtn").on( "click", function() {
    console.log( "button press" );
    let li = document.createElement('li');
    
    li.textContent = document.querySelector('#buyInput').value;
    li.setAttribute("class", "list-group-item")
    $('#buyList').append(li);
    document.querySelector('#buyInput').value = "";
  });

