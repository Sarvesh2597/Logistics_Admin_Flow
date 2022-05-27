import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classNames from 'classnames';
//import PageTitle from '../../../components/PageTitle';

// import UserBox from '../other/Profile/UserBox';
// import Activities from '../other/Profile/Activities';
// import Messages from '../other/Profile/Messages';
import AgentInfo from './AgentInfo';
import Projects from '../pages/other/Profile/Projects';
import Tasks from '../pages/other/Profile/Tasks';
import { Upload } from 'react-feather';
import Files from '../pages/other/Profile/Files';

class AgentDetails extends Component {
    constructor(props) {
        super(props);

        this.toggleTab = this.toggleTab.bind(this);
        this.state = {
            activeTab: '3',
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
                        <h4 className="mb-1 mt-0">Agent Details</h4>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        {/* User information */}
                        <AgentInfo />
                    </Col>

                    <Col lg={9}>
                        <Card>
                            <CardBody>
                                <Nav className="nav nav-pills navtab-bg nav-justified">
                                    <NavItem>
                                        <NavLink
                                            href="#"
                                            className={classNames({ active: this.state.activeTab === '3' })}
                                            onClick={() => {
                                                this.toggleTab('3');
                                            }}>
                                            Work
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="#"
                                            className={classNames({ active: this.state.activeTab === '5' })}
                                            onClick={() => {
                                                this.toggleTab('5');
                                            }}>
                                            Payments
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="#"
                                            className={classNames({ active: this.state.activeTab === '4' })}
                                            onClick={() => {
                                                this.toggleTab('4');
                                            }}>
                                            Documents
                                        </NavLink>
                                    </NavItem>
                                   
                                </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="3">
                                        <Projects />
                                    </TabPane>
                                   
                                    <TabPane tabId="4">
                                        <Files />
                                    </TabPane>
                                    <TabPane tabId="5">
                                        <Tasks />
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

export default AgentDetails;
