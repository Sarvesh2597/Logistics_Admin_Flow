import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classNames from 'classnames';
import PageTitle from '../../components/PageTitle';

// import UserBox from './UserBox';
// import Activities from './Activities';
// import Messages from './Messages';
// import Projects from './Projects';
// import Tasks from './Tasks';
import AllOrders from './../ViewOrder/AllOrders';
import ActiveOrders from './../ViewOrder/ActiveOrders';
// import Files from './Files';

class vOrder extends Component {
    constructor(props) {
        super(props);

        this.toggleTab = this.toggleTab.bind(this);
        this.state = {
            activeTab: '1',
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
                <Row className="page-title">
                    <Col md={12}>
                        <PageTitle
                            breadCrumbItems={[
                                { label: 'Pages', path: '/pages/profile' },
                                { label: 'Profile', path: '/pages/profile', active: true },
                            ]}
                            title={'Orders'}
                        />
                    </Col>
                </Row>

                <Card>
                    <CardBody>
                        <Nav className="nav nav-pills navtab-bg nav-justified">
                            <NavItem>
                                <NavLink
                                    href="#"
                                    className={classNames({ active: this.state.activeTab === '1' })}
                                    onClick={() => {
                                        this.toggleTab('1');
                                    }}>
                                    Active Orders
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="#"
                                    className={classNames({ active: this.state.activeTab === '2' })}
                                    onClick={() => {
                                        this.toggleTab('2');
                                    }}>
                                    All Orders
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <ActiveOrders />
                            </TabPane>
                            <TabPane tabId="2">
                                <AllOrders />
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

export default vOrder;
