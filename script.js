$(document).ready(function(){
    var trigger = 0;

    $("#input").focus();
    $("#input").keypress(function( event ) {
        if ( event.which == 13 ) {
            var val = $( "#input" ).val();
            if(val == '') return;
            $( "#list" ).append( "<div id='item"+trigger+"' class='items'>");
            $("#item"+trigger).append("<div class='close'>");
            $("#item"+trigger).append("<input type='checkbox' id='c"+trigger+"'>");
            $("#item"+trigger).append("<label for='c"+trigger+"' id='label'><span>");
            $('#wrapper').css('display','block');
            $("#item"+trigger).append(val)
            $( "#input" ).val('');
            ++trigger;
        };
    });

    $('#all').on('click', function(){
        if($('#all').is(':checked')){
            $('.items').css({'text-decoration': 'line-through', 'opacity': '0.5'} );
            $(".items input[type='checkbox'").prop('checked', true);
            $('#rmvall').css('display','inline');
        }
        else{
            $('.items').css({'text-decoration': 'none', 'opacity': '1'} );
            $(".items input[type='checkbox'").prop('checked', false);
            $('#rmvall').css('display','none');
        }
    });

    $('#rmvall').on('click', function(){
        $('.items').each(function() {
            if($(this).css('text-decoration') == 'line-through'){
                $(this).remove();
            };
        }); 
        $("#all").prop('checked', false); 
        $('#wrapper').css('display','none');
        $('#rmvall').css('display','none');
        //if($('.items').length == 0)
    });      
    

    $(document).on('change', function(e){
        
        if($(e.target).is(':checked') && (e.target.id !== 'all'))
        {
            $(e.target).parent().css({'text-decoration': 'line-through', 'opacity': '0.5'} );
        }
        else{
            $(e.target).parent().css({'text-decoration': 'none', 'opacity': '1'});
        }
    });

    $(document).on('click', '.close', function(){
        $("#input").focus();
        $(this).parent().remove();
        if($('.items').length == 0)
        {
            $("#all").prop('checked', false);
            $('#wrapper').css('display','none');
        }
    });

    $('#list').bind('dblclick', function(e) {
        $(e.target).attr('contenteditable', 'true');

        var text = $(e.target).html();

        $(e.target).keypress(function( event ) {
            if ( event.which == 13 ) {
                $(e.target).attr('contenteditable', 'false');
                $("#input").focus();
            };
        });

        $(e.target).keyup(function( event ) {
            if ( event.keyCode === 27 ) {
                $(e.target).html(text);
                $(e.target).attr('contenteditable', 'false');
                $("#input").focus();
            }; 
        });
    });
});
