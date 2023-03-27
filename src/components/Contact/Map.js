import React from "react";
import GoogleMapReact from "google-map-react";
import { Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

function SimpleMap() {
  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text" style={{ color: "#fff" }}>
        {text}
      </p>
    </div>
  );

  const apiHasLoaded = (map, maps) => {
    if (map) {
      map.setOptions({
        streetViewControl: true,
        fullscreenControl: true,
        scaleControl: true,
        styles: [
          {
            featureType: "poi.business",
            elementType: "labels",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
        ],
        gestureHandling: "greedy",
        disableDoubleClickZoom: true,

        mapTypeControl: true,
        mapTypeId: maps.MapTypeId.SATELLITE,
        mapTypeControlOptions: {
          style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: maps.ControlPosition.BOTTOM_CENTER,
          mapTypeIds: [
            maps.MapTypeId.ROADMAP,
            maps.MapTypeId.SATELLITE,
            maps.MapTypeId.HYBRID,
          ],
        },

        zoomControl: true,
        clickableIcons: false,
      });
    }
  };

  const defaultProps = {
    center: {
      lat: 37.2311212533433,
      lng: -80.42173131573578,
    },
    zoom: 18,
    address: "518 McBryde Hall, Virginia Tech, Blacksburg, VA, 24060",
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <div
        style={{
          height: "500px",
          width: "80%",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2em" }}>
          <span className="accent"> Location </span> : 518 McBryde Hall,
          Virginia Tech, Blacksburg, VA, 24060
        </h1>
        <br />
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBqNM13yJ6OPsBj0kWB172FXncKcT1tl8c",
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onGoogleApiLoaded={({ map, maps }) => {
            apiHasLoaded(map, maps);
          }}
          yesIWantToUseGoogleMapApiInternals
        >
          <LocationPin
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            text={defaultProps.address}
          />
        </GoogleMapReact>
      </div>
    </Container>
  );
}

export default SimpleMap;
