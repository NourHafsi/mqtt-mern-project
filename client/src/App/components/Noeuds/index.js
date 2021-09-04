import React, { useEffect } from "react";
import { getListOfNoeuds } from "../../../store/noeuds/noeuds.actions";
import { connect } from "react-redux";
import { Row, Col, Card, Table } from "react-bootstrap";
import Breadcrumbs from "../UIElements/Basic/BreadcrumbPagination";
import DEMO from "../../../store/constant";

const Noeuds = ({ noeuds, listOfNoeuds }) => {
  useEffect(() => {
    listOfNoeuds();
  }, [listOfNoeuds]);

  return (
    <>
      {noeuds.loading && (
        <div className="text-center m-5">
          <div className="spinner-border spinner-border-lg mr-1" role="status">
            <span className="sr-only  pr-2">Loading...</span>
          </div>
        </div>
      )}
      {noeuds.failure && (
        <Card>
          <Card.Body>
            <Row>
              <p>Une erreur s'est produite lors de la lecture des données</p>
            </Row>
          </Card.Body>
        </Card>
      )}
      {noeuds.listNoeuds.length > 0 && noeuds.success && (
        <>
          <Breadcrumbs
            breadCrumbTitle="Nodes"
            breadCrumbParent="Nodes"
            breadCrumbActive="List"
            children
          />

          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <Card.Title as="h5">List of Nodes</Card.Title>
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
                      {(noeuds.listNoeuds || []).map((d, index) => {
                        return (
                          <tr key={d._id}>
                            <th scope="row">{index + 1}</th>
                            <td>1</td>
                            <td>Stmnode</td>
                            <td>
                              <a href={DEMO.DETAILS_NOEUD + "/" + d._id}>
                                <i
                                  className="fa fa-edit fa-2x text-warning"
                                  style={{ cursor: "pointer" }}
                                />
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
  noeuds: state.noeuds,
});
const mapDispatchToProps = (dispatch) => ({
  listOfNoeuds: () => dispatch(getListOfNoeuds()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Noeuds);
