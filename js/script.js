function myMap() {
    let latLng = { lat: 19.8563, lng: 102.4955 };

    let mapOptions = {
        center: latLng,
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        fullscreenControl: false
    }

    let map = new google.maps.Map(document.querySelector("#map"), mapOptions);

    let marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: 'Chào thế giới'
    });
}