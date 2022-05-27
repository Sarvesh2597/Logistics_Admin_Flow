// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';
import * as FeatherIcon from 'react-feather';
import StatisticsWidget from '../../components/StatisticsWidget';
//import PageTitle from '../../components/PageTitle';
const WidgetStatistics = () => {
    return (
        <React.Fragment>
            <Row className="page-title align-items-center">
                <Col lg={3}>
                    <h4 className="mb-1 mt-0">Dashboard</h4>
                </Col>
            </Row>
            <Row>
                <Col lg={3}>
                    <StatisticsWidget
                        description="Today's Total Orders"
                        title="400"
                        icon={FeatherIcon.ShoppingBag}
                        iconClass="icon-dual-primary"></StatisticsWidget>
                </Col>

                <Col lg={3}>
                    <StatisticsWidget
                        description="Orders In Progress"
                        title="200"
                        icon={FeatherIcon.ShoppingBag}
                        iconClass="icon-dual-info"></StatisticsWidget>
                </Col>

                <Col lg={3}>
                    <StatisticsWidget
                        description="Orders Delivered"
                        title="250"
                        icon={FeatherIcon.ShoppingBag}
                        iconClass="icon-dual-success"></StatisticsWidget>
                </Col>

                <Col lg={3}>
                    <StatisticsWidget
                        description="Orders with Issues"
                        title="50"
                        icon={FeatherIcon.ShoppingBag}
                        iconClass="icon-dual-danger"></StatisticsWidget>
                </Col>
              
            </Row>
        </React.Fragment>
    );
};

export default WidgetStatistics;
