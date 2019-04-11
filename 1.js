 $(function(){
 	$(".showne").slideUp(0);
 	$(".btn").click(function(){
 	$(".showne").slideUp();
    $(this).next().slideToggle();
  });
});
 