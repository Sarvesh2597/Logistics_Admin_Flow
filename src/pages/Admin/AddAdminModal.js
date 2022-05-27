import React from 'react';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import {
    Button,
    FormGroup,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';

import { Mail, User, Phone } from 'react-feather';


const AdminModal = (props) => {

    let handleValidSubmit = (event, values) => {
        props.handleValidSubmit(values);
    };

    // handleValidSubmit = handleValidSubmit.bind(this);

    return (
        <Modal
        isOpen={true}
        className="authentication-form"
        size={props.size}>
        <ModalHeader toggle={props.toggle}>Add a new Admin</ModalHeader>
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
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" className="ml-1" onClick={props.toggle}>
                    Cancel
                </Button>
                <FormGroup className="form-group mb-0 text-center">
                    <Button color="primary" className="btn-block">
                        Add
                    </Button>
                </FormGroup>
            </ModalFooter>
        </AvForm>
    </Modal>
    );
}

export default AdminModal;