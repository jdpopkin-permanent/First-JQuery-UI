$(document).ready( function() {

  $('.stack').each(function(index, element) {
    $(element).attr("data-index", index);
  });

  var index;

  $('.board-frame').on('click', '.stack', function(){
    if (Game.won) {
      return;
    }

    $(this).toggleClass('highlighted');
    $(this).toggleClass('unhighlighted');



    if (!(index + 1)) {
      index = parseInt($(this).attr("data-index"));
      console.log(index)
    } else {
      var index2 = parseInt($(this).attr("data-index"));
      console.log(index, index2);

      if (Game.move(index, index2)) {
        var disk = $('.stack:eq('+index+')').children(".disk").first();

        var slot = $('.stack:eq('+index2+')').children(".slot").last();

        slot.removeClass('slot');
        //console.log(disk);
        //console.log(disk.attr('class'));
        slot.addClass(disk.attr('class'));
        console.log(slot.attr('class'));
        disk.removeClass(disk.attr('class'));
        disk.addClass('slot');
      }

      index = undefined;
      $('.stack').addClass('unhighlighted');
      $('.stack').removeClass('highlighted');

    }
  })

  })