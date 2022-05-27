import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classNames from 'classnames';
//import PageTitle from '../../../components/PageTitle';
import { Watch, Truck, DollarSign, Package } from 'react-feather';
import UserBox from '../other/Profile/UserBox';
import Activities from '../other/Profile/Activities';
import Messages from '../other/Profile/Messages';
import Widget from '../../components/Widgets';
class Profile extends Component {
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
                <Row className="page-title align-items-center">
                    <Col sm={4} xl={6}>
                        <h4 className="mb-1 mt-0">Merchant Details</h4>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        {/* User information */}
                        <UserBox />
                        <Widget
                            items={[
                                { title: '400', description: 'Total Orders', icon: Package },
                                { title: '$2100', description: 'Revenue', icon: DollarSign },
                            ]}></Widget>
                    </Col>

                    <Col lg={9}>
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
                                            Today's Orders
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
                                        <Activities />
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <Messages />
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

export default Profile;
