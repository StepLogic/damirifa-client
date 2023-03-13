(function($) {
    $(document).ready(function() {
        (function run() {
            window.r3d_run = run;
            var books = $(".real3dflipbook");
            if (books.length == 0) {
                setTimeout(function() {
                    run();
                }, 1000);
            } else {

                $.each(books, function() {

                    var id = $(this).attr('id')
                    
                    var options = $(this).data('flipbook-options')

                    this.removeAttribute('data-flipbook-options');

                    options.assets = {
                        preloader: options.rootFolder + "images/preloader.jpg",
                        left: options.rootFolder + "images/left.png",
                        overlay: options.rootFolder + "images/overlay.jpg",
                        flipMp3: options.rootFolder + "mp3/turnPage.mp3",
                        shadowPng: options.rootFolder + "images/shadow.png",
                        spinner:options.rootFolder + "images/spinner.gif"
                    };

                    options.pdfjsworkerSrc = options.rootFolder + 'js/pdf.worker.min.js?ver=' + options.version
                    options.cMapUrl = options.rootFolder + 'js/cmaps/'

                    function convertStrings(obj) {

                        $.each(obj, function(key, value) {
                            // console.log(key + ": " + options[key]);
                            if (typeof(value) == 'object' || typeof(value) == 'array') {
                                convertStrings(value)
                            } else if (!isNaN(value)) {
                                if (obj[key] === "")
                                    delete obj[key]
                                else
                                    obj[key] = Number(value)
                            } else if (value == "true") {
                                obj[key] = true
                            } else if (value == "false") {
                                obj[key] = false
                            }
                        });

                    }

                    convertStrings(options)

                    function r3d_stripslashes(str) {
                        // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                        // +   improved by: Ates Goral (http://magnetiq.com)
                        // +      fixed by: Mick@el
                        // +   improved by: marrtins
                        // +   bugfixed by: Onno Marsman
                        // +   improved by: rezna
                        // +   input by: Rick Waldron
                        // +   reimplemented by: Brett Zamir (http://brett-zamir.me)
                        // +   input by: Brant Messenger (http://www.brantmessenger.com/)
                        // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
                        // *     example 1: stripslashes('Kevin\'s code');
                        // *     returns 1: "Kevin's code"
                        // *     example 2: stripslashes('Kevin\\\'s code');
                        // *     returns 2: "Kevin\'s code"
                        return (str + '').replace(/\\(.?)/g, function(s, n1) {
                            switch (n1) {
                                case '\\':
                                    return '\\';
                                case '0':
                                    return '\u0000';
                                case '':
                                    return '';
                                default:
                                    return n1;
                            }
                        });
                    }

                    function decode(obj){
                        for (var key in obj){
                            if(typeof obj[key] == 'string')
                                obj[key] = r3d_stripslashes(obj[key])
                            else if(typeof obj[key] == 'object')
                                obj[key] = decode(obj[key])
                        }
                        return obj
                    }
                    options = decode(options)



                    if(options.pages){

                        if(!Array.isArray(options.pages)){
                            var pages = []
                            for(var key in options.pages){
                                pages[key] = options.pages[key]
                            }
                            options.pages = pages
                        }

                        for (var key in options.pages) {
                            if(options.pages[key].htmlContent)
                                options.pages[key].htmlContent = unescape(options.pages[key].htmlContent)
                            if(options.pages[key].items){
                                options.pages[key].items.forEach(function(item, itemIndex){
                                    if(options.pages[key].items[itemIndex].url)
                                        options.pages[key].items[itemIndex].url = unescape(options.pages[key].items[itemIndex].url)
                                })
                            }
                        }

                    }
                    
                    options.social = [];
                
                    if (options.btnDownloadPages && options.btnDownloadPages.url) {
                        options.btnDownloadPages.url = options.btnDownloadPages.url.replace(/\\/g, '/')
                    }

                    if(options.btnDownloadPdf){

                        if(options.btnDownloadPdfUrl)
                            options.btnDownloadPdf.url = options.btnDownloadPdfUrl.replace(/\\/g, '/')
                        else if (options.btnDownloadPdf && options.btnDownloadPdf.url) 
                            options.btnDownloadPdf.url = options.btnDownloadPdf.url.replace(/\\/g, '/')
                         else if (options.pdfUrl) 
                            options.btnDownloadPdf.url = options.pdfUrl.replace(/\\/g, '/')
                    }

                    var bookContainer = $(this);

                    var isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))

                    options.mode = isMobile && options.modeMobile ? options.modeMobile : options.mode

                    options.doubleClickZoomDisabled = !options.doubleClickZoom
                    options.pageDragDisabled = !options.pageDrag

                    //options from url parameters
                    function getUrlVars() {
                        var vars = {};
                        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
                        function(m,key,value) {
                          vars[key] = value.split('#')[0];
                        });
                        return vars;
                    }

                    var urlParams = getUrlVars()

                    for(var key in urlParams){
                        if(key.indexOf('r3d-') != -1) 
                            options[key.replace('r3d-', '')] = decodeURIComponent(urlParams[key]);
                    }

                    if(isMobile && options.modeMobile) options.mode = options.modeMobile

                    switch (options.mode) {

                        case "normal":

                            var containerClass = bookContainer.attr("class")
                            var containerId = bookContainer.attr("id")

                            bookContainer.removeClass(containerClass).addClass(containerClass + "-" + containerId)
                            options.lightBox = false;
                            bookContainer
                                .css("position", "relative")
                                .css("display", "block")
                            // .css("z-index",'999999 !important')
                            bookContainer.flipBook(options);


                            options.aspectRatio = isMobile && options.aspectRatioMobile ? options.aspectRatioMobile : options.aspectRatio


                            function resizeHeight() {
                                bookContainer.css("height", String( ( bookContainer.width() || bookContainer.parent().width() || 1170 ) / options.aspectRatio) + "px")
                            }
                            resizeHeight()
                            jQuery(window).resize(function() {
                                resizeHeight()
                            });


                            break;

                        case "lightbox":

                            bookContainer
                                .css("display", "inline")
                            options.lightBox = true;

                            var containerClass = "real3dflipbook-" + bookContainer.attr("id")

                            var holder = $("<div class='" + containerClass + "'>")
                            holder.attr('style', options.lightboxContainerCSS)
                            bookContainer.before(holder)
                            bookContainer.remove();

                            if(options.hideThumbnail) options.lightboxThumbnailUrl = '';

                            if (options.lightboxThumbnailUrl && options.lightboxThumbnailUrl != '') {

                                var thumbWrapper = $('<div>').attr("style","position: relative;").appendTo(holder)
                                var thumb = $('<img></img>')
                                .attr('src', options.lightboxThumbnailUrl)
                                .appendTo(thumbWrapper)
                                .attr('style', options.lightboxThumbnailUrlCSS)

                                if(options.thumbAlt)
                                    thumb.attr('alt', options.thumbAlt)

                                if(options.lightboxThumbnailInfo){

                                    var defaultLightboxThumbnailInfoCSS = "position: absolute; display: grid; align-items: center; text-align: center; top: 0;  width: 100%; height: 100%; font-size: 16px; color: #000; background: rgba(255,255,255,.8); "

                                    var thumbInfo = $('<span>')
                                    .appendTo(thumbWrapper)
                                    .attr('style', defaultLightboxThumbnailInfoCSS + options.lightboxThumbnailInfoCSS)
                                    .text(options.lightboxThumbnailInfoText || options.name)
                                    .hide()

                                    thumbWrapper.hover(
                                        function(){
                                            thumbInfo.fadeIn("fast")
                                        },  
                                        function(){
                                            thumbInfo.fadeOut("fast")
                                        }
                                    )

                                }
                            }

                            options.lightboxText = options.lightboxText || '';

                            if(options.showTitle) options.lightboxText += options.name;

                            if(options.showDate) options.lightboxText += options.date;

                            if (options.lightboxText && options.lightboxText != "") {
                                var text = $('<span>').text(options.lightboxText)
                                var style = 'text-align:center; padding: 10px 0;'
                                style += options.lightboxTextCSS;
                                if (options.lightboxTextPosition == 'top')
                                    text.prependTo(holder)
                                else
                                    text.appendTo(holder)
                                text.attr('style', style)
                            }

                            if(!options.lightboxCssClass || options.lightboxCssClass == "")
                                options.lightboxCssClass = containerClass

                            holder.addClass(options.lightboxCssClass)

                            if(options.lightboxLink){
                                $("." + options.lightboxCssClass).click(function(){
                                    var target = options.lightboxLinkNewWindow ? "_blank" : "_self"
                                    window.open(options.lightboxLink, target)
                                });
                            }else{
                                $("." + options.lightboxCssClass).flipBook(options);
                            }

                            break;

                        case "fullscreen":

                            options.lightBox = false;
                            var elem = 'body'

                            bookContainer
                                .appendTo(elem)
                                .css("position", "fixed")
                                .css("top","0")
                                .css("bottom", "0")
                                .css("left", "0")
                                .css("right", "0")
                                .css("width","100%")
                                .css("height", "100%")
                                .css('z-index', '2147483647');
                            bookContainer.flipBook(options);
                            $('body').css('overflow', 'hidden');

                            if (options.menuSelector) {

                                var $menu = $(options.menuSelector)
                                var height = window.innerHeight - $menu.height()
                                bookContainer.css('top', $menu.height() + 'px').css('height', height)
                                window.onresize = function(event) {
                                    height = window.innerHeight - $menu.height()
                                    bookContainer.css('top', $menu.height() + 'px').css('height', height)
                                };

                            }
                            break;
                    }

                })
            }
        })();
    });
}(jQuery));