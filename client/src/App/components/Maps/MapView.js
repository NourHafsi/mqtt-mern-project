import React, { useEffect, useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { VenueLocationIcon } from "./VenueLocationIcon";
import Aux from "../../../hoc/_Aux";
import { Col, Row, Card } from "react-bootstrap";
import Breadcrumbs from "../UIElements/Basic/BreadcrumbPagination";
import { getMapsOfGateway } from "../../../store/gateways/gateways.actions";
import { connect } from "react-redux";

const DEFAULT_LATITUDE = 52.52437;
const DEFAULT_LONGITUDE = 13.41053;

const MapView = ({
  maps,
  detailsMaps,
  success,
  loading,
  failure,
  ...props
}) => {
  const [details, setDetails] = useState(maps || {});

  useEffect(() => {
    detailsMaps();
  }, [detailsMaps]);

  useEffect(() => {
    if (maps && Object.keys(maps).length > 0) {
      setDetails({
        ...maps,
        zoom: 18,
      });
    }
  }, [maps]);

  const initMarker = (ref) => {
    if (ref) {
      ref.leafletElement.openPopup();
    }
  };
  
  return (
    <Aux>
      {loading && !Object.keys(details).length && !details.lat && (
        <div className="text-center m-5">
          <div className="spinner-border spinner-border-lg mr-1" role="status">
            <span className="sr-only  pr-2">Loading...</span>
          </div>
        </div>
      )}
      {failure && !Object.keys(details).length && (
        <Card>
          <Card.Body>
            <Row>
              <p>Une erreur s'est produite lors de la lecture des données</p>
            </Row>
          </Card.Body>
        </Card>
      )}
      {details && success && (
        <>
          <Breadcrumbs
            breadCrumbTitle="Gateways"
            breadCrumbParent="Maps"
            breadCrumbActive="Details"
            children
          />
          <Row>
            <Col>
              <div className="my-3" style={{ width: "100%", height: "400px" }}>
                <Map
                  center={[
                    details?.object?.mydata.split(",")[1].substr(4) ||
                      DEFAULT_LATITUDE,
                    details?.object?.mydata.split(",")[2].substr(5) ||
                      DEFAULT_LONGITUDE,
                  ]}
                  zoom={details.zoom}
                  style={{
                    width: "100%",
                    height: "100%",
                    boxShadow: "lightgrey 0px 5px 10px 10px",
                    borderRadius: "10px",
                  }}
                >
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  <Marker
                    position={[
                      details?.object?.mydata.split(",")[1].substr(4) ||
                        DEFAULT_LATITUDE,
                      details?.object?.mydata.split(",")[2].substr(5) ||
                        DEFAULT_LONGITUDE,
                    ]}
                    icon={VenueLocationIcon}
                    ref={initMarker}
                  >
                    <Popup>
                      Current location:{" "}
                      <pre>
                        {`{"lat": ${
                          details?.object?.mydata.split(",")[1].substr(4) ||
                          DEFAULT_LATITUDE
                        }, "lng": ${
                          details?.object?.mydata.split(",")[2].substr(5) ||
                          DEFAULT_LONGITUDE
                        }, "rain": ${details?.object?.mydata
                          .split(",")[0]
                          .substr(5)} }`}
                      </pre>
                    </Popup>
                  </Marker>
                </Map>
              </div>
            </Col>
          </Row>
        </>
      )}
    </Aux>
  );
};

const mapStateToProps = (state) => ({
  maps: state.gateways.maps,
  success: state.gateways.success,
  loading: state.gateways.loading,
  failure: state.gateways.failure,
});
const mapDispatchToProps = (dispatch) => ({
  detailsMaps: () => dispatch(getMapsOfGateway()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapView);
