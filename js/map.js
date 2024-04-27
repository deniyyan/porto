const myaddress = { "lat": -6.850637, "lng": 108.016114},
    map = L.map('map').setView([myaddress.lat, myaddress.lng], 13),
    attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    tiles = L.tileLayer(tileUrl, { attribution }),
    marker = L.marker([myaddress.lat, myaddress.lng]);

tiles.addTo(map);
marker.addTo(map);
marker.bindPopup("Dsn Cipakujaya rt03 rw07 kecamatan kertajati kabupaten majalengka").openPopup();

L.Browser.retina ? true : false;