// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import * as FeatherIcon from 'react-feather';

import StatisticsWidget from '../../components/StatisticsWidget';

const MerchantStatistics = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={3}>
                    <StatisticsWidget
                        description="Today's Total Deliveries"
                        title="250"
                        icon={FeatherIcon.Truck}
                        iconClass="icon-dual-primary"
                        //   data={[0, 150]}
                        // trend={{
                        //     textClass: 'text-success',
                        //     icon: 'uil uil-arrow-down',
                        //     value: '10.21%'
                        // }}
                    ></StatisticsWidget>
                </Col>

                <Col md={6} xl={3}>
                    <StatisticsWidget
                        description="Orders In-Progress"
                        title="120"
                        icon={FeatherIcon.Loader}
                        iconClass="icon-dual-info"
                        //    colors={['#f77e53']}
                        //     data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                        //     trend={{
                        //         textClass: 'text-danger',
                        //         icon: 'uil uil-arrow-down',
                        //         value: '5.05%'
                        //     }}
                    ></StatisticsWidget>
                </Col>

                <Col md={6} xl={3}>
                    <StatisticsWidget
                        description="Orders Delivered"
                        title="80"
                        icon={FeatherIcon.CheckSquare}
                        iconClass="icon-dual-success"
                        //   colors={['#43d39e']}
                        // data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                        // trend={{
                        //     textClass: 'text-success',
                        //     icon: 'uil uil-arrow-up',
                        //     value: '25.16%'
                        // }}
                    ></StatisticsWidget>
                </Col>

                <Col md={6} xl={3}>
                    <StatisticsWidget
                        description="Orders with Issues"
                        title="50"
                        icon={FeatherIcon.AlertCircle}
                        iconClass="icon-dual-danger"
                        // colors={['#ffbe0b']}
                        // data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                        // trend={{
                        //     textClass: 'text-danger',
                        //     icon: 'uil uil-arrow-down',
                        //     value: '5.05%'
                        // }}
                    ></StatisticsWidget>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default MerchantStatistics;
