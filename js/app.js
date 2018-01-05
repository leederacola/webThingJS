//alert for empty form......look up form validation 
var taskText = "haha";

$('.alert').hide();

$("#doBtn").on( "click", function() 
{
      let btn = document.createElement('button');
      btn.setAttribute("class", "list-group-item list-group-item-action");
      btn.textContent = document.querySelector('#doInput').value;
      $('#doList').append(btn);
      document.querySelector('#doInput').value = "";
  });

$('#doList').on("click", function()
{
  console.log("taskText = " + taskText);
  taskText = this.textContent;
  //taskText = document.querySelector(this).textContent;
  console.log("after taskText = " + taskText);


  let btn = document.createElement('button');
  btn.setAttribute("class", "list-group-item list-group-item-action");
  btn.textContent = "work damnit";
  $('#doneList').append(btn);
});

//<button type="button" class="list-group-item list-group-item-action">clean kitchen in</button>

  $("#buyBtn").on( "click", function() {
    console.log( "button press" );
    let li = document.createElement('li');
    li.setAttribute("class", "list-group-item");
    li.textContent = document.querySelector('#buyInput').value;
    $('#buyList').append(li);
    document.querySelector('#buyInput').value = "";
  });

