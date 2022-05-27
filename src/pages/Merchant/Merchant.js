import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Media, Button, FormGroup, Label, Input } from 'reactstrap';
import { DollarSign, Package, User, Loader } from 'react-feather';
//import { Users, Eye, FileText } from 'react-feather';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../constants';
import { Redirect } from 'react-router-dom';
import MerchantModal from './AddMerchantModal';
//import { Loader } from 'react-feather';

class Merchant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            items: [],
            postMerchant: {},
            logout: false,
            businesses: [{ value: '', label: 'Select businesses' }],
            selectedBusiness: null,
        };
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        this.dropdownAPI();
        this.listMerchent();
    }

    dropdownAPI() {
        fetch(BASE_URL + '/users/businesses/list/', {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                if (res.status === 403) {
                    localStorage.clear();
                }
                return res.json();
            })
            .then((data) => {
                this.setState({
                    businesses: data.map((element) => {
                        return { value: element.id, label: element.business_type };
                    }),
                    isLoaded: true,
                });
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }

    listMerchent() {
        const users = JSON.parse(localStorage.getItem('user'));
        fetch(BASE_URL + '/users/admin-can/list/?role=3&is_active=true', {
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

    selectBusineses = (event) => {
        this.setState({ selectedBusiness: parseInt(event.target.value, 10) });
    };

    addMerchant(values) {
        var bodyFormData = new FormData();
        for (var key in values) {
            bodyFormData.append(key, values[key]);
        }
        bodyFormData.append('role', 3);
        const users = JSON.parse(localStorage.getItem('user'));
        fetch(BASE_URL + '/users/admin-can/create/', {
            method: 'POST',
            headers: {
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
                    isLoaded: false,
                    items: [],
                    logout: false,
                });
                this.toggle();
                this.listMerchent();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    };

    submitClick() {
        this.addMerchant();
    }

    handleValidSubmit = (event, values) => {
        values = {
            ...values,
            businesses: this.state.selectedBusiness
        }
        this.props.handleValidSubmit(values);
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
                        <Loader className="icon-dual icon-dual-primary icon-sm mr-2"></Loader>
                        Loading
                    </a>
                </div>
            );
        } else {
            return (
                <div>
                    <Row className="page-title align-items-center">
                        <Col lg={8}>
                            <h4>View Merchants</h4>
                        </Col>

                        <Col lg={2}>
                            <FormGroup>
                                {/* <Label for="business_type">Select Business Type</Label> */}
                                <Input type="select" name="businesses" id="businesses" className="mt-4" onChange={this.selectBusineses}>
                                    <option value="">Select Business</option>
                                    {this.state.businesses.map((item) => {
                                        return <option value={item.value}>{item.label} </option>;
                                    })}
                                </Input>
                            </FormGroup>
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
                            <div className="button-list add-button mb-3">
                                <Button color="primary" onClick={this.toggle}>
                                    Add Merchant
                                </Button>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Row>
                                {this.state.items &&
                                    this.state.items.map((item) => (
                                        <Col lg={3} key={item.email}>
                                            <Card>
                                                <CardBody className="p-3">
                                                    <Media>
                                                        {/* <img src={avatarImg4} className="mr-3 avatar-lg rounded" alt="shreyu" /> */}
                                                        <User className="mt-2 mr-3 icon-lg icon-dual-primary"></User>
                                                        <Media body>
                                                            <h5 className="mt-1 mb-0">{item.first_name + ' ' + item.last_name}</h5>
                                                            <p className="text-muted">{item.businesses.business_type}</p>
                                                        </Media>
                                                    </Media>

                                                    <Row className="mt-4 border-top pt-2">
                                                        <Col>
                                                            <Media>
                                                                <Package className="icon-dual align-self-center mr-3"></Package>
                                                                <Media body>
                                                                    <h5 className="mt-2 pt-1 mb-0 font-size-16">300</h5>
                                                                    <h6 className="font-weight-normal mt-0">
                                                                        Total Orders
                                                                    </h6>
                                                                </Media>
                                                            </Media>
                                                        </Col>
                                                        <Col>
                                                            <Media>
                                                                <DollarSign className="icon-dual align-self-center mr-3"></DollarSign>
                                                                <Media body>
                                                                    <h5 className="mt-2 pt-1 mb-0 font-size-16">
                                                                        $4500
                                                                    </h5>
                                                                    <h6 className="font-weight-normal mt-0">Revenue</h6>
                                                                </Media>
                                                            </Media>
                                                        </Col>
                                                    </Row>

                                                    <Row className="mt-3 text-center">
                                                        <Col>
                                                            <button
                                                                type="button"
                                                                className="btn btn-white btn-sm btn-block mr-1">
                                                                Block
                                                            </button>
                                                        </Col>
                                                        <Col>
                                                            <Link to="/Details">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-primary btn-sm btn-block mr-1">
                                                                    Details
                                                                </button>
                                                            </Link>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    ))}
                            </Row>

                            {this.state.modal ? (
                                <MerchantModal
                                    modal={this.state.modal}
                                    toggle={this.toggle}
                                    size={this.state.size}
                                    handleValidSubmit={this.handleValidSubmit.bind(this)}
                                />
                            ) : null}
                        </Col>
                    </Row>
                </div>
            );
        }
    }
}

export default Merchant;
