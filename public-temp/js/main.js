(function() {
    var menusToStart = 5;
    var menusLoaded = 0;
    var menuHtml = [
        '<div class="menu_img landscape" id="food" style="background-image: url(&quot;./resources/menus/food-menu.png&quot;);"></div>',
        '<div class="menu_img portrait_2" id="overall" style="background-image: url(&quot;./resources/menus/overall-menu.png&quot;);"></div>',
        '<div class="menu_img portrait" id="02" style="background-image: url(&quot;./resources/menus/drink-menu-02-smash.jpg&quot;);"></div>',
        '<div class="menu_img landscape" id="03" style="background-image: url(&quot;./resources/menus/drink-menu-03-daiquiri.png&quot;);"></div>',
        '<div class="menu_img portrait" id="04" style="background-image: url(&quot;./resources/menus/drink-menu-04-horse.png&quot;);"></div>',
        '<div class="menu_img landscape" id="05" style="background-image: url(&quot;./resources/menus/drink-menu-05-ny.png&quot;);"></div>',
        '<div class="menu_img landscape" id="06" style="background-image: url(&quot;./resources/menus/drink-menu-06-champagne.png&quot;);"></div>',
        '<div class="menu_img landscape" id="07" style="background-image: url(&quot;./resources/menus/drink-menu-07-old-fashioned.png&quot;);"></div>',
        '<div class="menu_img landscape" id="08" style="background-image: url(&quot;./resources/menus/drink-menu-08-south-of-the-border.png&quot;);"></div>',
        '<div class="menu_img landscape" id="09" style="background-image: url(&quot;./resources/menus/drink-menu-09-bitters.png&quot;);"></div>',
        '<div class="menu_img landscape" id="10" style="background-image: url(&quot;./resources/menus/drink-menu-10-tiki.png&quot;);"></div>',
        '<div class="menu_img landscape" id="11" style="background-image: url(&quot;./resources/menus/drink-menu-11-gin-martini.png&quot;);"></div>',
        '<div class="menu_img landscape" id="12" style="background-image: url(&quot;./resources/menus/drink-menu-12-equal-parts.png&quot;);"></div>',
        '<div class="menu_img landscape" id="13" style="background-image: url(&quot;./resources/menus/drink-menu-13-ginger.png&quot;);"></div>',
        '<div class="menu_img landscape" id="14" style="background-image: url(&quot;./resources/menus/drink-menu-14-mirror.png&quot;);"></div>',
        '<div class="menu_img landscape" id="15" style="background-image: url(&quot;./resources/menus/drink-menu-15-savory.png&quot;);"></div>',
        '<div class="menu_img landscape" id="16" style="background-image: url(&quot;./resources/menus/drink-menu-16-greatest-hits.png&quot;);"></div>',
        '<div class="menu_img landscape" id="17" style="background-image: url(&quot;./resources/menus/drink-menu-17-tall-potations.png&quot;);"></div>',
        '<div class="menu_img landscape" id="18" style="background-image: url(&quot;./resources/menus/drink-menu-18-negroni.png&quot;);"></div>',
        '<div class="menu_img landscape" id="19" style="background-image: url(&quot;./resources/menus/drink-menu-19-founding-farmers.png&quot;);"></div>',
        '<div class="menu_img landscape_2" id="20" style="background-image: url(&quot;./resources/menus/drink-menu-20-list.png&quot;);"></div>',
        '<div class="menu_img landscape" id="21" style="background-image: url(&quot;./resources/menus/drink-menu-21-dude.png&quot;);"></div>',
        '<div class="menu_img landscape_2" id="22" style="background-image: url(&quot;./resources/menus/drink-menu-22-double-feature.png&quot;);"></div>',
        '<div class="menu_img landscape" id="23" style="background-image: url(&quot;./resources/menus/drink-menu-23-daiquiri-part-2.png&quot;);"></div>',
        '<div class="menu_img landscape" id="24" style="background-image: url(&quot;./resources/menus/drink-menu-24-sasha.png&quot;);"></div>',
        '<div class="menu_img landscape" id="25" style="background-image: url(&quot;./resources/menus/drink-menu-25-hemingway.png&quot;);"></div>',
        '<div class="menu_img landscape" id="26" style="background-image: url(&quot;./resources/menus/drink-menu-26-q&a.png&quot;);"></div>',
        '<div class="menu_img landscape_2" id="27" style="background-image: url(&quot;./resources/menus/drink-menu-27-something-different.png&quot;);"></div>',
        '<div class="menu_img landscape" id="28" style="background-image: url(&quot;./resources/menus/drink-menu-28-movies.png&quot;);"></div>',
        '<div class="menu_img landscape" id="29" style="background-image: url(&quot;./resources/menus/drink-menu-29-grapefruit.png&quot;);"></div>',
        '<div class="menu_img landscape" id="30" style="background-image: url(&quot;./resources/menus/drink-menu-30-5050.png&quot;);"></div>',
        '<div class="menu_img landscape" id="31" style="background-image: url(&quot;./resources/menus/drink-menu-31-price.png&quot;);"></div>',
        '<div class="menu_img landscape" id="32" style="background-image: url(&quot;./resources/menus/drink-menu-32-manhattan-2.png&quot;);"></div>',
        '<div class="menu_img landscape" id="33" style="background-image: url(&quot;./resources/menus/drink-menu-33-new-year.png&quot;);"></div>',
        '<div class="menu_img landscape" id="34" style="background-image: url(&quot;./resources/menus/drink-menu-34-tiki-a.png&quot;);"></div>',
        '<div class="menu_img landscape" id="35" style="background-image: url(&quot;./resources/menus/drink-menu-35-tiki-b.png&quot;);"></div>',
        '<div class="menu_img landscape" id="36" style="background-image: url(&quot;./resources/menus/drink-menu-36-like-it-a.png&quot;);"></div>',
        '<div class="menu_img landscape" id="37" style="background-image: url(&quot;./resources/menus/drink-menu-37-like-it-b.png&quot;);"></div>',
        '<div class="menu_img landscape" id="38" style="background-image: url(&quot;./resources/menus/drink-menu-38-berto.png&quot;);"></div>',
        '<div class="menu_img landscape" id="39" style="background-image: url(&quot;./resources/menus/drink-menu-39-brugal.png&quot;);"></div>',
        '<div class="menu_img landscape" id="40" style="background-image: url(&quot;./resources/menus/drink-menu-40-cecilia.png&quot;);"></div>',
        '<div class="menu_img landscape_3" id="41" style="background-image: url(&quot;./resources/menus/drink-menu-41-royal-hawaiian.png&quot;);"></div>',
        '<div class="menu_img landscape" id="42" style="background-image: url(&quot;./resources/menus/drink-menu-42-apple-number-2.png&quot;);"></div>',
        '<div class="menu_img landscape" id="43" style="background-image: url(&quot;./resources/menus/drink-menu-43-bitters-number-2.png&quot;);"></div>',
        '<div class="menu_img landscape" id="44" style="background-image: url(&quot;./resources/menus/drink-menu-44-havna-club.png&quot;);"></div>',
        '<div class="menu_img landscape" id="45" style="background-image: url(&quot;./resources/menus/drink-menu-45-singani.png&quot;);"></div>',
        '<div class="menu_img landscape" id="46" style="background-image: url(&quot;./resources/menus/drink-menu-46-tiki-3.png&quot;);"></div>'
    ];
    var numMenus = menuHtml.length;

    // Do things
    initMenus();
    watchScrolling();

    // Callbacks
    function watchScrolling() {
        var $window = $(window);
        var $page = $('body');
        var threshold = 250;
        $window.on('scroll.menus', _.throttle(_.bind(function() {
            var pageHeight = $page.height();
            var scrollBottom = $page.scrollTop() + $window.height();
            if (scrollBottom + threshold > pageHeight) {
                renderNextMenu();
            }
        }, this), 500));
    }
    function initMenus() {
        while (menusLoaded < menusToStart && menusLoaded < numMenus-1) {
            renderNextMenu();
        }
    }
    function renderNextMenu() {
        var nextIndex = menusLoaded;
        if (nextIndex >= menuHtml.length) return;
        var $menuBody = $('#menu_content .panel-body');
        var html = menuHtml[nextIndex] || "";
        if (html !== "") {
            $menuBody.append(html);
            menusLoaded++;
            showLoading();
        }
    }
    function showLoading() {
        var $loadingBox = $('#menu_loading');
        if ($loadingBox.is(':hidden')) {
            $loadingBox.fadeIn('slow').fadeOut('slow');
        }
    }
})();