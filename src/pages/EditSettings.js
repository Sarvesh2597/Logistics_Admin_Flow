import React, { useState } from 'react';
import { Row, Col, Card, CardBody, CustomInput, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

const EditSettings = () => {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
    return (
        <div>
            {' '}
            <Row className="page-title align-items-center">
                <Col sm={4} xl={6}>
                    <h4 className="mb-1 mt-0">Edit Settings :</h4>
                </Col>
            </Row>
            <Card>
                <CardBody>
                    {/* <h3 className="header-title mt-0 mb-4">Create Order</h3> */}
                    {/* <p className="text-muted">
                    Most common form control, text-based input fields. Includes support for all HTML5 types:{' '}
                    <code>text</code>, <code>password</code>, <code>datetime</code>, <code>datetime-local</code>,{' '}
                    <code>date</code>, <code>month</code>, <code>time</code>, <code>week</code>, <code>number</code>,{' '}
                    <code>email</code>, <code>url</code>, <code>search</code>, <code>tel</code>, and <code>color</code>.
                </p>  */}

                    <Row>
                        <Col lg={6}>
                            <Form>
                                <FormGroup>
                                    <Label for="text">First Name :</Label>
                                    <Input type="text" name="text" id="text" />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="text">Last Name :</Label>
                                    <Input type="text" name="text" id="text" />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="detailAddress">Email Address :</Label>
                                    <Input type="text" id="detailAddress" rows="3" />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="customerContact">Phone Number :</Label>
                                    <Input type="number" id="customerContact" />
                                </FormGroup>
                            </Form>
                        </Col>

                        <Col lg={6}>
                            <Form>
                                
                                <FormGroup>
                                    <Label for="comment">Password :</Label>
                                    <div className="pass-wrapper">
                                  <Input id="password" type={passwordShown ? "text" : "password"} value="sarvesh@2597"/>
                                  <i className="uil uil-eye pass-visible" onClick={togglePasswordVisiblity}></i>
                                  </div>
                                   
                                </FormGroup>
                                <FormGroup>
                                    <Label for="comment">Company Name :</Label>
                                    <Input type="text" id="company name" rows="4" />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="exampleSelectMulti">Buisness Type :</Label>
                                    <Input type="select" name="select" id="exampleSelectMulti">
                                        <option>Pharmacy</option>
                                        <option>Clothing</option>
                                        <option>Electronics</option>
                                    </Input>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                    <div className="submit mt-4 mb-3">
                        <Button color="primary" type="submit">
                            Update
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default EditSettings;
