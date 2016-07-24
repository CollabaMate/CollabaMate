/**
 * Created by lucas on 24/07/16.
 */
$('#sidebar').on('click',function() {
    if($('#menulist').css('left')=='-80px'){
        $('#menulist').animate({left: '-300px'}, 500);
    }else{
        $('#menulist').animate({left:-80}, 500);
    }
});

$(document).ready(function() {
    $('.inactive').click(function(){
        if($(this).siblings('ul').css('display')=='none'){
            $(this).parent('li').siblings('li').removeClass('inactives');
            $(this).addClass('inactives');
            $(this).siblings('ul').slideDown(100).children('li');
            if($(this).parents('li').siblings('li').children('ul').css('display')=='block'){
                $(this).parents('li').siblings('li').children('ul').parent('li').children('a').removeClass('inactives');
                $(this).parents('li').siblings('li').children('ul').slideUp(100);

            }
        }else{
            //turn to '+'
            $(this).removeClass('inactives');
            // hide the sublist
            $(this).siblings('ul').slideUp(100);
            //turn sublist who has '+'
            $(this).siblings('ul').children('li').children('ul').parent('li').children('a').addClass('inactives');
            // hide the sublist
            $(this).siblings('ul').children('li').children('ul').slideUp(100);

            //only one drop-down is allowed
            $(this).siblings('ul').children('li').children('a').removeClass('inactives');
        }
    })
});
