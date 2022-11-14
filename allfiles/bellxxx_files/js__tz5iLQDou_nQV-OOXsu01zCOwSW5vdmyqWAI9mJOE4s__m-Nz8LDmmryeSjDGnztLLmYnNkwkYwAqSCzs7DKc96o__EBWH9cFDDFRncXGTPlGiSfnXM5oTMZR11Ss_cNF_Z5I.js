(function($) {
  $.fn.alu_ticker = function() {
    return this.each(function() {
      var el = $(this);
      var items = el.find('.alu-ticker-items li');
      var item_h = $(items[0]).height();
      var current_item = 0;
      var is_ticker_variant = el.hasClass('sustainability-variant');
      var ticker_speed = is_ticker_variant ? 5600 : 4000;
      var ticker_interval;

      // Update height-based values on resize.
      $(window).on('DOMContentLoaded.alu_ticker load.alu_ticker resize.alu_ticker', function (event) {
        item_h = $(items[0]).height();
        el.find('.alu-ticker-item > div').each(function(i, element) {
          $(element).css('padding-top', '');
          padding = ((item_h / 2) - ($(element).outerHeight() / 2));
          $(element).css('padding-top', padding);
        });
      });

      var update_toggle = function() {
        type = $(items[current_item]).attr('data-type');
        ticker_toggle = el.find('.alu-ticker-toggle.ticker-' + type);
        if (ticker_toggle.hasClass('ticker-active') == false) {
          el.find('.ticker-active').removeClass('ticker-active');
          ticker_toggle.addClass('ticker-active');
          el.find('.alu-ticker-readmore a').attr('href', ticker_toggle.attr('data-readmore'));
        }
      };

      var ticker_fn = function() {
        if (current_item < items.length - 1) current_item++;
        else current_item = 0;

        if (is_ticker_variant) {
          $('.alu-ticker-items').animate({
            opacity: 0
          }, 420, 'swing', function() {
            el.find('.alu-ticker-items').css('top', '-' + (current_item*item_h).toString() + 'px');
            el.find('.alu-ticker-items').animate({opacity: 1}, 420, 'swing');
          });
        } else {
          el.find('.alu-ticker-items').animate({
            top: '-' + (current_item*item_h).toString() + 'px'
          }, 400, 'swing', update_toggle);
        }
      };

      ticker_interval = setInterval(ticker_fn, ticker_speed);
      update_toggle();

      el.find('.alu-ticker-toggle').click(function(e) {
        clearInterval(ticker_interval);
        type = $(this).attr('data-type');
        for(current_item = 0; current_item < items.length; current_item++){
          if($(items[current_item]).attr('data-type') == type) break;
        }
        update_toggle();

        el.find('.alu-ticker-items').animate({
          top: '-' + (current_item*item_h).toString() + 'px'
        });

        ticker_interval = setInterval(ticker_fn, ticker_speed);
      })
    });
  };

  $(document).ready(function() {
    $('.alu-ticker-wrapper').alu_ticker();
  });
})(jQuery);;/**/
