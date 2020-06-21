function handleColor () {
  // Get the user color input
  let userColor = document.querySelector('#colorbox');
  
  // Set the user input as background color
  document.body.style.background = userColor.value;
  
  // Set the button color also
  document.querySelector('#submit').style.background = userColor.value;
  
  // Set the border color of the input box
  userColor.style.borderColor = userColor.value;
}