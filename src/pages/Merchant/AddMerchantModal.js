import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label,
    Input,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';

import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Mail, User, Phone, Briefcase, Edit } from 'react-feather';
import { BASE_URL } from '../../constants';

class MerchantModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logout: false,
            businesses: [{ value: '', label: 'Select businesses' }],
            selectedBusiness: null,
        };
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
    }

    componentDidMount() {
        this.dropdownAPI();
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
            businesses: this.state.selectedBusiness
        }
        this.props.handleValidSubmit(values);
    };

    selectBusineses = (event) => {
        this.setState({ selectedBusiness: parseInt(event.target.value, 10) });
    };

    render() {
        return (
            <Modal isOpen={true} className="authentication-form" size={this.props.size}>
                <ModalHeader toggle={this.props.toggle}>Add new Merchant</ModalHeader>
                <AvForm onValidSubmit={this.handleValidSubmit}>
                    <ModalBody>
                        <AvGroup className="">
                        <Label for="fullname">First Name</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <span className="input-group-text">
                                    <User className="icon-dual" />
                                </span>
                            </InputGroupAddon>
                            <AvInput
                                type="text"
                                name="first_name"
                                id="firstname"
                                placeholder="First name"
                                required
                            />
                        </InputGroup>
                        <AvFeedback>This field is invalid</AvFeedback>
                    </AvGroup>
                        <AvGroup className="">
                            <Label for="lastname">Last Name</Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <span className="input-group-text">
                                        <User className="icon-dual" />
                                    </span>
                                </InputGroupAddon>
                                <AvInput
                                    type="text"
                                    name="last_name"
                                    id="lastname"
                                    placeholder="Last name"
                                    required
                                />
                            </InputGroup>
                            <AvFeedback>This field is invalid</AvFeedback>
                        </AvGroup>
                        <AvGroup className="">
                            <Label for="email">Email</Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <span className="input-group-text">
                                        <Mail className="icon-dual" />
                                    </span>
                                </InputGroupAddon>
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
                        <AvGroup className="">
                            <Label for="company_name">Company Name</Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <span className="input-group-text">
                                        <Edit className="icon-dual" />
                                    </span>
                                </InputGroupAddon>
                                <AvInput
                                    type="text"
                                    name="company_name"
                                    id="company_name"
                                    placeholder="Company Name"
                                    required
                                />
                            </InputGroup>
                            <AvFeedback>This field is invalid</AvFeedback>
                        </AvGroup>
                        <AvGroup className="">
                            <Label for="number">Phone Number</Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <span className="input-group-text">
                                        <Phone className="icon-dual" />
                                    </span>
                                </InputGroupAddon>
                                <AvInput
                                    type="number"
                                    name="phone_number"
                                    id="phone_number"
                                    maxLength = "10"
                                    placeholder="88888-88888"
                                    required
                                />
                            </InputGroup>
                            <AvFeedback>This field is invalid</AvFeedback>
                        </AvGroup>
                        <AvGroup className="mb-3">
                        <Label for="buisness_type">Bussiness Type</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <span className="input-group-text">
                                    <Briefcase className="icon-dual" />
                                </span>
                            </InputGroupAddon>
                            <Input type="select" onChange={this.selectBusineses} name="businesses" id="businesses">
                                <option value=''>Select Business</option>                      
                                {
                                    this.state.businesses.map(item => {
                                        return <option value={item.value}>{item.label} </option>
                                    })
                                }
                            </Input>
                        </InputGroup>
                        <AvFeedback>This field is invalid</AvFeedback>
                    </AvGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.props.toggle}>
                            Cancel
                        </Button>
                        <Button color="primary" className="ml-1">
                            Add
                        </Button>
                    </ModalFooter>
                </AvForm>
            </Modal>
        );
    }
};

export default MerchantModal;
