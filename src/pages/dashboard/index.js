import React from 'react';
import { Row, Col } from 'reactstrap';
import * as FeatherIcon from 'react-feather';
import WidgetStatistics from './WidgetStatistics';
import DashboardWidgets from '../../components/dashboardWidgets';
import { DollarSign, Package } from 'react-feather';

import TodayOrders from './TodayOrders';
//import StatisticsWidget from '../../pages/uikit/Widgets/Statistics';

const Dashboard = () => {
    return (
        <React.Fragment>
            <WidgetStatistics></WidgetStatistics>
            <Row>
                <Col lg={3}>
                    <DashboardWidgets
                        items={[
                            { title: '800', description: 'Total Deliveries', icon: Package },
                            { title: '100', description: 'Total Agents', icon: FeatherIcon.User },
                            { title: '400', description: 'Total Merchants', icon: FeatherIcon.Users },
                            { title: '$200,000', description: 'Total Revenue', icon: DollarSign },
                        ]}></DashboardWidgets>
                </Col>
                <Col lg={9}>
                    <TodayOrders />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Dashboard;
