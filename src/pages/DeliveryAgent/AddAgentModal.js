import React from 'react';
//import { AvForm } from 'availity-reactstrap-validation';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label,
    Input,
    InputGroup,
    InputGroupAddon,
    Row,
    Col,
} from 'reactstrap';

import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Mail, User, Phone,  Watch, Truck } from 'react-feather';

const AgentModal = (props) => {
    let handleValidSubmit = (event, values) => {
        props.handleValidSubmit(values);
    };
    return (
        <Modal isOpen={true} className="authentication-form" size={props.size}>
            <ModalHeader toggle={props.toggle}>Add new Agent</ModalHeader>
            <AvForm onValidSubmit={handleValidSubmit}>
                <ModalBody>
                    <AvGroup className="">
                        <Label for="fullname">First Name</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <span className="input-group-text">
                                    <User className="icon-dual" />
                                </span>
                            </InputGroupAddon>
                            <AvInput type="text" name="first_name" id="firstname" placeholder="First name" required />
                        </InputGroup>
                        <AvFeedback>This field is invalid</AvFeedback>
                    </AvGroup>
                    <AvGroup className="">
                        <Label for="fullname">Last Name</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <span className="input-group-text">
                                    <User className="icon-dual" />
                                </span>
                            </InputGroupAddon>
                            <AvInput type="text" name="last" id="lastname" placeholder="Last name" required />
                        </InputGroup>
                        <AvFeedback>This field is invalid</AvFeedback>
                    </AvGroup>
                    <AvGroup className="">
                        <Label for="fullname">Email</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <span className="input-group-text">
                                    <Mail className="icon-dual" />
                                </span>
                            </InputGroupAddon>
                            <AvInput type="email" name="email" id="email" placeholder="xyz@xy.com" required />
                        </InputGroup>
                        <AvFeedback>This field is invalid</AvFeedback>
                    </AvGroup>
                    <AvGroup className="">
                        <Label for="fullname">Vehicle Model</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <span className="input-group-text">
                                    <Truck className="icon-dual" />
                                </span>
                            </InputGroupAddon>
                            <AvInput type="text" name="model" id="model" placeholder="Model name" required />
                        </InputGroup>
                        <AvFeedback>This field is invalid</AvFeedback>
                    </AvGroup>
                    <AvGroup className="">
                        <Label for="fullname">Year Of Make</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <span className="input-group-text">
                                    <Watch className="icon-dual" />
                                </span>
                            </InputGroupAddon>
                            <AvInput type="text" name="year_of_make" id="year_of_make" placeholder="2015" required />
                        </InputGroup>
                        <AvFeedback>This field is invalid</AvFeedback>
                    </AvGroup>
                    <AvGroup className="">
                        <Label for="fullname">Phone Number</Label>
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
                                placeholder="9850627855"
                                required
                            />
                        </InputGroup>
                        <AvFeedback>This field is invalid</AvFeedback>
                    </AvGroup>
                    <Row>
                        <Col lg={6}>
                            <AvGroup className="">
                                <Label for="fullname">Driver's License Photo</Label>
                                <InputGroup>
                                    <AvInput type="file" name="license" id="license" required />
                                </InputGroup>
                                <AvFeedback>This field is invalid</AvFeedback>
                            </AvGroup>
                        </Col>
                        <Col lg={6}>
                            <AvGroup className="">
                                <Label for="fullname">Vehicle Photo</Label>
                                <InputGroup>
                                    <AvInput type="file" name="vehicle_photo" id="vehicle_photo" required />
                                </InputGroup>
                                <AvFeedback>This field is invalid</AvFeedback>
                            </AvGroup>
                        </Col>
                    </Row>
                </ModalBody>
            </AvForm>
            <ModalFooter>
                <Button color="secondary" onClick={props.toggle}>
                    Cancel
                </Button>
                <Button color="primary" className="ml-1">
                    Add
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default AgentModal;
