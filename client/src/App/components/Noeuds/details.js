import React, { useEffect, useState } from "react";
import Breadcrumbs from "../UIElements/Basic/BreadcrumbPagination";
import { Row, Card, Col, Tabs, Tab,} from "react-bootstrap";
import { connect } from "react-redux";
import { getDetailsOfNoeuds } from "../../../store/noeuds/noeuds.actions";
import Aux from "../../../hoc/_Aux";

const DetailsNoeud = ({ noeud, detailsNoeud, success, loading, failure }) => {
  const id = window.location.pathname.split("/")[3];
  const [details, setDetails] = useState(noeud || {});
  const [information, setInformation] = useState({});

  useEffect(() => {
    detailsNoeud(id);
  }, [detailsNoeud, id]);

  useEffect(() => {
    if (noeud && Object.keys(noeud).length > 0) {
      setDetails(noeud);
    }
  }, [noeud]);

  useEffect(() => {
    if (details && Object.keys(details).length > 0) {
      setInformation({
        ...information,
        snr: details?.rxInfo[0].loRaSNR,
        frequence: details.txInfo.frequency,
        rssi: details?.rxInfo[0].rssi,
        time: details?.object.mydata.split(",")[3].substr(2),
        bandWidth: details?.BandWidth,
        data: details?.object.mydata,
      });
    }
  }, [details]);
  return (
    <Aux>
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
            breadCrumbTitle="Noeuds"
            breadCrumbParent="Informations"
            breadCrumbActive="Details"
            children
          />
          <Row>
            <Col>
              <Tabs defaultActiveKey="informations">
                <Tab eventKey="informations" title="Informations">
                  <h4 className="text-uppercase mb-4">Informations Générale</h4>
                  <table className="table table-bordered table-striped">
                    <tbody>
                      <tr>
                        <td>ID</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>Name</td>
                        <td>Stmnode</td>
                      </tr>
                      <tr>
                        <td>SNR</td>
                        <td>{information.snr}</td>
                      </tr>
                      <tr>
                        <td>Frequence</td>
                        <td>{information.frequence}</td>
                      </tr>
                      <tr>
                        <td>RSSI</td>
                        <td>{information.rssi}</td>
                      </tr>
                      <tr>
                        <td>BandWidth</td>
                        <td>{information.bandWidth}</td>
                      </tr>
                      <tr>
                        <td>Data</td>
                        <td>{information.data}</td>
                      </tr>
                      <tr>
                        <td>Time</td>
                        <td>{information.time}</td>
                      </tr>
                    </tbody>
                  </table>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </>
      )}
    </Aux>
  );
};

const mapStateToProps = (state) => ({
  noeud: state.noeuds.one,
  success: state.noeuds.success,
  loading: state.noeuds.loading,
  failure: state.noeuds.failure,
});
const mapDispatchToProps = (dispatch) => ({
  detailsNoeud: (id) => dispatch(getDetailsOfNoeuds(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsNoeud);
