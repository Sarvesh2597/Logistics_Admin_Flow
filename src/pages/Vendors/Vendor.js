import React, { Component } from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Media,
} from 'reactstrap';
import Map from '../Map';

class Vendor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
        };

        this.toggle = this.toggle.bind(this);
        this.openModalWithSize = this.openModalWithSize.bind(this);
        this.openModalWithClass = this.openModalWithClass.bind(this);
    }

    /**
     * Show/hide the modal
     */
    toggle = () => {
        this.setState((prevState) => ({
            modal: !prevState.modal,
        }));
    };

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

    render() {
        return (
            <Row>
                <Col>
                    {/* <h5 className="font-size-16 mb-3">Vendors</h5> */}
                    <div className="button-list mt-4">
                        <Button color="primary" onClick={() => this.openModalWithClass('modal-dialog-centered')}>
                            Add Vendors
                        </Button>
                    </div>
                    <div className="empty"></div>
                    <Row>
                        <Col md={6} xl={3}>
                            <Card>
                                <CardBody>
                                    <Media>
                                        <Media body>
                                            <h5 className="mt-2 mb-0">Shreyu N</h5>
                                            <h6 className="text-muted font-weight-normal mt-1 ">New York, USA</h6>
                                            <h6 className="text-muted font-weight-normal mt-1 ">00000-00000</h6>
                                        </Media>
                                    </Media>

                                    <div className="row mt-2 text-center">
                                        <div className="col">
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-block mr-1"
                                                onClick={() => this.openModalWithClass('modal-dialog-centered')}>
                                                Edit
                                            </button>
                                        </div>
                                        <div className="col">
                                            <button type="button" className="btn btn-white btn-block">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={6} xl={3}>
                            <Card>
                                <CardBody>
                                    <Media>
                                        <Media body>
                                            <h5 className="mt-2 mb-0">AbC</h5>
                                            <h6 className="text-muted font-weight-normal mt-1 ">New York, USA</h6>
                                            <h6 className="text-muted font-weight-normal mt-1 ">00000-00000</h6>
                                        </Media>
                                    </Media>

                                    <div className="row mt-2 text-center">
                                        <div className="col">
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-block mr-1"
                                                onClick={() => this.openModalWithClass('modal-dialog-centered')}>
                                                Edit
                                            </button>
                                        </div>
                                        <div className="col">
                                            <button type="button" className="btn btn-white btn-block">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={6} xl={3}>
                            <Card>
                                <CardBody>
                                    <Media>
                                        <Media body>
                                            <h5 className="mt-2 mb-0">ALJNF</h5>
                                            <h6 className="text-muted font-weight-normal mt-1 ">London</h6>
                                            <h6 className="text-muted font-weight-normal mt-1 ">00000-00000</h6>
                                        </Media>
                                    </Media>

                                    <div className="row mt-2 text-center">
                                        <div className="col">
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-block mr-1"
                                                onClick={() => this.openModalWithClass('modal-dialog-centered')}>
                                                Edit
                                            </button>
                                        </div>
                                        <div className="col">
                                            <button type="button" className="btn btn-white btn-block">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={6} xl={3}>
                            <Card>
                                <CardBody>
                                    <Media>
                                        <Media body>
                                            <h5 className="mt-2 mb-0">ASBFKH</h5>
                                            <h6 className="text-muted font-weight-normal mt-1 ">Pakistan</h6>
                                            <h6 className="text-muted font-weight-normal mt-1 ">00000-00000</h6>
                                        </Media>
                                    </Media>

                                    <div className="row mt-2 text-center">
                                        <div className="col">
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-block mr-1"
                                                onClick={() => this.openModalWithClass('modal-dialog-centered')}>
                                                Edit
                                            </button>
                                        </div>
                                        <div className="col">
                                            <button type="button" className="btn btn-white btn-block">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={6} xl={3}>
                            <Card>
                                <CardBody>
                                    <Media>
                                        <Media body>
                                            <h5 className="mt-2 mb-0">SASUFLH</h5>
                                            <h6 className="text-muted font-weight-normal mt-1 ">Russia</h6>
                                            <h6 className="text-muted font-weight-normal mt-1 ">00000-00000</h6>
                                        </Media>
                                    </Media>

                                    <div className="row mt-2 text-center">
                                        <div className="col">
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-block mr-1"
                                                onClick={() => this.openModalWithClass('modal-dialog-centered')}>
                                                Edit
                                            </button>
                                        </div>
                                        <div className="col">
                                            <button type="button" className="btn btn-white btn-block">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle}
                        className={this.state.className}
                        size={this.state.size}>
                        <ModalHeader toggle={this.toggle}>Add a new Vendor</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for="text">Vendor Name</Label>
                                    <Input type="text" name="text" id="text" placeholder="" />
                                </FormGroup>

                               
                                  {/* <FormGroup>
                                        <Label for="exampleText">Detailed Address</Label>

                                        <Input type="text" name="text" id="exampleText" />
                                    </FormGroup>  */}
                                      <Map
                                    google={this.props.google}
                                    center={{ lat: 18.5204, lng: 73.8567 }}
                                    height="200px"
                                    zoom={15}>
                                 
                                </Map>
                            </Form>
                          
                        </ModalBody>
                      
                        <ModalFooter className="mt-4">
                            <Button color="primary" onClick={this.toggle}>
                                Add vendor
                            </Button>
                            <Button color="secondary" className="ml-1" onClick={this.toggle}>
                                Cancel
                            </Button>
                        </ModalFooter>
                       
                    </Modal>
                </Col>
            </Row>
        );
    }
}

export default Vendor;
