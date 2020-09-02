

$('.border-left a').click(function(){
    $('.faq-subheader').offset();
    $('html, body').animate({
    'scrollTop' : $('.faq-subheader').offset().top -180},500);  
});



/* $('.faq-item').click(function(){
    $(this).toggleClass('expanded').toggleClass('collapsed');
     $('.faq-item-body').slideDown(500);
      number += 1;
     while(number == 2){
        $('.faq-item-body').slideUp(500);
        number = number - 2 ;
        break;
        }
   
});

var number = 0; */




/*  $('.wrapper-banner').hide();
$('.wrapper-banner').show(300); */






 /* $('.faq-item').on('click', '.faq-item-header', function(e){
    e.preventDefault();
   $(this)
   .next('.faq-item-body')
   .slideToggle(500);  
});  */

$('.faq-item').click(function(){
    $(this).toggleClass('collapsed').toggleClass('expanded');
});

$('.faq-item-header').click(function(){
$(this).next('.faq-item-body')
.not(':animated')
.slideToggle(500); 
});

/* var scet = 0;

while (scet < 10){
    console.log(scet);
    scet = scet + 1;
}; */

/* $(this).toggleClass('collapsed').toggleClass('expanded'); */

/*  $('.faq-item-body').slideUp(500); */
/* $(this).removeClass('expanded').addClass('collapsed'); 
    $('.faq-item .collapsed').removeClass('collapsed').addClass('expanded'); */

/* $('.faq-item collapsed').removeClass('expanded').addClass('collapsed');
    $('.faq-item-body').slideUp(500); */



/* $('.faq-item').click(function(){
    $('.fag-item').toggleClass('collapsed').toggleClass('expanded');
    $('.faq-item').toggleClass('expanded').toggleClass('collapsed');
    $('.faq-item-body').slideUp(500);   
});
 */






/* $('.faq-item').click(function(){
    $('.faq-item').addClass('expanded');



}); */

$('.wrapper-cookies').slideDown(5000);

$('.cancel').click(function(){
    $('.wrapper-cookies').slideUp(1000);
});

 /* /*   $('.faq-item-body').slideUp(500); */
   /*   $('.faq-item').toggleClass('collapsed').toggleClass('expanded');  */

/* $('.faq-item-header').click(function(){
  $('.faq-item').toggleClass('collapsed').toggleClass('expanded');  */
  /*   $('.faq-item-body').slideDown(500); */
/* }); */
 
/* console.log("okey"); */

/* $('html,body').animate({
    'scrollTop': 0
},5000); */

/* console.log(locat); */


/* $('.faq-header').animate({
    'scrollTop': {top: 1800.0625, left: 114}
},5000);  */




/* function babl(width,height,depth){
    var area = width*height;
    var volume = width*height*depth;
    var result = [area,volume];  // Таким образом создался массив // 
    return result;
}

var x = babl(2,3,4)[1];
console.log(x); */



$('.nonStop').each(function(){
    var $this =$(this);
    var $tab =$this.find('li.active');
    var $link =$tab.find('a');
    var $panel =$($link.attr('href'));

    $this.on('click','.selection',function(e){
        e.preventDefault();
        var $link =$(this);
        var id =this.hash;

    if(id && !$link.is('.active')){
        $panel.removeClass('active');
        $tab.removeClass('active');

    $panel=$(id).addClass('active');
    $tab  =$link.parent().addClass('active');    
    }    
    });
});






/* $('.king').each(function(){
    $this=$(this);
    $tab=$this.find('li.activ');
    $link=$tab.find('a');
    $panel=$($link.attr('href'));

    $this.on('click','.knopka',function(e){
        e.preventDefault();
        var $link=$(this);
        var id=this.hash;
    });



}); */


function lol(){
    var hoo=this.innerWidth;
    var height=this.innerHeight;
    return [hoo,height];
}

console.log(lol());



$('.menu').on('mouseover', 'b', function(e){
    var target = e.target;
    console.log(this);
});

document.body.onload = function(){

    setTimeout(function(){
        var preloader = document.getElementById('page-preloader');
        if(!preloader.classList.contains('done'))
        {
            preloader.classList.add('done');
        }
    },2000);
};






$('div.menu a').click(function(){
     var hrefTarget = $(this).attr('href');
     var setScroll = $(hrefTarget).offset().top; 


$('html, body').animate({
        scrollTop : setScroll
},1000);

});




