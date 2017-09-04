(function() {
    // Useful tutorial
    // https://www.jonathan-petitcolas.com/2013/07/18/create-clickable-svg-france-regions-map.html
    var svgDocument = $('#menu-object')[0].contentDocument;
    console.log(svgDocument);

    var setup = _.bind(function() {
        var $calendarLink = $('#text14196', svgDocument);
        console.log($calendarLink);

        $calendarLink.on('click', function() {
            console.log("calendar link clicked");
        });
    }, svgDocument);

    setup();
})();