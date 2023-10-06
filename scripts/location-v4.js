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
function initMap(event, category = null) {
  const buttons = document.querySelectorAll(".sec-loca-map-comp-button");
  const list = document.querySelectorAll(".location-menu li");
  if (buttons || list) {
    for (const button of buttons) {
      button.style.backgroundColor = "#37382b";
    }
    for (const li of list) {
      li.style.backgroundColor = "#37382b";
    }
  }
  if (event) {
    event.currentTarget.style.backgroundColor = "rgba(115, 120, 89, 0.5)";
  }
  indexInfoWindow = 0;
  const section = document.querySelector(".location-map");
  const novusMapElement = document.querySelector(".sec-location-v4-5");

  if (!section || !novusMapElement) {
    console.error("Map container not found!");
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
  const map = new google.maps.Map(section, {
    center: { lat: -37.8278762, lng: 144.9665503 },
    zoom: 16,
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
  callback(category, map, novusMap);
  service = new window.google.maps.places.PlacesService(map);
}

async function callback(category, map, novusMap) {
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
  const bounds = new google.maps.LatLngBounds();
  if (!locations || locations?.length < 1) {
    console.log("No Results Found");
    return;
  }
  let results = locations;
  if (category) {
    results = locations.filter((location) => location.type === category);
  }
  const defaultMarker = new google.maps.Marker({
    map,
    position: { lat: -37.8278762, lng: 144.9665503 },
    icon: "https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/65082b1e3487e4f9f004f556_location-marker.svg",
  });
  bounds.extend(defaultMarker.position);
  const markers = [];
  for (let i = 0; i < results.length; i++) {
    getLatLong(`${results[i].title} ${results[i].address}`).then(
      (locationResult) => {
        createMarker(
          i,
          results[i],
          map,
          bounds,
          markers,
          colorCode,
          icons,
          locationResult
        );

        if (i === results.length - 1) {
          if (window.screen.width <= 1024) {
            map.fitBounds(bounds, { top: 300 });
            return;
          }
          map.fitBounds(bounds);
        }
      }
    );
  }
}

async function createMarker(index, place, map, bounds, markers, colorCode, icons, locationResult) {
  const markerLatLng = {
    lat: locationResult?.geometry?.location.lat(),
    lng: locationResult?.geometry?.location.lng(),
  };
  
  const marker = new google.maps.Marker({
    map,
    position: markerLatLng,
    icon: icons[place.type].default,
  });
  
  markers.push({ marker, type: place.type });
  bounds.extend(marker.position);

  if (index === 0 && markers[0]) {
    openInfoWindow(place, colorCode, markers, locationResult?.place_id);
    markers[0].marker.setIcon(icons[place.type].active);
  }
  
  google.maps.event.addListener(marker, "click", () => {
    for (let i = 0; i < markers.length; i++) {
      markers[i].marker.setIcon(icons[markers[i].type].default);
    }
    marker.setIcon(icons[place.type].active);
    openInfoWindow(place, colorCode, markers, locationResult?.place_id);
  });
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

const openInfoWindow = async (location, colorCode, markers, place_id) => {
  const locationMap = document.querySelector(".location-map");
  let owlContainer = document.querySelector(".owl-carousel");
  let infoDiv = document.querySelector(".location-data");

  if (!locationMap) {
    console.error("Map container not found");
    return;
  }
  if (!infoDiv) {
    infoDiv = document.createElement("div");
  }

  infoDiv.classList.add("location-data");

  const images = await getPlaceId(place_id);

  owlContainer = "";

  images.forEach((image) => {
    owlContainer += `
      <div class="owl-item-image-box item">
        <img src=${image}/>
      </div>
    `;
  });

  infoDiv.innerHTML = `
    <div class="info-image-div">
      <div class="owl-carousel">
        ${owlContainer}
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
      if (markers.length - 1 === indexInfoWindow) {
        indexInfoWindow = 0;
      } else {
        indexInfoWindow++;
      }
      new google.maps.event.trigger(markers[indexInfoWindow].marker, "click");
    };
    navPrev.onclick = function () {
      if (0 === indexInfoWindow) {
        indexInfoWindow = markers.length - 1;
      } else {
        indexInfoWindow--;
      }
      new google.maps.event.trigger(markers[indexInfoWindow].marker, "click");
    };
  }
  getOwlCarousel($(".owl-carousel"));
};

async function getPlaceId(place_id) {
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

async function getLatLong(address) {
  try {
    const geocoder = new google.maps.Geocoder();
    const { results } = await geocoder.geocode({ address: address });
    if (!results || !results.length) {
      console.info("Address not found");
      return null;
    }

    return results[0];
  } catch (error) {
    console.error(error);
    return null;
  }
}

function getOwlCarousel(element) {
  if (!element) {
    console.log("carousel element not found");
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
      `<svg style="width:20px; height:20px" class="w-64 h-64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polyline fill="none" stroke="#eec485" stroke-width="2" points="7 2 17 12 7 22" transform="matrix(-1 0 0 1 24 0)"></polyline></svg>`,
      `<svg style="width:20px; height:20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"><polyline fill="none" stroke="#eec485" stroke-width="2" points="7 2 17 12 7 22"></polyline></svg>`,
    ],
  });
}
