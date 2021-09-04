import React, { useEffect } from "react";
import Breadcrumbs from "../UIElements/Basic/BreadcrumbPagination";
import { Row, Col, Card, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { getListOfGateways } from "../../../store/gateways/gateways.actions";
import DEMO from "../../../store/constant";

const Gateways = ({ gateways, listOfGateways }) => {
  useEffect(() => {
    listOfGateways();
  }, [listOfGateways]);

  console.log(gateways.listGateways);

  return (
    <>
      {gateways.loading && (
        <div className="text-center m-5">
          <div className="spinner-border spinner-border-lg mr-1" role="status">
            <span className="sr-only  pr-2">Loading...</span>
          </div>
        </div>
      )}
      {gateways.failure && (
        <Card>
          <Card.Body>
            <Row>
              <p>Une erreur s'est produite lors de la lecture des données</p>
            </Row>
          </Card.Body>
        </Card>
      )}
      {gateways.listGateways.length > 0 && gateways.success && (
        <>
          <Breadcrumbs
            breadCrumbTitle="Gateways"
            breadCrumbParent="Gateways"
            breadCrumbActive="List"
            children
          />
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <Card.Title as="h5">List of Gateways</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Table striped responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(gateways.listGateways || []).map((d, index) => {
                        return (
                          <tr key={d._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{d.gatewayID}</td>
                            <td>{d.name}</td>
                            <td>
                                <a href={DEMO.DETAILS_GATEWAY + "/" +d._id}>
                                <i className="fa fa-edit fa-2x text-warning" style={{ cursor: "pointer" }} />
                                </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  gateways: state.gateways,
});
const mapDispatchToProps = (dispatch) => ({
  listOfGateways: () => dispatch(getListOfGateways()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gateways);
