import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import Aux from "../../../hoc/_Aux/index";
import PieBasicChart from "../Charts/Nvd3Chart/PieBasicChart";

class DashboardChart extends React.Component {
  render() {
    const { title, chart } = this.props;
    return (
      <Aux>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">{title}</Card.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <PieBasicChart datum={chart}/>
            </Card.Body>
          </Card>
        </Col>
      </Aux>
    );
  }
}

export default DashboardChart;
