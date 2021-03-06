import React from "react";
import Helmet from "react-helmet";
import L from "leaflet";
import axios from "axios";

import Layout from "components/Layout";
import Container from "components/Container";
import Map from "components/Map";
import HomeDashboard from 'components/HomeDashboard';

import 'bootstrap/dist/css/bootstrap.css';

const LOCATION = {
  lat: 20.00,
  lng: 77.00,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 3;

const IndexPage = () => {
  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * @example Here this is and example of being used to zoom in and set a popup on load
   */

  async function mapEffect({ leafletElement: map } = {}) {
    if (!map) return;
    let response;
    try {
      response = await axios.get("https://corona.lmao.ninja/v2/countries");
    } catch (e) {
      console.log(`Failed to fetch countries: ${e.message}`, e);
      return;
    }

    const { data = [] } = response;
    // console.log(data);
    const hasData = Array.isArray(data) && data.length > 0;

    if (!hasData) return;

    const geoJson = {
      type: "FeatureCollection",
      features: data.map((country = {}) => {
        const { countryInfo = {} } = country;
        const { lat, long: lng } = countryInfo;
        return {
          type: "Feature",
          properties: {
            ...country,
          },
          geometry: {
            type: "Point",
            coordinates: [lng, lat],
          },
        };
      }),
    };
    // console.log(geoJson);

    const geoJsonLayers = new L.GeoJSON(geoJson, {
      pointToLayer: (feature = {}, latlng) => {
        const { properties = {} } = feature;
        let updatedFormatted;
        let casesString;

        const { country, updated, cases, deaths, recovered } = properties;

        casesString = `${cases}`;

        if (cases > 1000) {
          casesString = `${casesString.slice(0, -3)}k+`;
        }

        if (updated) {
          updatedFormatted = new Date(updated).toLocaleString();
        }

        const html = `
          <span class="icon-marker">
            <span class="icon-marker-tooltip">
              <h2>${country}</h2>
              <ul>
                <li><strong>Confirmed:</strong> ${cases}</li>
                <li><strong>Deaths:</strong> ${deaths}</li>
                <li><strong>Recovered:</strong> ${recovered}</li>
                <li><strong>Last Update:</strong> ${updatedFormatted}</li>
              </ul>
            </span>
            ${casesString}
          </span>
        `;

        return L.marker(latlng, {
          icon: L.divIcon({
            className: "icon",
            html,
          }),
          riseOnHover: true,
        });
      },
    });

    await geoJsonLayers.addTo(map);
    
    const iconMarkerElem = document.querySelectorAll(".icon-marker")
  Array.from(iconMarkerElem).forEach((icon) => {
    icon.onclick = () => {
      icon.firstElementChild.style.display = icon.firstElementChild.style.display === "block" ? "none" : "block";
    }
  });

  }

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: "OpenStreetMap",
    zoom: DEFAULT_ZOOM,
    mapEffect,
  };

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Map {...mapSettings} />

      <Container type="content" className="text-center home-start">
        <HomeDashboard />
        {/* <pre>
          <code>gatsby new [directory]</code>
        </pre> */}
      </Container>
    </Layout>
  );
};

export default IndexPage;
