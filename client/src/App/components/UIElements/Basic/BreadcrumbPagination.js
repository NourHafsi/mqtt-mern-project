import React, { Component } from "react";
import { Row, Col, Breadcrumb, NavLink } from "react-bootstrap";

import Aux from "../../../../hoc/_Aux";

class Breadcrumbs extends Component {
  render() {
    const {
      breadCrumbTitle,
      breadCrumbParentLink,
      breadCrumbParent,
      breadCrumbParent2,
      breadCrumbParent3,
      breadCrumbActive,
      children,
    } = this.props;
    return (
      <Aux>
        <Row>
          <div className="content-header-left col-md-9 col-12 mb-2">
            <div className="row breadcrumbs-top">
              <div className="col-12">
                {breadCrumbTitle ? (
                  <h3 className="content-header-title float-left mb-0">
                    {breadCrumbTitle}
                  </h3>
                ) : (
                  ""
                )}
                {children && (
                  <div className="breadcrumb-wrapper d-sm-block d-none col-12">
                    <Breadcrumb tag="ol">
                      <Breadcrumb.Item tag="li">
                        <NavLink to="/">
                          <i className="feather icon-home" />
                        </NavLink>
                      </Breadcrumb.Item>
                      <Breadcrumb.Item tag="li" className="text-primary">
                        {breadCrumbParentLink && (
                          <NavLink to={breadCrumbParentLink}>
                            {breadCrumbParent}
                          </NavLink>
                        )}
                        {!breadCrumbParentLink &&
                          breadCrumbParent}
                      </Breadcrumb.Item>
                      {breadCrumbParent2 ? (
                        <Breadcrumb.Item tag="li" className="text-primary">
                          {breadCrumbParent2}
                        </Breadcrumb.Item>
                      ) : (
                        ""
                      )}
                      {breadCrumbParent3 ? (
                        <Breadcrumb.Item tag="li" className="text-primary">
                          {breadCrumbParent3}
                        </Breadcrumb.Item>
                      ) : (
                        ""
                      )}
                      <Breadcrumb.Item tag="li" active>
                        {breadCrumbActive}
                      </Breadcrumb.Item>
                    </Breadcrumb>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* <Col md={6}>
                        <Card title="Breadcrumb Icon">
                            <Breadcrumb>
                                <Breadcrumb.Item href={DEMO.BLANK_LINK} active><i className="feather icon-home" /></Breadcrumb.Item>
                            </Breadcrumb>
                            <Breadcrumb>
                                <Breadcrumb.Item href={DEMO.BLANK_LINK}><i className="feather icon-home" /></Breadcrumb.Item>
                                <Breadcrumb.Item href={DEMO.BLANK_LINK} active>Library</Breadcrumb.Item>
                            </Breadcrumb>
                            <Breadcrumb>
                                <Breadcrumb.Item href={DEMO.BLANK_LINK}><i className="feather icon-home" /></Breadcrumb.Item>
                                <Breadcrumb.Item href={DEMO.BLANK_LINK}>Library</Breadcrumb.Item>
                                <Breadcrumb.Item active>Data</Breadcrumb.Item>
                            </Breadcrumb>
                        </Card>
                    </Col> */}
        </Row>
      </Aux>
    );
  }
}

export default Breadcrumbs;
