import React, { Component } from 'react';
import { Row, Col, Card, Button, Label, Input, InputGroup, InputGroupAddon, CardBody } from 'reactstrap';

import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
//import { Mail, User, Phone, Briefcase, Edit } from 'react-feather';
import { BASE_URL } from '../../constants';

class EditMerchantProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logout: false,
            businesses: [{ value: '', label: 'Select businesses' }],
            selectedBusiness: null,
        };
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
    }

    editMerchant = (values) => {
        var bodyFormData = new FormData();
        for (var key in values) {
            bodyFormData.append(key, values[key]);
        }
        bodyFormData.append('role', 3);
        const users = JSON.parse(localStorage.getItem('user'));
        fetch(BASE_URL + '/users/admin-can/update/?role=3', {
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
                // this.toggle();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    componentDidMount() {
        this.dropdownAPI();
        this.editMerchant();
    }

    dropdownAPI = () => {
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
    };

    handleValidSubmit = (event, values) => {
        values = {
            ...values,
            businesses: this.state.selectedBusiness,
        };
        this.props.handleValidSubmit(values);
    };

    selectBusineses = (event) => {
        this.setState({ selectedBusiness: parseInt(event.target.value, 10) });
    };

    render() {
        return (
            <React.Fragment>
                <Row className="page-title align-items-center">
                    <Col sm={4} xl={6}>
                        <h4 className="mb-1 mt-0">Edit Merchant Profile</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <AvForm onValidSubmit={this.handleValidSubmit}>
                                    <Row>
                                        <Col lg={6}>
                                            <AvGroup className="">
                                                <Label for="fullname">First Name</Label>
                                                <InputGroup>
                                                    {/* <InputGroupAddon addonType="prepend">
                                                        <span className="input-group-text">
                                                            <User className="icon-dual" />
                                                        </span>
                                                    </InputGroupAddon> */}
                                                    <AvInput
                                                        type="text"
                                                        name="first_name"
                                                        id="firstname"
                                                        placeholder="Salman"
                                                        required
                                                    />
                                                </InputGroup>
                                                <AvFeedback>This field is invalid</AvFeedback>
                                            </AvGroup>
                                            <AvGroup className="">
                                                <Label for="lastname">Last Name</Label>
                                                <InputGroup>
                                                    {/* <InputGroupAddon addonType="prepend">
                                                        <span className="input-group-text">
                                                            <User className="icon-dual" />
                                                        </span>
                                                    </InputGroupAddon> */}
                                                    <AvInput
                                                        type="text"
                                                        name="last_name"
                                                        id="lastname"
                                                        placeholder="Khan"
                                                        required
                                                    />
                                                </InputGroup>
                                                <AvFeedback>This field is invalid</AvFeedback>
                                            </AvGroup>
                                            <AvGroup className="">
                                                <Label for="email">Email</Label>
                                                <InputGroup>
                                                    {/* <InputGroupAddon addonType="prepend">
                                                        <span className="input-group-text">
                                                            <Mail className="icon-dual" />
                                                        </span>
                                                    </InputGroupAddon> */}
                                                    <AvInput
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        placeholder="xyz@xyz.com"
                                                        required
                                                    />
                                                </InputGroup>

                                                <AvFeedback>This field is invalid</AvFeedback>
                                            </AvGroup>
                                        </Col>

                                        <Col lg={6}>
                                            <AvGroup className="">
                                                <Label for="company_name">Company Name</Label>
                                                <InputGroup>
                                                    {/* <InputGroupAddon addonType="prepend">
                                                        <span className="input-group-text">
                                                            <Edit className="icon-dual" />
                                                        </span>
                                                    </InputGroupAddon> */}
                                                    <AvInput
                                                        type="text"
                                                        name="company_name"
                                                        id="company_name"
                                                        placeholder="XYZ"
                                                        required
                                                    />
                                                </InputGroup>
                                                <AvFeedback>This field is invalid</AvFeedback>
                                            </AvGroup>

                                            <AvGroup className="">
                                                <Label for="number">Phone Number</Label>
                                                <InputGroup>
                                                    {/* <InputGroupAddon addonType="prepend">
                                                        <span className="input-group-text">
                                                            <Phone className="icon-dual" />
                                                        </span>
                                                    </InputGroupAddon> */}
                                                    <AvInput
                                                        type="number"
                                                        name="phone_number"
                                                        id="phone_number"
                                                        maxLength="10"
                                                        placeholder="88888-88888"
                                                        required
                                                    />
                                                </InputGroup>
                                                <AvFeedback>This field is invalid</AvFeedback>
                                            </AvGroup>
                                            <AvGroup className="mb-3">
                                                <Label for="buisness_type">Bussiness Type</Label>
                                                <InputGroup>
                                                    {/* <InputGroupAddon addonType="prepend">
                                                        <span className="input-group-text">
                                                            <Briefcase className="icon-dual" />
                                                        </span>
                                                    </InputGroupAddon> */}
                                                    <Input
                                                        type="select"
                                                        onChange={this.selectBusineses}
                                                        name="businesses"
                                                        id="businesses">
                                                        <option value="">Select Business</option>
                                                        {this.state.businesses.map((item) => {
                                                            return <option value={item.value}>{item.label} </option>;
                                                        })}
                                                    </Input>
                                                </InputGroup>
                                                <AvFeedback>This field is invalid</AvFeedback>
                                            </AvGroup>
                                        </Col>
                                    </Row>
                                </AvForm>
                                <div className="submit mt-4 mb-3">
                                    <Button color="primary" type="submit">
                                        Save
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default EditMerchantProfile;
