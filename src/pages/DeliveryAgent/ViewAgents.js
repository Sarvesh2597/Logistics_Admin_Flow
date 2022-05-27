import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
//import { Users, Eye, FileText } from 'react-feather';
import { Link } from 'react-router-dom';
import { Loader } from 'react-feather';
//import avatarImg2 from '../../../assets/images/covers/2.jpg';
import avatarImg7 from '../../../src/assets/images/users/avatar-7.jpg';

import { BASE_URL } from '../../constants';
import { Redirect } from 'react-router-dom';
import AgentModal from './AddAgentModal';

class ViewAgent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            items: [],
            logout: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    addAgent(values) {
        var bodyFormData = new FormData();
        for (var key in values) {
            bodyFormData.append(key, values[key]);
        }
        bodyFormData.append('role', 3);
        const users = JSON.parse(localStorage.getItem('user'));
        fetch(BASE_URL + '/users/admin-can/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data;boundary=<calculated when request is sent>',
                Authorization: `Bearer ${users.access}`,
            },
            body: bodyFormData,
        })
            .then((res) => {
                if (res.status === 403) {
                    localStorage.clear();
                    this.setState({ logout: true });
                }
                return res.json();
            })
            .then((data) => {
                this.setState({
                    isLoaded: true,
                    items: [],
                    logout: false,
                });
                this.toggle();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    listAgent() {
        const users = JSON.parse(localStorage.getItem('user'));
        fetch(BASE_URL + 'users/admin-can/list/?role=2', {
            headers: {
                Authorization: `Bearer ${users.access}`,
            },
        })
            .then((res) => {
                if (res.status === 403 || res.code) {
                    localStorage.clear();
                    this.setState({ logout: true });
                } else {
                    return res.json();
                }
            })
            .then((response) => {
                if (response.status === 401 || response.code) {
                    localStorage.clear();
                    this.setState({ logout: true });
                } else if (response.results) {
                    this.setState({
                        isLoaded: true,
                        items: response.results,
                        logout: false,
                    });
                }
            }).catch(err => {
                console.error(err);
            });
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    };

    submitClick() {
        this.addAgent();
    }
    handleValidSubmit = (event, values) => {
        this.addAgent(event);
    };

    render() {
        var { isLoaded, items } = this.state;

        if (this.state.logout) {
            return <Redirect to="/account/logout" />;
        }

        if (isLoaded) {
            return (
                <div className="text-center mt-3">
                    ;
                    <a href="/" className="btn btn-sm border btn-white">
                        <Loader className="icon-dual icon-dual-primary icon-sm mr-2"></Loader>
                        Loading
                    </a>
                </div>
            );
        } else {
            return (
                <React.Fragment>
                    <Row className="page-title align-items-center">
                        <Col lg={10}>
                            <h4 className="mb-1 mt-0">View Agents</h4>
                        </Col>
                        <Col lg={2}>
                            <div className="button-list mt-2 ml-5">
                                <Button color="primary" onClick={this.toggle}>
                                    Add Agent
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                {this.state.items &&
                                    this.state.items.map((item) => (
                                        <Col lg={3}>
                                            <Card className="mt-3">
                                                <CardBody className="pb-0">
                                                    <div className="text-center mt-3">
                                                        <img
                                                            src={avatarImg7}
                                                            alt=""
                                                            className="avatar-xl rounded-circle"
                                                        />
                                                        <h5 className="mt-2 mb-0">{item.first_name}</h5>
                                                        <p className="mb-2 mt-2">
                                                            <label className="badge badge-soft-success mr-1">
                                                                {item.email}
                                                            </label>
                                                        </p>

                                                        <Link to="/AgentDetails">
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary btn-sm mr-1 mb-4">
                                                                Details
                                                            </button>
                                                        </Link>

                                                        {/* <div className="mt-4 pt-3 border-top text-left">
                                            <p className="text-muted mb-2">
                                                Hi I'm Shreyu. I am user experience and user interface designer. I have been
                                                working on UI & UX since last 10 years.
                                            </p>
        
                                            <p className="mb-2">
                                                <label className="badge badge-soft-success mr-1">UI & UX</label>
                                                <label className="badge badge-soft-success">Frontend Development</label>
                                            </p>
                                        </div> */}
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    ))}
                            </Row>
                            {this.state.modal ? (
                                <AgentModal
                                    modal={this.state.modal}
                                    toggle={this.toggle}
                                    size={this.state.size}
                                    handleValidSubmit={this.handleValidSubmit.bind(this)}
                                />
                            ) : null}
                        </Col>
                    </Row>
                </React.Fragment>
            );
        }
    }
}

export default ViewAgent;
