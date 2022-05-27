import React, { useState } from 'react';
import { Row, Col, Card, CardBody, CustomInput, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

const EditOrder = () => {
    const [sameDay, setsameDay] = useState(false);
    const [express, setexpress] = useState(false);

    const expressChanged = (e) => {
        setexpress(e.currentTarget.value);
        setsameDay(!e.currentTarget.value);
    };

    const sameDayChanged = (e) => {
        setexpress(!e.currentTarget.value);
        setsameDay(e.currentTarget.value);
    };

    return (
        <div>
            {' '}
            <Row className="page-title align-items-center">
                <Col sm={4} xl={6}>
                    <h4 className="mb-1 mt-0">Edit Order</h4>
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
                                    <Label for="text">Customer Name :</Label>
                                    <Input type="text" name="text" id="text" />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="detailAddress">Detail Address :</Label>
                                    <Input type="textarea" id="detailAddress" rows="3" />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="customerContact">Customer Contact Info :</Label>
                                    <Input type="number" id="customerContact" />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="comment">Comment / Delivery Instructions :</Label>
                                    <Input type="textarea" id="comment" rows="4" />
                                </FormGroup>

                                {/* <FormGroup>
                                <Label for="text1">Read only</Label>
                                <Input type="text" name="text" id="text1" placeholder="Readonly value" readOnly />
                            </FormGroup>

                            <FormGroup>
                                <Label for="text2">Disabled</Label>
                                <Input type="text" name="text" id="text2" placeholder="Disabled" disabled />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleEmail1">Static control</Label>
                                <Input plaintext defaultValue="email@example.com" readOnly />
                            </FormGroup> */}

                                {/* <FormGroup>
                                <Label for="text3">Helping text</Label>
                                <Input type="text" name="text" id="text3" placeholder="Helping text" />
                                <FormText>
                                    A block of help text that breaks onto a new line and may extend beyond one line.
                                </FormText>
                            </FormGroup> */}
                            </Form>
                        </Col>

                        <Col lg={6}>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleSelect">Pickup Addresses :</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Bavdhan</option>
                                        <option>Karve Nagar</option>
                                        <option>Kothrud</option>
                                    </Input>
                                </FormGroup>
                                {/* <FormGroup>
                                <Label for="exampleSelectMulti">Select Multiple</Label>
                                <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup> */}

                                <FormGroup>
                                    <Label for="dropAddress">Drop Address :</Label>
                                    <Input type="text" id="dropAddress" />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="orderPrice" className="mt-3">
                                        Order Price ($) :
                                    </Label>
                                    <Input type="number" id="orderPrice" />
                                </FormGroup>

                                {/* <FormGroup>
                                <Label for="exampleDate">Date</Label>
                                <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleMonth">Month</Label>
                                <Input type="month" name="month" id="exampleMonth" placeholder="date month" />
                            </FormGroup> */}

                                <FormGroup>
                                    <Label for="exampleCheckbox" className="mt-3">
                                        Shipment Type :
                                    </Label>

                                    <div>
                                        <Row>
                                            <Col lg={2}>
                                                <CustomInput
                                                    type="radio"
                                                    onChange={sameDayChanged}
                                                    checked={sameDay}
                                                    id="exampleCustomRadio"
                                                    label="Same Day"
                                                />
                                            </Col>

                                            <CustomInput
                                                type="radio"
                                                id="exampleCustomRadio2"
                                                label="Express"
                                                checked={express}
                                                onChange={expressChanged}
                                            />
                                        </Row>
                                    </div>
                                </FormGroup>
                                {express && (
                                    <FormGroup>
                                        <Label for="exampleTime">Time</Label>
                                        <Input type="time" name="time" id="exampleTime" placeholder="date Time" />
                                    </FormGroup>
                                )}

                                {/* <FormGroup>
                                <Label for="exampleWeek">Week</Label>
                                <Input type="week" name="week" id="exampleWeek" placeholder="date week" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleNumber">Number</Label>
                                <Input
                                    type="number"
                                    name="number"
                                    id="exampleNumber"
                                    placeholder="number placeholder"
                                />
                            </FormGroup> */}

                                {/* <FormGroup>
                                <Label for="exampleColor">Color</Label>
                                <Input
                                    type="color"
                                    name="color"
                                    id="exampleColor"
                                    placeholder="color placeholder"
                                    defaultValue="#727cf5"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleRange">Range</Label>
                                <input
                                    className="custom-range"
                                    type="range"
                                    name="range"
                                    id="exampleRange"
                                    placeholder="range placeholder"
                                />
                            </FormGroup> */}
                            </Form>
                        </Col>
                    </Row>
                    <div className="submit mt-4 mb-3">
                        <Button color="primary" type="submit">
                            Save
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default EditOrder;
