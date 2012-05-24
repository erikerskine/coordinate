

(function($){
$(document).ready(function() {
  $('#coordinate-field-map-canvas').each(function() {

    latitude = $('.coordinate-field-latitude input').val();
    longitude = $('.coordinate-field-longitude input').val();
    var latlng = new google.maps.LatLng(latitude, longitude);

    // Map Settings
    var settings = {
      zoom: 6,
      center: latlng,
      mapTypeControl: true,
      zoomControl: false,
      disableDoubleClickZoom: true,
      mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
      navigationControl: true,
      navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Start Map
    var map = new google.maps.Map(this, settings);

    // On click, get lng and lat
    google.maps.event.addListener(map, 'click', function(event){

      $('.coordinate-field-latitude input').val(event.latLng.lat());
      $('.coordinate-field-longitude input').val(event.latLng.lng());

    });


  });
});
})(jQuery);

