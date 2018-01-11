function myFunction() {
  if(document.getElementById('center').style.display == 'none'){
      	document.getElementById('center').style.display = 'block';
        document.getElementById('print').style.display = 'none';
    		}
    		else {
      	document.getElementById('center').style.display = 'none';
  		}
  }
  var myButton = document.querySelector('#monlien');

  myButton.onclick = function() {
    var mySearch = document.querySelector('#leinput').value;
  if(mySearch !== "") {
    document.querySelector('#monlien').href = "https://www.google.fr/#q=" +mySearch
       	}
       }
function countPopup()
{
setTimeout("Popup()",3000);
return false;
}
function Popup()
{
window.alert('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please','_blank');
}
