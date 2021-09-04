import React, { useEffect, useState } from "react";
import Breadcrumbs from "../UIElements/Basic/BreadcrumbPagination";
import { Row, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { getDetailsOfGateways } from "../../../store/gateways/gateways.actions";
import TabsPills from "../UIElements/Basic/TabsPills";

const DetailsGateways = ({
  gateway,
  detailsGetway,
  success,
  loading,
  failure,
}) => {
  const id = window.location.pathname.split("/")[3];
  const [details, setDetails] = useState(gateway || {});
  const [information, setInformation] = useState({});
  const [positionData, setPositionData] = useState(null);

  useEffect(() => {
    detailsGetway(id);
  }, [detailsGetway, id]);

  useEffect(() => {
    if (gateway && Object.keys(gateway).length > 0) {
      setDetails(gateway);
    }
  }, [gateway]);

  useEffect(() => {
    if (details && Object.keys(details).length > 0) {
      setInformation({
        ...information,
        id: details.devEUI,
        name: details?.rxInfo[0]?.name,
        message: details?.fCnt,
        modulation: details?.modulation,

      });
      setPositionData({
        ...positionData,
        lat: details?.rxInfo[0]?.location?.latitude,
        lng: details?.rxInfo[0]?.location?.longitude,
      });
    }
  }, [details]);
  return (
    <>
      {loading && !details && (
        <div className="text-center m-5">
          <div className="spinner-border spinner-border-lg mr-1" role="status">
            <span className="sr-only  pr-2">Loading...</span>
          </div>
        </div>
      )}
      {failure && !details && (
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
            breadCrumbParent="Informations"
            breadCrumbActive="Details"
            children
          />
          <TabsPills information={information} positionData={positionData} />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  gateway: state.gateways.one,
  success: state.gateways.success,
  loading: state.gateways.loading,
  failure: state.gateways.failure,
});
const mapDispatchToProps = (dispatch) => ({
  detailsGetway: (id) => dispatch(getDetailsOfGateways(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsGateways);
