// FRANCKY G.

$(document).ready(function(){
  var mouseX, mouseY;
  var ww = $( window ).width();
  var wh = $( window ).height();
  var traX, traY;
  $(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 570) + 40;
    traY = ((4 * mouseY) / 570) + 50;
    console.log(traX);
    $(".titleName").css({"background-position": traX + "%" + traY + "%"});
  });
  $(".navbar a, footer a").on("click", function(event){

       event.preventDefault();
       var hash = this.hash;

       $('body,html').animate({scrollTop: $(hash).offset().top} , 1300 , function(){window.location.hash = hash;})

   });

});

//------------------------------------------------------------------------------

// CITATION

$(document).ready(function(){
	setup();
});


function setup(){

	var $passage = $('#citation');

	//get the inner HTML of the #citation paragraph
	var rawtxt = $passage.html();

	//Get the length of the string for use in loop
	var len = rawtxt.length;

	//empty string used to store final text that includes spans
	var newtext = '';


	//For each character inside #citation string (this is why we got length)
	for(var i = 0; i < len; i ++){

		//get a random num between 1 and 5
		var rng = Math.floor(Math.random() * 5) + 1;

		//get the i-th character from the string
		var currentchar = rawtxt.charAt(i);
		if(currentchar == ' '){
			//if it's a space, add an empty .space span
			var newchar = '<span class="space"></span>';
		}
		else{
			//otherwise, wrap it with a span, and give it class effectN, where N is a random int as before
			var newchar = '<span class="effect' + rng + '">' + currentchar + '</span>';
		}
		//add this new "char" (actually it's a char with spans wrapping it) to the empty string
		newtext = newtext + newchar;
	}

	//replace #citation paragraphs inner HTML with the newly created string
	$passage.html(newtext);

}

var angle = 0;
function galleryspin(sign) {
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}
