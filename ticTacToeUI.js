// //- set variables for testing only
// rows = 3
// cols = 2
//
// for (var i = 1; i <= rows; i++) {
//   div(class='row row-'+i)
//     //- indent the for loop inside containing div
//     for (var j = 1; j <= cols; j++) {
//       .div(class='square square-'+j)
//     }
// }

$(document).ready( function() {
  $('.square').css({
    'float':'left',
    'border': '2px solid red',
    'background-color': '#909090',
    'height': '100px',
    'width': '100px',
  });

  $('.square').each(function(index, element) {
    row = Math.floor(index / 3);
    col = index % 3;
    pos_array = [row, col];
    $(element).attr("data-row", row);
    $(element).attr("data-col", col);
  });

  // $(".board-frame").on("click", ".square", function() {
 $(".square").on("click",  function() {

   if ($(this).css('background-color')=='rgb(144, 144, 144)' && !TTT.game_over) {
     if (TTT.player === "x" ) {
       $(this).css('background-color', 'red');
       var pos = [parseInt($(this).attr("data-row")), parseInt($(this).attr("data-col"))]
       TTT.move(pos);
       TTT.printBoard();
       // mark x within game at associated square

     } else {

       $(this).css('background-color', 'blue');
       var pos = [parseInt($(this).attr("data-row")), parseInt($(this).attr("data-col"))]
       TTT.move(pos);
       TTT.printBoard();
       // else blue, o
     }
   }

  });

  $('.row').css({
    'clear': 'left'
  });

})