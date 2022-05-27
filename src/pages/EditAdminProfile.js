import React from 'react';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Row, Col, Card, Label, Button, InputGroup, InputGroupAddon, CardBody } from 'reactstrap';

import { Mail, User, Phone } from 'react-feather';

const EditAdminProfile = (props) => {
    let handleValidSubmit = (event, values) => {
        props.handleValidSubmit(values);
    };

    // handleValidSubmit = handleValidSubmit.bind(this);

    return (
        <React.Fragment>
            <Row className="page-title align-items-center">
                <Col sm={4} xl={6}>
                    <h4 className="mb-1 mt-0">Edit Profile</h4>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <Card className="mt-3">
                        <CardBody>
                            <AvForm onValidSubmit={handleValidSubmit}>
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
                                            placeholder="Sarvesh"
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
                                            placeholder="Rembhotkar"
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
};

export default EditAdminProfile;
