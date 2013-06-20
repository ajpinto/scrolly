/*
 *  Project: Scrolly : parallax is easy as a matter of fact !
 *  Description: Based on jQuery boilerplate
 *  Author: Victor C. / Octave & Octave web agency
 *  Forked By: AJ Pinto
 *  Licence: MIT
 */
(function ( $, window, document, undefined ) {
    // Create the defaults once
    var pluginName = 'scrolly',
        defaults = {
            bgParallax: false
        },
        didScroll = false;

    function Plugin( element, options ) {
        this.element = element;
        this.$element = $(this.element);
    	this.parent = this.$element.parent(this);

        this.options = $.extend( {}, defaults, options) ;
        
        this._defaults = defaults;
        this._name = pluginName;
        
        this.init();
    }

    Plugin.prototype.init = function () {
        var self = this;
        this.vStartPosition = this.$element.position().top;
        this.hStartPosition = this.$element.position().left;
        this.offsetTop = this.$element.offset().top;
        this.offsetLeft = this.$element.offset().left;
        this.height = this.$element.outerHeight(true);
        this.width = this.$element.outerWidth(true);
        this.verVel = this.$element.attr('data-vervel');
        this.horVel = this.$element.attr('data-horvel');
        this.bgVStart = parseInt(this.$element.attr('data-vfit'), 10);
        this.bgHStart = parseInt(this.$element.attr('data-hfit'), 10);

        $(document).scroll(function(){
            self.didScroll = true;
        });
        
        setInterval(function() {
            if (self.didScroll) {
                self.didScroll = false;
                self.scrolly();
            }
        }, 10);
    };

    Plugin.prototype.scrolly = function() {
        var dT = $(window).scrollTop(),
            wH = this.parent.height(),
            wW = this.parent.width(),
            vPosition = this.vStartPosition;
            hPosition = this.hStartPosition;

        if(this.offsetTop >= (dT+wH) && this.offsetLeft >= (dL+wW)) {
            this.$element.addClass('scrolly-invisible');
        } else {
            if(this.$element.hasClass('scrolly-invisible')){
                vPosition = this.vStartPosition + (dT + ( wH - this.offsetTop ) ) * this.verVel;
                hPosition = this.hStartPosition + (dT + ( wW - this.offsetLeft ) ) * this.horVel;
            } else {
                vPosition = this.vStartPosition + dT  * this.verVel;
                hPosition = this.hStartPosition + dT  * this.horVel;
            }
        }
        // Fix background position
        if(this.bgVStart){
			vPosition = vPosition + this.bgVStart;
		}
        if(this.bgHStart){
			hPosition = hPosition + this.bgHStart;
		}

        if(this.options.bgParallax === true) {
            this.$element.css({backgroundPosition: hPosition+'px '+vPosition+'px'});
        } else {
            this.$element.css({top: vPosition});
            this.$element.css({left: hPosition});
        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    };

})(jQuery, window, document);
