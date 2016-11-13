function cycleBackgrounds() {
	var index = 0;

	$imageEls = $('.toggle-image'); // Get the images to be cycled.
  header = $('.header');
  message_wrap = $('.messages');

	setInterval(function () {
		// Get the next index.  If at end, restart to the beginning.
		index = index + 1 < $imageEls.length ? index + 1 : 0;

		// Show the next image.
		$imageEls.eq(index).addClass('show');
		// Hide the previous image.
		$imageEls.eq(index - 1).removeClass('show');
    if (index != 0){
      header.removeClass('black');
      message_wrap.removeClass('black');
    }
    else{
      header.addClass('black');
      message_wrap.addClass('black');
    }

	}, 4000);
};


// Document Ready.
$(function () {
	cycleBackgrounds();
  genMessages();
  // genMessagesRight();
  $("#im_okay").typed({
        strings: ["YOU WILL BE FINE WITHOUT ME", "YOU WILL BE FINE"],
        typeSpeed: 0
      });
});

setInterval( function (){
  $("#im_okay").typed({
        strings: ["YOU WILL BE FINE WITHOUT ME", "YOU WILL BE FINE"],
        typeSpeed: 0
      });
}, 12000);


function genMessages(){
  for (var i =0; i < 10; i ++){

    var words = $("<span>", {id: "mess" + i, "class": "typed-cursor"});
    var words_right = $("<span>", {id: "mess_right" + i, "class": "typed-cursor"});
    words.html("YOU WILL BE FINE");

    $("#message_wrappers2").append(words);
    $("#message_wrappers2").append("<br><br>");
    $("#message_wrappers2").append(words_right);
    $("#mess" + i).css('padding-top', i*20);
    // $("#mess_right" + i).css('padding-top', i*5);
    // $("#mess_right" + i).css('margin-left', 100);
    // $("#mess" + i).typed({
    //       strings: ["WITHOUT ME", "YOU WILL BE FINE"],
    //       typeSpeed: -1
    //     });

  }
}
