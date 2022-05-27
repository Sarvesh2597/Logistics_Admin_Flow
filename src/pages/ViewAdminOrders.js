import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classNames from 'classnames';

import TodayOrders from './other/Profile/TodayOrders';
import AllOrders from './other/Profile/AllOrders';

class ViewAdminOrders extends Component {
    constructor(props) {
        super(props);

        this.toggleTab = this.toggleTab.bind(this);
        this.state = {
            activeTab: '6',
        };
    }

    /**
     * Toggles tab
     * @param {*} tab
     */
    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <Row className="page-title align-items-center">
                    <Col sm={4} xl={6}>
                        <h4 className="mb-1 mt-0">Orders</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="mt-2">
                            <CardBody>
                                <Nav className="nav nav-pills navtab-bg nav-justified">
                                    <NavItem>
                                        <NavLink
                                            href="#"
                                            className={classNames({ active: this.state.activeTab === '6' })}
                                            onClick={() => {
                                                this.toggleTab('6');
                                            }}>
                                            Today's Orders
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="#"
                                            className={classNames({ active: this.state.activeTab === '7' })}
                                            onClick={() => {
                                                this.toggleTab('7');
                                            }}>
                                            All Orders
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="6">
                                        <TodayOrders />
                                    </TabPane>
                                    <TabPane tabId="7">
                                        <AllOrders />
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default ViewAdminOrders;
