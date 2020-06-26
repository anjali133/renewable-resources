function renewable(image) {


    $(image).each(function () {
        $('<image/>')[0].src = this;
    });



}



renewable[

    'hydro.png',
    'wind.png',
    'geothermal.png',
    'solar.png',
    'biomass.png',
    'tidal.png'
];



$(document).ready(function () {

  /*Hydro */
    $('.title-hydro').mouseout(function () {
        $("#city").attr('src', 'original.png');
        document.getElementById("city").height = "600";
        document.getElementById("city").width = "628";
    }),
        $('.title-hydro').mouseover(function () {
            $("#city").attr('src', 'hydro.png');
            document.getElementById("city").height = "600";
            document.getElementById("city").width = "628";
        });

/*wind */
        $('.title-wind').mouseout(function () {
        $("#city").attr('src', 'original.png');
        document.getElementById("city").height = "600";
        document.getElementById("city").width = "628";
    }),
        $('.title-wind').mouseover(function () {
            $("#city").attr('src', 'wind.png');
            document.getElementById("city").height = "600";
            document.getElementById("city").width = "628";
        });

/*geothermal */
    $('.title-geothermal').mouseout(function () {
        $("#city").attr('src', 'original.png');
        document.getElementById("city").height = "600";
        document.getElementById("city").width = "628";
    }),
        $('.title-geothermal').mouseover(function () {
            $("#city").attr('src', 'geothermal.png');
            document.getElementById("city").height = "600";
            document.getElementById("city").width = "628";
        });

/*solar */
    $('.title-solar').mouseout(function () {
        $("#city").attr('src', 'original.png');
        document.getElementById("city").height = "600";
        document.getElementById("city").width = "628";
    }),
        $('.title-solar').mouseover(function () {
            $("#city").attr('src', 'solar.png');
            document.getElementById("city").height = "600";
            document.getElementById("city").width = "628";
        });

/*Biomass */
    $('.title-biomass').mouseout(function () {
        $("#city").attr('src', 'original.png');
        document.getElementById("city").height = "600";
        document.getElementById("city").width = "628";
    }),
        $('.title-biomass').mouseover(function () {
            $("#city").attr('src', 'biomass.png');
            document.getElementById("city").height = "600";
            document.getElementById("city").width = "628";
        });


/*tidal */
    $('.title-tidal').mouseout(function () {
        $("#city").attr('src', 'original.png');
        document.getElementById("city").height = "600";
        document.getElementById("city").width = "628";
    }),
        $('.title-tidal').mouseover(function () {
            $("#city").attr('src', 'tidal.png');
            document.getElementById("city").height = "600";
            document.getElementById("city").width = "628";
        });







});
