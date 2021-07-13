// Initialize and add the map
function initMap() {
    // The location of Uluru
    const place = { lat: -1.288780, lng: 36.794430 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 18,
      center: place,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: place,
      map: map,
    });
  }