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

$('.list-group-item').on("click", function()
{
  console.log("taskText = " + taskText);
  taskText = this.textContent;
  //taskText = document.querySelector(this).textContent;
  console.log("after taskText = " + taskText);
  //crate btn
  let btn = document.createElement('button');
  btn.setAttribute("class", "list-group-item list-group-item-action");
  btn.textContent = taskText;
  $('#doneList').append(btn);
});


