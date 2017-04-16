$(function() {
            var $items = $('.vtab>ul>li');
            $items.mouseover(function() {
                $items.removeClass('selected');
                $(this).addClass('selected');

                var index = $items.index($(this));
                $('.vtab>div').hide().eq(index).show();
            }).eq(1).mouseover();
        });


       $(function() {
            var $items = $('.vtab2>ul>li');
            $items.mouseover(function() {
                $items.removeClass('selected');
                $(this).addClass('selected');

                var index = $items.index($(this));
                $('.vtab2>div').hide().eq(index).show();
            }).eq(1).mouseover();
        });



       $(function() {
            var $items = $('.vtab3>ul>li');
            $items.mouseover(function() {
                $items.removeClass('selected');
                $(this).addClass('selected');

                var index = $items.index($(this));
                $('.vtab3>div').hide().eq(index).show();
            }).eq(1).mouseover();
        });