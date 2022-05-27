import React, { Component } from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    Button,
    Media,
} from 'reactstrap';
//import avatarImg7 from '../../../src/assets/images/users/avatar-7.jpg';
import { Redirect } from 'react-router-dom';
import { Loader } from 'react-feather';
import { BASE_URL } from '../../constants';
import AdminModal from './AddAdminModal';

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            items: [],
            postAdmin: {},
            logout: false,
        };

        this.toggle = this.toggle.bind(this);
        this.openModalWithSize = this.openModalWithSize.bind(this);
        this.openModalWithClass = this.openModalWithClass.bind(this);
    }

    componentDidMount() {
        this.listAdmin();
    }

    listAdmin() {
        const users = JSON.parse(localStorage.getItem('user'));
        fetch(BASE_URL + '/users/admin-can/list/?role=1', {
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

    addAdmin(values) {
        var bodyFormData = new FormData();
        for ( var key in values ) {
            bodyFormData.append(key, values[key]);
        }
        bodyFormData.append('role', 1);
        const users = JSON.parse(localStorage.getItem('user'));
        fetch(BASE_URL + '/users/admin-can/create/', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${users.access}`,
            },
            body: bodyFormData,
        }).then((res) => {
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
                this.listAdmin();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    /**
     * Show/hide the modal
     */
    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    };

    submitClick() {
        this.addAdmin();
    }

    /**
     * Opens large modal
     */
    openModalWithSize = (size) => {
        this.setState({ size: size, className: null });
        this.toggle();
    };

    /**
     * Opens modal with custom class
     */
    openModalWithClass = (className) => {
        this.setState({ className: className, size: null });
        this.toggle();
    };

    handleValidSubmit = (event, values) => {
        this.addAdmin(event);
    };

    render() {
        var { isLoaded, items } = this.state;

        if (this.state.logout) {
            return <Redirect to="/account/logout" />;
        }
        if (!isLoaded) {
            return (
                <div className="text-center mt-3">
                    <a href="/" className="btn btn-sm border btn-white">
                        <Loader className="icon-dual icon-sm icon-dual-primary mr-2"></Loader>
                        Loading
                    </a>
                </div>
            );
        } else {
            return (
                <div>
                    <Row className="page-title align-items-center">
                        <Col lg={10}>
                            <h4 className="mb-1 mt-0">Admin</h4>
                        </Col>
                        <Col lg={2}>
                        <div className="float-sm-right mt-sm-0">
                                <div className="task-search d-inline-block mb-3 mb-sm-0 mt-2 mr-sm-3">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control search-input"
                                            placeholder="Search..."
                                        />
                                        <span className="uil uil-search icon-search"></span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                    <Col>
                            <div className="button-list mb-4">
                                <Button color="primary" onClick={this.toggle}>
                                    Add Admin
                                </Button>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Row>
                                {this.state.items && this.state.items.map((item) => (
                                    <Col lg={3} key={item.email}>
                                        <Card>
                                            <CardBody>
                                                <Media>
                                                    <Media body>
                                                        <div className="text-center mt-3">
                                                            <h5 className="mt-2 mb-0">{item.first_name}</h5>
                                                            <h6 className="text-muted font-weight-normal mt-2 mb-4">
                                                                {item.email}
                                                            </h6>

                                                            <button
                                                                type="button"
                                                                className="btn btn-danger mr-3 btn-md mb-3">
                                                                Block
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary btn-md mb-3"
                                                                onClick={this.toggle}>
                                                                Edit
                                                            </button>
                                                        </div>
                                                    </Media>
                                                </Media>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                            {this.state.modal ? 
                                <AdminModal modal={this.state.modal}
                                toggle={this.toggle}
                                size={this.state.size}
                                handleValidSubmit={this.handleValidSubmit.bind(this)}/>
                            : null} 
                    
                        </Col>
                    </Row>
                </div>
            );
        }
    }
}

export default Admin;
