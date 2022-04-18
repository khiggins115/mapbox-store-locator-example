mapboxgl.accessToken = 'pk.eyJ1IjoiY2FkZS1oaWdnaW5zNyIsImEiOiJjbDFjc3dmc3gwNTNiM2lydW9jc2k4YmExIn0.j9sp4ZqJUJKTR1wgqSOV-Q';

/**
 * map constant
 */
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/cade-higgins7/cl1o4jvvo005215pdy1xq92hs',
  center: [-96.3397581, 30.6155116],
  zoom: 13,
  scrollZoom: false
});

/**
 * load points and assign uid
 * 
 */
const bathrooms = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "building_name": "kyle field",
          "category": "family",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.33957,
            30.61001
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "memorial student center",
          "category": "family",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.34154,
            30.61197
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "sam houston sanders corps of cadets center",
          "category": "unisex",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.3375,
            30.6121
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "rudder theatre complex",
          "category": "gendered single",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.33995,
            30.61327
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "ash living learning center",
          "category": "unisex",
          "public": "no"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.3356,
            30.61353
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "bizzell hall",
          "category": "unisex",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.34132,
            30.61394
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "coke",
          "category": "family",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.34165,
            30.61454
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "ymca building",
          "category": "family",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.34229,
            30.6152
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "interdisciplinary life sciences building",
          "category": "family",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.3433,
            30.61447
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "beutel hall",
          "category": "unisex",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.34271,
            30.61565
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "hullaballoo hall",
          "category": "unisex",
          "public": "no"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.34628,
            30.61615
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "c-1 lounge",
          "category": "unisex",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.34539,
            30.61706
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "munnerlyn astronomy & space sciences engineering",
          "category": "family",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.34415,
            30.6189
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "hotard hall",
          "category": "family",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.34449,
            30.61824
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "engineering innovation center",
          "category": "unisex",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.34147,
            30.61861
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "mitchell physics building",
          "category": "gendered single",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.34241,
            30.6204
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "harrington education center office tower",
          "category": "family",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.34086,
            30.61648
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "joe c. richardson petroleum engineering building",
          "category": "gendered single",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.33935,
            30.61951
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "scoates hall",
          "category": "unisex",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.33849,
            30.61864
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": "",
          "building_name": "liberal arts and humanities",
          "category": "unisex",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.33794,
            30.61754
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "melbern g. glasscock building",
          "category": "gendered single",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.33845,
            30.61733
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "animal industries building",
          "category": "gendered single",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.3372,
            30.61724
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "jack k. williams administration building",
          "category": "family",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.33649,
            30.61871
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": "",
          "building_name": "emerging technologies building",
          "category": "unisex",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.33889,
            30.6226
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "rosenthal meat science & technology center",
          "category": "family",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.34839,
            30.60968
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "nuclear magnetic resonance facility",
          "category": "unisex",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.34981,
            30.61024
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "building_name": "bio-chemistry & bio-physice",
          "category": "unisex",
          "public": "yes"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -96.34921,
            30.61074
          ]
        }
      }
    ]
  };

bathrooms.features.forEach((bathroom, i) => {
    bathroom.properties.id = i;
});

/**
 * Wait until the map loads to make changes to the map.
 */
map.on('load', () => {
  /**
   * This is where your '.addLayer()' used to be, instead
   * add only the source without styling a layer
   */
  map.addSource('places', {
    'type': 'geojson',
    'data': bathrooms
  });

  /**
   * Add all the things to the page:
   * - The location listings on the side of the page
   * - The markers onto the map
   */
  buildLocationList(bathrooms);
  addMarkers();
});

/**
 * Add a marker to the map for every store listing.
 **/
function addMarkers() {
  /* For each feature in the GeoJSON object above: */
  for (const marker of bathrooms.features) {
    /* Create a div element for the marker. */
    const el = document.createElement('div');
    /* Assign a unique `id` to the marker. */
    el.id = `marker-${marker.properties.id}`;
    /* Assign the `marker` class to each marker for styling. */
    el.className = 'marker';

    /**
     * Create a marker using the div element
     * defined above and add it to the map.
     **/
    new mapboxgl.Marker(el, { offset: [0, -23] })
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);

    /**
     * Listen to the element and when it is clicked, do three things:
     * 1. Fly to the point
     * 2. Close all other popups and display popup for clicked store
     * 3. Highlight listing in sidebar (and remove highlight for all other listings)
     **/
    el.addEventListener('click', (e) => {
      /* Fly to the point */
      flyToStore(marker);
      /* Close all other popups and display popup for clicked store */
      createPopUp(marker);
      /* Highlight listing in sidebar */
      const activeItem = document.getElementsByClassName('active');
      e.stopPropagation();
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      const listing = document.getElementById(
        `listing-${marker.properties.id}`
      );
      listing.classList.add('active');
    });
  }
}

/**
 * Add a listing for each store to the sidebar.
 **/
function buildLocationList(bathrooms) {
  for (const bathroom of bathrooms.features) {
    /* Add a new listing section to the sidebar. */
    const listings = document.getElementById('listings');
    const listing = listings.appendChild(document.createElement('div'));
    /* Assign a unique `id` to the listing. */
    listing.id = `listing-${bathroom.properties.id}`;
    /* Assign the `item` class to each listing for styling. */
    listing.className = 'item';

    /* Add the link to the individual listing created above. */
    const link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';
    link.id = `link-${bathroom.properties.id}`;
    link.innerHTML = `${bathroom.properties.building_name}`;

    /* Add details to the individual listing. */
    const details = listing.appendChild(document.createElement('div'));
    details.innerHTML = `Public: ${bathroom.properties.public}`;

    /**
     * Listen to the element and when it is clicked, do four things:
     * 1. Update the `currentFeature` to the bathroom associated with the clicked link
     * 2. Fly to the point
     * 3. Close all other popups and display popup for clicked bathroom
     * 4. Highlight listing in sidebar (and remove highlight for all other listings)
     **/
    link.addEventListener('click', function () {
      for (const feature of bathrooms.features) {
        if (this.id === `link-${feature.properties.id}`) {
          flyToStore(feature);
          createPopUp(feature);
        }
      }
      const activeItem = document.getElementsByClassName('active');
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      this.parentNode.classList.add('active');
    });
  }
}

/**
 * Use Mapbox GL JS's `flyTo` to move the camera smoothly
 * a given center point.
 **/
function flyToStore(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 15
  });
}

/**
 * Create a Mapbox GL JS `Popup`.
 **/
function createPopUp(currentFeature) {
  const popUps = document.getElementsByClassName('mapboxgl-popup');
  if (popUps[0]) popUps[0].remove();
  const popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML(
      `<h3>${currentFeature.properties.building_name}</h3><h4>${currentFeature.properties.category} bathroom</h4>`
    )
    .addTo(map);
}