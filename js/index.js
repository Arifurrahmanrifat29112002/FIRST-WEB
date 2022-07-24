const progress_outer = () => {
    let circles = document.getElementsByClassName('progress_outer');
    const action = (el) => {
        var start = setInterval(update, 100);
        var upto = el.dataset.start;
        function update() {
            var counter = el.children[0].children[0];
            var counts = upto++;

            if (upto > el.dataset.finish) {
                clearInterval(start);
            }
            counter.innerHTML = counts + "%";
            el.style.background = `conic-gradient(#4070f4 ${counts}%,#fff ${counts}%)`;

        }

    }
    for (circle of circles) {
        action(circle);
    }
}
progress_outer();

$(document).ready(function(){

	// /* default settings */

	$('.venobox').venobox({
            framewidth: '700px',
        	frameheight: '500px',
            bgcolor: '#132E63',
            autoplay: 'true',
            popup: 'true',
    }); 

	/* open content with custom settings */

	// $('.venobox_custom').venobox({

	// 	framewidth: '300px',

	// 	frameheight: '250px',

	// 	border: '6px',

	// 	bordercolor: '#ba7c36',

	// 	numeratio: true

	// });



	// /* auto-open #firstlink on page load */

	// $("#firstlink").venobox().trigger('click');

});



// blog card 



// top up button
$(document).ready(function(){
 
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
   
     // Show button after 100px
     var showAfter = 100;
     if ( $(this).scrollTop() > showAfter ) { 
      $('.back-to-top').fadeIn();
     } else { 
      $('.back-to-top').fadeOut();
     }
    });
    
    
    
   });




