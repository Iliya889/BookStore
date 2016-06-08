myApp.controller('Tab4Ctrl', function ($scope, $location) {

    var massXY = {
        lat: 27.948493,
        lng: -82.4590266,
        title: "Book Store"
    };

    var centerLatLng = new google.maps.LatLng(27.948493, -82.4590266);
    var mapOptions = {
        zoom: 17,
        center: centerLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var myLatLng = { lat: massXY.lat, lng: massXY.lng };

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: massXY.title,
        animation: google.maps.Animation.BOUNCE,
        icon: "styles/images/google_maps.png"
    })

});