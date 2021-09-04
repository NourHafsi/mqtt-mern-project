import React from "react";
import { Row, Col, Tabs, Tab, Nav } from "react-bootstrap";

import Aux from "../../../../hoc/_Aux";


const TabsPills = ({ information,  ...props }) => {
  return (
    <Aux>
      <Row>
        <Col>
          <Tabs defaultActiveKey="informations">
            <Tab eventKey="informations" title="Informations">
              <h4 className="text-uppercase mb-4">Informations Générale</h4>
              <table className="table table-bordered table-striped">
                <tbody>
                  <tr>
                    <td>ID passerelle</td>
                    <td>{information.id}</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>{information.name}</td>
                  </tr>
                  <tr>
                    <td>Modulation</td>
                    <td>{information.modulation}</td>
                  </tr>
                  <tr>
                    <td>Nombre message reçu</td>
                    <td>{information.message}</td>
                  </tr>
                </tbody>
              </table>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Aux>
  );
};

export default TabsPills;
