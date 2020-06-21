let userColorArray;

    // Declare a counter variable
    let count = 0;

function handleColor() {
    // Grab user input
    let userColors = document.querySelector('#colorbox');
  
    // Create an array from the returned input string...
    userColorArray = userColors.value.split(',');
  
    
  // Create a function to loop through our colors array
  function loopColors() {
    document.body.style.background = userColorArray[count];

    if (++count < userColorArray.length) {
      setTimeout(loopColors, 3000);
    }
  }

  // Call the loopColors function 
  loopColors();
}

function prev() {
    
  if (count == 0) {
    count = userColorArray.length - 1;
  }
  else {
    count--;
  }

  document.body.style.background = userColorArray[count];
}

function next() {
    
  if (count == userColorArray.length - 1) {
    count = 0
  }
  else {
    count++;
  }

  document.body.style.background = userColorArray[count];
}

// function handleLoopedColors() {
  // Grab user input
//  let userColors = document.querySelector('#colorbox');

  // Create an array from the returned input string...
//  let userColorArray = userColors.value.split(',');

  // Declare a counter variable
//  let count = 0;

  // Create a function to loop through our colors array


//  setInterval(function() {
//    document.body.style.background = userColorArray[count++ % userColorArray.length];
//  }, 3000);

// }

/**
 *
 *function selectFunctionOption() {
  let loopForever = document.querySelector('#forever');
  console.log(loopForever.checked);
  (loopForever.checked == true) ? handleLoopedColors(): handleColor();

}
*/