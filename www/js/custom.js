document.addEventListener('deviceready', function() {


	$(function() {

		// function which changes the source url based on swipe
		function change(sourceUrl) {
		    var audio = $("#audio");      
		    audio.attr("src", sourceUrl);
		    /****************/
		    audio[0].pause();
		    audio[0].load();//suspends and restores all audio element

		    //audio[0].play(); changed based on Sprachprofi's comment below
		    audio[0].oncanplaythrough = audio[0].play();
			document.getElementById("play_button").className = 'button_hide';
			document.getElementById("pause_button").className = 'button_show';
			document.getElementById("disc").className = 'rotating';
		    /****************/
		}


		// play the audio when page loads
		$('#audio').get(0).pause();

	   // User swipes right to indicate interest 
	  $("body").on("swiperight", function() {
	  	change('audio/track3.mp3');
	  });

	  // User swipes left to indicate disinterest 
	  $("body").on("swipeleft", function() {
	  	change('audio/track1.mp3');
	  });

	    // Toggle the buttons on click
	    $('#play_button').click(function() {

	    		// $("img#pause_button").show();
	    		// $("img#play_button").hide();
			document.getElementById("play_button").className = 'button_hide';
			document.getElementById("pause_button").className = 'button_show';
			$('#audio').get(0).play();
			document.getElementById("disc").className = 'rotating';
	    		        
	    });

	    $('#pause_button').click(function() {

	    		// $("img#pause_button").hide();
	    		// $("img#play_button").show();
			document.getElementById("play_button").className = 'button_show';
			document.getElementById("pause_button").className = 'button_hide';
			$('#audio').get(0).pause();
			document.getElementById("disc").className = 'stop';
	    	
	    });

	       
	  // To do: 
	  // create html element to old audio 
	  // change the src file on swipe left or right 
	  // play audio file on play button click (or autoplay)
	  // pause audio file on pause button 


	});


}, false);
