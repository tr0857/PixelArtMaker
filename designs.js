
// set variables:
var canvas = document.getElementById('pixelCanvas');
var colorPicker = document.getElementById("colorPicker");
var selectedColor = colorPicker.value;

// When size is submitted by the user, call makeGrid()
// This builds a new grid for the canvas based on height and width:
function makeGrid(height, width) {
  // reset grid:
  var grid = '';

  // two loops through height and width to create a new grid:
  // loop height:
  for (var h = 1; h < height; h++) {
    grid += '<tr class="row-' + h + '">';
    // loop width for this row:
    for (var w = 0; w < width; w++) {
      grid += '<td class="cell" id="row-' + h + '_cell-' + w + '"></td>';
    }
    // row is wide enough now closing tag:
    grid += '</tr>';
  }

  // apply grid to canvas:
  canvas.innerHTML = grid;

  // add an event listener for all cells just created:
  var cells = document.getElementsByClassName('cell');
  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click",  function(event) {
      var clickedCell = event.target;
      // set the background color to the selected color:
      clickedCell.style.backgroundColor = selectedColor;
    });
  }
}

// make the submit button call makeGrid
function sizePicker() {
  // Entering whole numbers in the "Height" and "Width" fields, and submitting the form, causes an empty grid to appear on the page.
  console.log('sizePicker submit button clicked')
  // stop the default form action:
  event.preventDefault();

  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;

  // now check that the values are whole numbers using modulus
  // https://en.wikipedia.org/wiki/Modulo_operation
  if (height % 1) {
    alert('Enter only a whole number for the height!');
    return;
  }
  if (width % 1) {
    alert('Enter only a whole number for the width!');
    return;
  }
  console.log('creating a new ', height, 'by ', width, ' grid.');
  makeGrid(height, width);
}

// tell the form which function to call:
document.getElementById('sizePicker').onsubmit = function() {
  sizePicker();
};

// Add listener to return the color selected:
colorPicker.addEventListener("input", function() {selectedColor = colorPicker.value;}, false);
