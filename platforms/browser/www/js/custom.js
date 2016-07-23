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
		    /****************/
		}


		// play the audio when page loads
		$('#audio').get(0).play();

	   // User swipes right to indicate interest 
	  $("body").on("swiperight", function() {
	  	alert('I love it!');
	  	change('audio/track3.mp3');
	  });

	  // User swipes left to indicate disinterest 
	  $("body").on("swipeleft", function() {
	  	alert('I hate it!');
	  	change('audio/track1.mp3');
	  });

	    // Toggle the buttons on click
	    $('#play_button').click(function() {

	    		$("button#pause_button").show();
	    		$("button#play_button").hide();
	    		$('#audio').get(0).play();
	    		        
	    });

	    $('#pause_button').click(function() {

	    		$("button#pause_button").hide();
	    		$("button#play_button").show();
	    		$('#audio').get(0).pause();
	    	
	    });

	       
	  // To do: 
	  // create html element to old audio 
	  // change the src file on swipe left or right 
	  // play audio file on play button click (or autoplay)
	  // pause audio file on pause button 


	});


}, false);
