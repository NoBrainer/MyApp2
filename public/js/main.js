(function() {
    setup();

    function handleLogoClick(e) {
        alert("clicked logo!");
    }

    function handleNewsClick(e) {
        alert("clicked news!");
    }

    function handleCalendarClick(e) {
        alert("clicked calendar!");
    }

    function handleInstagramClick(e) {
        alert("clicked instagram!");
    }

    function handleFacebookClick(e) {
        alert("clicked facebook!");
    }

    function handleEmailClick(e) {
        alert("clicked email!");
    }

    function handleResourceClick(e) {
        alert("clicked resource!");
    }

    function handleArchiveClick(e) {
        alert("clicked archive!");
    }

    function setup() {
        $.get('/images/WebMenu-v2.svg')
            .done(function(resp) {
                // Load the SVG and add it to the page
                var svgContent = resp.children[0];
                $('#menu-wrapper').html(svgContent);
                setupClickHandlers();
            });
    }

    function setupClickHandlers() {
        $('#logo-box').click(handleLogoClick);
        $('#news-box').click(handleNewsClick);
        $('#calendar-box').click(handleCalendarClick);
        $('#instagram-box').click(handleInstagramClick);
        $('#facebook-box').click(handleFacebookClick);
        $('#email-box').click(handleEmailClick);
        $('#resource-box').click(handleResourceClick);
        $('#archive-box').click(handleArchiveClick);
    }
})();