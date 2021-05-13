// readmore
$(document).ready(function() {
    $("#toggle").click(function() {
      var elem = $("#toggle").text();
      if (elem == "View More") {
        //Stuff to do when btn is in the read more state
        $("#toggle").text("View Less");
        $("#more").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        $("#toggle").text("View More");
        $("#more").slideUp();
      }
    });
  });


// tabs
  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

//images
  $(function(){

      $('button').on('click',function(e){
          e.preventDefault();

          var imgSRC = $(this).data('src');

          $('#imagee').html('<img src="'+imgSRC+'" alt="" />');
      });

  });


// menu

$(document).ready(function(){
  $('.menu-toggle').click(function(){
      $('nav').toggleClass('active')
  })
})


$(document).ready(function(){
	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});




