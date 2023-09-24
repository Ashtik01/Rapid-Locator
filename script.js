document.addEventListener("DOMContentLoaded", function () {
    // Initialize the map
    const map = L.map('map').setView([0, 0], 13);

    // Add a tile layer 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Create a marker for the user's location
    const marker = L.marker([0, 0]).addTo(map);
    marker.bindPopup("My Location").openPopup();

    // Watch the user's location continuously
    const watchId = navigator.geolocation.watchPosition(function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        // Update the marker position
        marker.setLatLng([lat, lng]);

        // Center the map on the user's location
        map.setView([lat, lng]);
    }, function (error) {
        console.error("Error getting user location:", error.message);
    });

});
