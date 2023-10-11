$(document).ready(function () {
  $(".location-filter").click(function () {
    $(this).attr("tabindex", 1).focus();
    $(this).toggleClass("active");
    $(this).find(".location-menu").slideToggle(300);
  });
  $(".location-filter").focusout(function () {
    $(this).removeClass("active");
    $(this).find(".location-menu").slideUp(300);
  });
});

const colorCode = {
  art: "#5684b9",
  cafe: "#c87474",
  bar: "#926dc1",
  local_treasure: "#e7c28c",
};
const icons = {
  art: {
    default: `https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/650ac0fc130beb68ae85d902_art-marker.svg`,
    active: `https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/650ac3fa40e06da62f7a5a2f_art-active-marker.svg`,
  },
  cafe: {
    default: `https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/650ac0fc40e06da62f7770e4_cafe-marker.svg`,
    active: `https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/650ac3f9f964c08e55a37139_active-cafe-marker.svg`,
  },
  bar: {
    default: `https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/650ac0fbed3778abead795a4_bar-marker.svg`,
    active: `https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/650ac3fa861b944ecf8c2bde_active-bar-marker.svg`,
  },
  local_treasure: {
    default: `https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/650ac0fbed3778abead795a1_local-treasure-marker.svg`,
    active: `https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/650ac3fa9681e98c08573f2d_active-local-treasure-marker.svg`,
  },
};
const allMarkers = [];
let currentTabMarkers = [];
let map;

function initMap() {
  const mapContainer = document.querySelector(".location-map");
  if (!mapContainer) {
    console.error("Unable to load Map");
    return;
  }

  map = new google.maps.Map(mapContainer, {
    center: { lat: -37.8278762, lng: 144.9665503 },
    zoom: 18,
    disableDefaultUI: true,
    styles: [
      {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road.local",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      { elementType: "geometry", stylers: [{ color: "#2c2c22" }] },
      {
        elementType: "labels.text.stroke",
        stylers: [{ color: "#242f3e" }],
      },
      {
        elementType: "labels.text.fill",
        stylers: [{ color: "#746855" }],
      },
      { featureType: "administrative", stylers: [{ visibility: false }] },
      { featureType: "poi", stylers: [{ visibility: "off" }] },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#647362" }],
      },
      {
        featureType: "road.local",
        elementType: "labels",
        stylers: [{ visibility: false }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3", visibility: false }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c", visibility: false }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#647362", visibility: false }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563", visibility: false }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#647362" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
      { featureType: "poi.business", stylers: [{ visibility: "off" }] },
      {
        featureType: "transit",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },
    ],
  });

  createMarkers();

  //Novus map integration

  const novusMapElement = document.querySelector(".sec-location-v4-5");
  if (!novusMapElement) {
    console.error("Unable to load the Novus Map");
    return;
  }

  let latLong = { lat: -37.8278762, lng: 144.9665503 };

  if (window.screen.width > 1440) {
    latLong.lng += 0.06;
  }
  if (window.screen.width >= 1351 && window.screen.width <= 1440) {
    latLong.lng += 0.04;
  }
  if (window.screen.width < 1024) {
    latLong.lat -= 0.02;
  }

  const novusMap = new google.maps.Map(novusMapElement, {
    center: latLong,
    zoom: 13.5,
    disableDefaultUI: true,
    mapId: "4e7898bbcab92cd0",
  });
  createNovusMarker(novusMap);
}

function createMarkers() {
  const bounds = new google.maps.LatLngBounds();

  const defaultMarker = new google.maps.Marker({
    map,
    position: { lat: -37.8278762, lng: 144.9665503 },
    icon: "https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/65082b1e3487e4f9f004f556_location-marker.svg",
  });
  bounds.extend(defaultMarker.position);

  for (let i = 0; i < locations.length; i++) {
    const currentLocation = locations[i];

    const markerLatLng = {
      lat: locations[i]?.lat,
      lng: locations[i]?.lng,
    };
    const marker = new google.maps.Marker({
      map,
      position: markerLatLng,
      icon: icons[currentLocation.type].default,
    });

    google.maps.event.addListener(marker, "click", () => {
      for (let i = 0; i < allMarkers.length; i++) {
        allMarkers[i].marker.setIcon(icons[allMarkers[i].type].default);
      }

      marker.setIcon(icons[currentLocation.type].active);
      openInfoWindow({
        type: currentLocation.type,
        title: currentLocation.title,
        address: currentLocation.address,
        place_id: currentLocation.place_id,
      });
    });

    bounds.extend(marker.position);
    allMarkers.push({ marker, type: currentLocation.type });
    currentTabMarkers.push({ marker, type: currentLocation.type });

    if (i === 0) {
      openInfoWindow({
        type: currentLocation.type,
        title: currentLocation.title,
        address: currentLocation.address,
        place_id: currentLocation.place_id,
      });
    }

    if (i === locations.length - 1) {
      if (window.screen.width <= 1024) {
        map.fitBounds(bounds, { top: 300 });
        return;
      }
      map.fitBounds(bounds);
    }
  }
}

function createNovusMarker(map) {
  if (!map) {
    console.error("novus map not found");
    return;
  }
  const novusMapElement = document.querySelector(".sec-location-v4-5");
  new google.maps.Marker({
    map,
    position: { lat: -37.8278762, lng: 144.9665503 },
    icon: "https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/651e88d5a20c548195874c45_location-marker-darker.svg",
  });

  const infoWindow = document.createElement("div");
  infoWindow.classList.add("novus-info-window");
  infoWindow.innerHTML = `
                          <div class="home-location">
                            <div class="info">
                              <h3>Location Details</h3>
                              <p><strong>153 Sturt Street, Southbank VIC 3006</strong></p>
                              <p>Suitably located within walking or cycling distance of all necessary amenities and the city centre</p>
                              </div>
                              <div class="distance">
                              <table>
                                <thead>
                                  <tr>
                                    <td>Trams</td>
                                    <td>Distance</td>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Miles St / Sturt St Tram Stop</td>
                                    <td>0.09 km</td>
                                  </tr>
                                  <tr>
                                    <td>Grant St / Sturt St Tram Stop</td>
                                    <td>0.22 km</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table>
                                <thead>
                                  <tr>
                                    <td>Train / Metro</td>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Anzac Metro Station</td>
                                    <td>1.00 km</td>
                                  </tr>
                                  <tr>
                                    <td>Flinders Street Station</td>
                                    <td>1.30 km</td>
                                  </tr>
                                </tbody>
                              </table>

                              <button type="button" onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=153 Sturt Street, Southbank VIC 3006', '_blank')" class="location-btn"><img src="https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/64fe14922994b2723a781908_Group.svg" />Get Directions</button>
                            </div>
                          </div>
                         `;
  novusMapElement.parentNode.append(infoWindow);
}

function handleTabChange(event, tab) {
  const tabs = document.querySelectorAll("[data-selected]");

  if (tabs && event) {
    for (const tab of tabs) {
      tab.setAttribute("data-selected", "false");
    }
    event.currentTarget.setAttribute("data-selected", "true");
  }

  currentTabMarkers = [];
  indexInfoWindow = 0;
  const bounds = new google.maps.LatLngBounds();

  allMarkers.forEach(({ type, marker }, index) => {
    if (type === tab) {
      bounds.extend(marker.position);
      marker.setVisible(true);
      currentTabMarkers.push({ type, marker });
    } else {
      marker.setVisible(false);
    }
  });
  new google.maps.event.trigger(
    currentTabMarkers[indexInfoWindow].marker,
    "click"
  );
  if (window.screen.width <= 1024) {
    map.fitBounds(bounds, { top: 300 });
    return;
  }
  map.fitBounds(bounds);
}

const openInfoWindow = async (location) => {
  const locationMap = document.querySelector(".location-map");
  let carouselContainer = document.querySelector(".owl-carousel");
  let infoDiv = document.querySelector(".location-data");

  if (!locationMap) {
    console.error("Map container not found");
    return;
  }
  if (!infoDiv) {
    infoDiv = document.createElement("div");
  }

  infoDiv.classList.add("location-data");

  const images = (await getImageByPlaceId(location.place_id)) ?? [];

  carouselContainer = "";

  images.forEach((image) => {
    carouselContainer += `
        <div class="owl-item-image-box item">
          <img src=${image}/>
        </div>
      `;
  });

  infoDiv.innerHTML = `
      <div class="info-image-div">
        <div class="owl-carousel">
          ${carouselContainer}
        </div>
      </div>
      <div class="info-heading">
        <h3 class="info-title">${location.title}</h3>
        <div class="info-navigation prev_next">
          <svg class="nav-prev" style="height:23px;width:23px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polyline fill="none" stroke="currentColor" stroke-width="2" points="7 2 17 12 7 22" transform="matrix(-1 0 0 1 24 0)"></polyline></svg>
          <p class="info-description">${location.address}</p>
          <svg class="nav-next" style="height:23px;width:23px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polyline fill="none" stroke="currentColor" stroke-width="2" points="7 2 17 12 7 22"></polyline></svg>
        </div>
      </div>
    `;

  infoDiv.style.setProperty("--main-bg-color", colorCode[location.type]);
  locationMap.parentNode.insertBefore(infoDiv, locationMap.nextSibling);

  const navNext = document.querySelector(".nav-next");
  const navPrev = document.querySelector(".nav-prev");
  if (navNext && navPrev) {
    navNext.onclick = function () {
      if (currentTabMarkers.length - 1 === indexInfoWindow) {
        indexInfoWindow = 0;
      } else {
        indexInfoWindow++;
      }
      new google.maps.event.trigger(
        currentTabMarkers[indexInfoWindow].marker,
        "click"
      );
    };
    navPrev.onclick = function () {
      if (0 === indexInfoWindow) {
        indexInfoWindow = currentTabMarkers.length - 1;
      } else {
        indexInfoWindow--;
      }
      new google.maps.event.trigger(
        currentTabMarkers[indexInfoWindow].marker,
        "click"
      );
    };
  }
  getOwlCarousel($(".owl-carousel"), colorCode[location.type]);
};

async function getImageByPlaceId(place_id) {
  const service = new window.google.maps.places.PlacesService(map);
  try {
    if (!place_id) {
      console.info("Address not found");
      return null;
    }
    return new Promise((resolve, reject) => {
      const request = { placeId: place_id };
      service.getDetails(request, (data, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          let images = [];
          if (data.photos) {
            data.photos.forEach((photo) => {
              images.push(photo.getUrl({ maxWidth: 500, maxHeight: 500 }));
            });
          }
          resolve(images);
        } else {
          reject(
            new Error(`Failed to retrieve place details. Status: ${status}`)
          );
        }
      });
    });
  } catch (error) {
    console.error(error);
    return [];
  }
}

function getOwlCarousel(element, color = "#eec485") {
  if (!element) {
    console.error("carousel element not found");
    return;
  }
  element.owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
    },
    navText: [
      `<svg style="width:20px; height:20px" class="w-64 h-64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polyline fill="none" stroke="${color}" stroke-width="3" points="7 2 17 12 7 22" transform="matrix(-1 0 0 1 24 0)"></polyline></svg>`,
      `<svg style="width:20px; height:20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"><polyline fill="none" stroke="${color}" stroke-width="3" points="7 2 17 12 7 22"></polyline></svg>`,
    ],
  });
}
