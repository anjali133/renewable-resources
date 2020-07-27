function renewable(image) {


    $(image).each(function () {
        $('<image/>')[0].src = this;
    });



}



renewable[

    'hydro3.png',
    'wind1.png',
    'geothermal2.png',
    'solar1.png',
    'biomass1.png',
    'tidal1.png'
];



$(document).ready(function () {

  /*Hydro */
    $('.title-hydro').mouseout(function () {
        $("#city").attr('src', 'original.png');
        document.getElementById("city").height = "600";
        document.getElementById("city").width = "728";
    }),
        $('.title-hydro').mouseover(function () {
            $("#city").attr('src', 'hydro3.png');
            document.getElementById("city").height = "600";
            document.getElementById("city").width = "728";
        });

/*wind */
        $('.title-wind').mouseout(function () {
        $("#city").attr('src', 'original.png');
        document.getElementById("city").height = "600";
        document.getElementById("city").width = "728";
    }),
        $('.title-wind').mouseover(function () {
            $("#city").attr('src', 'wind1.png');
            document.getElementById("city").height = "600";
            document.getElementById("city").width = "728";
        });

/*geothermal */
    $('.title-geothermal').mouseout(function () {
        $("#city").attr('src', 'original.png');
        document.getElementById("city").height = "600";
        document.getElementById("city").width = "728";
    }),
        $('.title-geothermal').mouseover(function () {
            $("#city").attr('src', 'geothermal2.png');
            document.getElementById("city").height = "600";
            document.getElementById("city").width = "728";
        });

/*solar */
    $('.title-solar').mouseout(function () {
        $("#city").attr('src', 'original.png');
        document.getElementById("city").height = "600";
        document.getElementById("city").width = "728";
    }),
        $('.title-solar').mouseover(function () {
            $("#city").attr('src', 'solar1.png');
            document.getElementById("city").height = "600";
            document.getElementById("city").width = "728";
        });

/*Biomass */
    $('.title-biomass').mouseout(function () {
        $("#city").attr('src', 'original.png');
        document.getElementById("city").height = "600";
        document.getElementById("city").width = "728";
    }),
        $('.title-biomass').mouseover(function () {
            $("#city").attr('src', 'biomass1.png');
            document.getElementById("city").height = "600";
            document.getElementById("city").width = "728";
        });


/*tidal */
    $('.title-tidal').mouseout(function () {
        $("#city").attr('src', 'original.png');
        document.getElementById("city").height = "600";
        document.getElementById("city").width = "728";
    }),
        $('.title-tidal').mouseover(function () {
            $("#city").attr('src', 'tidal1.png');
            document.getElementById("city").height = "600";
            document.getElementById("city").width = "728";
        });







});
