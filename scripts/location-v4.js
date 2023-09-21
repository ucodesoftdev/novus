let indexInfoWindow = 0;
const locations = [
        {
          title: "Melbourne Theatre Company HQ",
          address: "252 Sturt St, Southbank VIC 3006, Australia",
          lat: -37.829037,
          lng: 144.9528453,
          type: "art",
        },
        {
          title: "Australian Centre For Contemporary Art",
          address: "111 Sturt St, Southbank VIC 3006, Australia",
          lat: -37.8265889,
          lng: 144.9670222,
          type: "art",
        },
        {
          title: "Malthouse Theatre",
          address: "The Malthouse, 113 Sturt St, Southbank VIC 3006, Australia",
          lat: -37.8269701,
          lng: 144.9664968,
          type: "art",
        },
        {
          title: "Melbourne Symphony Orchestra",
          address: "120/130 Southbank Blvd, Southbank VIC 3006, Australia",
          lat: -37.8200926,
          lng: 144.9659146,
          type: "art",
        },
        {
          title: "NIDA - National Institute of Dramatic Art",
          address: "Suite 4/152 Sturt St, Southbank VIC 3006, Australia",
          lat: -37.8254475,
          lng: 144.9633397,
          type: "art",
        },
        {
          title: "National Gallery of Victoria",
          address: "180 St Kilda Rd, Melbourne VIC 3006, Australia",
          lat: -37.8225942,
          lng: 144.9689278,
          type: "art",
        },
        {
          title: "Uomasa Japanese Restaurant",
          address: "75A Dorcas St, Sou <script>th Melbourne VIC 3205, Australia",
          lat: -37.8313482,
          lng: 144.9644578,
          type: "cafe",
        },
        {
          title: "Betwixt Cafe & Bar",
          address: "45 Sturt St, Southbank VIC 3006, Australia",
          lat: -37.8248824,
          lng: 144.9646079,
          type: "cafe",
        },
        {
          title: "Lionel's Cafe",
          address: "The Stable, Grant St, Southbank VIC 3006, Australia",
          lat: -37.8251957,
          lng: 144.9645624,
          type: "cafe",
        },
        {
          title: "Jubilee on Dorcas",
          address: "100 Dorcas St, South Melbourne VIC 3006, Australia",
          lat: -37.8310033,
          lng: 144.9637284,
          type: "cafe",
        },
        {
          title: "Gordon Espress",
          address: "100 Dorcas St, South Melbourne VIC 3006, Australia",
          lat: -37.8298523,
          lng: 144.9652759,
          type: "cafe",
        },
        {
          title: "Queenie's",
          address: "41 Coventry St, Southbank VIC 3006, Australia",
          lat: -37.8293907,
          lng: 144.9666812,
          type: "cafe",
        },
        {
          title: "Human Beans",
          address: "70 Dorcas St, South <script>bank VIC 3006, Australia",
          lat: -37.8306034,
          lng: 144.9647593,
          type: "cafe",
        },
        {
          title: "10 Hoff Cafe",
          address: "10 Hoff Bvd, Southbank VIC 3006, Australia",
          lat: -37.8251788,
          lng: 144.9611872,
          type: "cafe",
        },
        {
          title: "Ayam Chef",
          address: "67-69 Coventry St, Southbank VIC 3006, Australia",
          lat: -37.8298181,
          lng: 144.9630614,
          type: "cafe",
        },
        {
          title: "Miss Pearl Bar",
          address: "140 Southbank Blvd, Southbank VIC 3006, Australia",
          lat: -37.8240055, <script>
          lng: 144.9632824,
          type: "cafe",
        },
        {
          title: "Tempura Hajime",
          address: "60 Park St, South Melbourne VIC 3205, Australia",
          lat: -37.832754,
          lng: 144.9663084,
          type: "cafe",
        },
        {
          title: "Mister Margherita",
          address: "1/52 Park St, South Melbourne VIC 3205, Australias",
          lat: -37.8326746,
          lng: 144.9665849,
          type: "cafe",
        },
        {
          title: "Olmate's Sangas",
          address: "20 Kavanagh St, Southbank VIC 3006, Australia",
          lat: -37.8229389,
          lng: 144.9634414, <script>
          type: "cafe",
        },
        {
          title: "Royal Botanic Gardens",
          address: "Melbourne VIC 3004, Australia",
          lat: -37.83024,
          lng: 144.9755362,
          type: "local_treasure",
        },
        {
          title: "Shrine of Remembrance",
          address: "Birdwood Ave, Melbourne VIC 3001, Australia",
          lat: -37.8305164,
          lng: 144.9734319,
          type: "local_treasure",
        },
        {
          title: "Kings Domain", <script>
          address: "Main Yarra Trail, Melbourne VIC 3004, Australia",
          lat: -37.8304905,
          lng: 144.9631322,
          type: "local_treasure",
        },
        {
          title: "Sidney Myer Music Bowl",
          address: "Melbourne VIC 3004, Australia",
          lat: -37.8233318,
          lng: 144.9696529,
          type: "local_treasure",
        },
        {
          title: "South Melbourne Markets",
          address: "322-326 Coventry St, South Melbourne VIC 3205, Australia",
          lat: -37.8320111,
          lng: 144.9559391,
          type: "local_treasure",
        },
        {
          title: "Rod Laver Arena",
          address: "Olympic Blvd, Melbour <script>ne VIC 3001, Australia",
          lat: -37.8216118,
          lng: 144.9759835,
          type: "local_treasure",
        },
        {
          title: "MCG",
          address: "Brunton Ave, Richmond VIC 3002, Australia",
          lat: -37.8199669,
          lng: 144.9834493,
          type: "local_treasure",
        },
        {
          title: "Melbourne Convention & Exhibition Centre",
          address: "1 Convention Centre Pl, South Wharf VIC 3006, Australia",
          lat: -37.8246679,
          lng: 144.9554648,
          type: "local_treasure",
        },
        {
          title: "Albert Park Grand Prix Circuit",
          address: "Albert Park VIC 3206, <script> Australia",
          lat: -37.8500625,
          lng: 144.9229087,
          type: "local_treasure",
        },
        {
          title: "Blondie Bar",
          address:
            "Cnr Southbank Boulevard &, 31 Sturt St, Southbank VIC 3006, Australia",
          lat: -37.8238295,
          lng: 144.9652713,
          type: "bar",
        },
        {
          title: "PJ O'Briend's Irish pub",
          address:
            "G14 / 15, 16/3 Southgate Ave, Southbank VIC 3006, Australia",
          lat: -37.8203679,
          lng: 144.9633755,
          type: "bar",
        }, <script>
        {
          title: "Petanque Social",
          address:
            "Crown Riverwalk, Crown Melbourne, 8 Whiteman St, Southbank VIC 3006, Australia",
          lat: -37.8221273,
          lng: 144.9542821,
          type: "bar",
        },
        {
          title: "Limerick Arms Hotel",
          address: "364 Clarendon St, South Melbourne VIC 3205, Australia",
          lat: -37.8354147,
          lng: 144.9588999,
          type: "bar",
        },
        {
          title: "Hophaus Bar",
          address: "MR5/3 Southgate Ave, Southbank VIC 3006, Australia",
          lat: -37.8202387, <script>
          lng: 144.9630821,
          type: "bar",
        },
        {
          title: "Belgian Beer Cafe",
          address: "5 Riverside Quay, Southbank VIC 3006, Australia",
          lat: -37.8214932,
          lng: 144.9617884,
          type: "bar",
        },
        {
          title: "Hopscotch Melbourne",
          address:
            "Ground Floor, 4 Riverside Quay, Southbank VIC 3006, Australia",
          lat: -37.8207177,
          lng: 144.9608821,
          type: "bar",
        },
        {
          title: "Bells Hotel",
          address: "157 Moray St, Sout <script>h Melbourne VIC 3205, Australia",
          lat: -37.8308681,
          lng: 144.9601939,
          type: "bar",
        },
      ];

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
      const latlng = { lat: -37.8278719, lng: 144.9639754 };
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
        if (!section) {
          console.error("Map container not found!");
          return;
        }
        const map = new google.maps.Map(section, {
          center: { lat: -37.8278719, lng: 144.9639754 },
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
        callback(category, map, indexInfoWindow);
        service = new window.google.maps.places.PlacesService(map);
      }
      function callback(category, map) {
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
          position: { lat: -37.8278719, lng: 144.9639754 },
          icon: "https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/65082b1e3487e4f9f004f556_location-marker.svg",
        });
        const markers = [];
        bounds.extend(defaultMarker.position);
        for (let i = 0; i < results.length; i++) {
          const marker = createMarker(
            results[i],
            map,
            bounds,
            markers,
            colorCode,
            icons
          );
          markers.push({ marker, type: results[i].type });
          if (i === 0 && markers[0]) {
            openInfoWindow(results[i], colorCode, markers);
            markers[0].marker.setIcon(icons[results[i].type].active);
          }
        }
        map.fitBounds(bounds);
      }
      function createMarker(place, map, bounds, markers, colorCode, icons) {
        const marker = new google.maps.Marker({
          map,
          position: { lat: place.lat, lng: place.lng },
          icon: icons[place.type].default,
        });
        bounds.extend(marker.position);
        google.maps.event.addListener(marker, "click", () => {
          for (let i = 0; i < markers.length; i++) {
            markers[i].marker.setIcon(icons[markers[i].type].default);
          }
          marker.setIcon(icons[place.type].active);
          openInfoWindow(place, colorCode, markers);
        });
        return marker;
      }

      async function openInfoWindow(location, colorCode, markers) {
        const images = await getPlaceId(location.title);
        const locationMap = document.querySelector(".location-map");
        let infoDiv = document.querySelector(".location-data");
        let infoTitle = document.querySelector(".info-title");
        let infoDescription = document.querySelector(".info-description");
        let infoCross = document.querySelector(".info-cross");
        let infoNavigation = document.querySelector(".info-navigation");
        let infoImageDiv = document.querySelector(".info-image-div");
        let owlContainer = document.querySelector(".owl-carousel");
        if (!locationMap) {
          console.error("Map container not found");
        }
        if (owlContainer) {
          owlContainer.parentNode.removeChild(owlContainer);
        }
        owlContainer = document.createElement("div");
        if (
          !infoDescription &&
          !infoTitle &&
          !infoDiv &&
          !infoCross &&
          !infoNavigation &&
          !infoImageDiv
        ) {
          infoImageDiv = document.createElement("div");
          owlContainer = document.createElement("div");
          owlContainer.classList.add("owl-carousel");

          infoTitle = document.createElement("h2");
          infoDescription = document.createElement("p");
          infoDiv = document.createElement("div");
          infoCross = document.createElement("div");
          infoNavigation = document.createElement("div");
          infoImageDiv = document.createElement("div");
          infoImageDiv.classList.add("info-image-div");

          infoNavigation.innerHTML = `<svg class="nav-prev" style="height:23px;width:23px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polyline fill="none" stroke="currentColor" stroke-width="2" points="7 2 17 12 7 22" transform="matrix(-1 0 0 1 24 0)"></polyline></svg><svg class="nav-next" style="height:23px;width:23px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polyline fill="none" stroke="currentColor" stroke-width="2" points="7 2 17 12 7 22"></polyline></svg>`;
          infoNavigation.classList.add("info-navigation");
          infoNavigation.classList.add("prev_next");
          infoDescription.style.marginTop = "10px";
          infoTitle.classList.add("info-title");
          infoDescription.classList.add("info-description");
          infoDiv.classList.add("location-data");
          infoCross.classList.add("info-cross");
          infoCross.addEventListener("click", () => {
            locationMap.parentNode.removeChild(infoDiv);
          });
        }
        owlContainer.innerHTML = "";
        owlContainer.className = "";
        owlContainer.classList.add("owl-carousel");
        images.forEach((image) => {
          const imageDiv = document.createElement("div");
          imageDiv.classList.add("owl-item-image-box");
          imageDiv.classList.add("item");
          const imageEl = document.createElement("img");
          imageEl.src = image;
          imageDiv.append(imageEl);
          owlContainer.append(imageDiv);
        });
        infoImageDiv.append(owlContainer);
        infoDiv.style.setProperty("--main-bg-color", colorCode[location.type]);
        infoTitle.textContent = location.title;
        infoDescription.textContent = location.address;
        infoCross.innerHTML = `<svg style="height:15px;width:15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path></svg>`;
        infoDiv.append(
          infoCross,
          infoImageDiv,
          infoTitle,
          infoDescription,
          infoNavigation
        );
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
            new google.maps.event.trigger(
              markers[indexInfoWindow].marker,
              "click"
            );
          };
          navPrev.onclick = function () {
            if (0 === indexInfoWindow) {
              indexInfoWindow = markers.length - 1;
            } else {
              indexInfoWindow--;
            }
            new google.maps.event.trigger(
              markers[indexInfoWindow].marker,
              "click"
            );
          };
        }
        $(".owl-carousel").owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
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
      async function getPlaceId(address) {
        try {
          console.log({ address });
          const geocoder = new google.maps.Geocoder();
          const { results } = await geocoder.geocode({ address: address });
          if (!results || !results.length || !results[0].place_id) {
            console.info("Place Id doesn't find");
            return null;
          }
          return new Promise((resolve, reject) => {
            const request = { placeId: results[0].place_id };
            service.getDetails(request, (data, status) => {
              if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                let images = [];
                if (data.photos) {
                  data.photos.forEach((photo) => {
                    images.push(
                      photo.getUrl({ maxWidth: 500, maxHeight: 500 })
                    );
                  });
                }
                resolve(images);
              } else {
                reject(
                  new Error(
                    `Failed to retrieve place details. Status: ${status}`
                  )
                );
              }
            });
          });
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
      
