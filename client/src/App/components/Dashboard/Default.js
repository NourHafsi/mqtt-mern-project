import React from "react";
import { Row, Col, Card, Table, Tabs, Tab } from "react-bootstrap";

import Aux from "../../../hoc/_Aux";
import DashboardCard from "../Cards/DashboardCard";
import DashboardChart from "../Cards/DashboardChart";
import CarouselComponent from "../Carousel/Carousel";
import Breadcrumbs from "../UIElements/Basic/BreadcrumbPagination";

const Dashboard = () => {
  return (
    <Aux>
      <Breadcrumbs breadCrumbTitle="Dashboard" />
      <Row>
        <Col md={12}>
          <CarouselComponent />
          <div className="d-flex justify-content-between mt-3">
            <DashboardCard
              title="Gateways"
              body="1"
              icon="fa-rss"
              color="green"
            />
            <DashboardCard
              title="Nodes"
              body="1"
              icon="fa-cog"
              color="yellow"
            />
          </div>
        </Col>
        {/* <Col md={12} className="d-flex px-0">
          <DashboardChart title="Gateways" chart={[{ key: "Gateways", y: 100, color: "#ff8a65" }]}/>
          <DashboardChart title="Nodes" chart={[{ key: "Nodes", y: 100, color: "#5DADE2" }]}/>
        </Col> */}
      </Row>
    </Aux>
  );
};

export default Dashboard;
