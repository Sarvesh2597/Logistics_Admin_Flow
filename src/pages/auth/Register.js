import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Label,
    FormGroup,
    Button,
    Alert,
    InputGroup,
    Input,
    InputGroupAddon,
    CustomInput,
} from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Mail, Lock, User, Phone, Briefcase, Edit } from 'react-feather';

import { registerUser } from '../../redux/actions';
import { isUserAuthenticated } from '../../helpers/authUtils';
import Loader from '../../components/Loader';

import { BASE_URL } from '../../constants';

class Register extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            gotoConfirm: false,
            businesses: [{value: '', label: 'Select businesses'}],
            selectedBusiness: null,
            logout: false,
            errorMessage: null
        };
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
        document.body.classList.add('authentication-bg');
        this.dropdownAPI();
    }

    componentWillUnmount() {
        this._isMounted = false;
        document.body.classList.remove('authentication-bg');
    }

    /**
     * Handles the submit
     */
    handleValidSubmit = (event, values) => {
        this.signupAPI(values);
    };

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
                })
            }).catch((error) => {
                    console.log('Error:', error);
            });
    };

    signupAPI({ first_name, last_name, email, password, phone_number, company_name }) {
        let payload = {first_name, last_name, email, password, phone_number, company_name}
        payload = {
           ...payload,
           businesses: this.state.selectedBusiness
        };
        fetch(BASE_URL + '/users/sign-up/merchant/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                // this.props.registerUser(payload);
                if(data.success) {
                    this.setState({
                        gotoConfirm: true,
                    });
                } else if (data.error){
                    this.setState({errorMessage: data.error});
                }
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }

    /**
     * Redirect to root
     */
    renderRedirectToRoot = () => {
        const isAuthTokenValid = isUserAuthenticated();
        if (isAuthTokenValid) {
            return <Redirect to="/" />;
        }
    };

    selectBusineses = (event) => {
        this.setState({selectedBusiness: parseInt(event.target.value, 10)})
    }

    /**
     * Redirect to confirm
     */
    renderRedirectToConfirm = () => {
        return <Redirect to="/account/confirm" />;
    };

    render() {
        const isAuthTokenValid = isUserAuthenticated();
        return (
            <React.Fragment>
                {this.renderRedirectToRoot()}

                {this.state.gotoConfirm && this.renderRedirectToConfirm()}

                {(this._isMounted || !isAuthTokenValid) && (
                    <div className="account-pages mt-5 mb-5">
                        <Container>
                            <Row className="justify-content-center">
                                <Col xl={12}>
                                    <Card className="">
                                        <CardBody className="p-0">
                                            <Row>
                                                <Col md={6} className="p-5 position-relative">
                                                    {/* preloader */}
                                                    {this.props.loading && <Loader />}

                                                    <div className="mx-auto mb-5">
                                                        <a href="/">
                                                            {/* <img src={logo} alt="" height="24" /> */}
                                                            <h3 className="d-inline align-middle ml-1 text-logo">
                                                                Drop-Off
                                                            </h3>
                                                        </a>
                                                    </div>

                                                    <h6 className="h5 mb-0 mt-4">Welcome back!</h6>
                                                    <p className="text-muted mt-1 mb-4">
                                                        Enter your email address and password to access Merchant panel.
                                                    </p>

                                                    {this.state.errorMessage && (
                                                        <Alert color="danger" isOpen={this.state.errorMessage}>
                                                            <div>{this.state.errorMessage}</div>
                                                        </Alert>
                                                    )}

                                                    <AvForm
                                                        onValidSubmit={this.handleValidSubmit}
                                                        className="authentication-form">
                                                        <Row>
                                                            <Col lg={6}>
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

                                                                <AvGroup className="mb-3">
                                                                    <Label for="password">Password</Label>
                                                                    <InputGroup>
                                                                        <InputGroupAddon addonType="prepend">
                                                                            <span className="input-group-text">
                                                                                <Lock className="icon-dual" />
                                                                            </span>
                                                                        </InputGroupAddon>

                                                                        <AvInput
                                                                            type="password"
                                                                            name="password"
                                                                            id="password"
                                                                            placeholder="Enter password"
                                                                            required
                                                                        />
                                                                    </InputGroup>
                                                                    <AvFeedback>This field is invalid</AvFeedback>
                                                                </AvGroup>
                                                            </Col>
                                                            <Col lg={6}>
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
                                                                            maxlength = "10"
                                                                            placeholder="88888-88888"
                                                                            required
                                                                        />
                                                                    </InputGroup>

                                                                    <AvFeedback>This field is invalid</AvFeedback>
                                                                </AvGroup>

                                                                <AvGroup className="mb-3">
                                                                    <Label for="password">Company Name</Label>
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
                                                                            placeholder="Enter Company Name"
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
                                                            </Col>
                                                        </Row>
                                                        <AvGroup check className="mb-4">
                                                            <CustomInput
                                                                type="checkbox"
                                                                id="check"
                                                                defaultChecked="true"
                                                                className=" mt-2 mb-2 text-center"
                                                                label="I accept Terms and Conditions"
                                                            />
                                                        </AvGroup>
                                                        <FormGroup className="form-group mb-0 text-center">
                                                            <Button color="primary" className="btn-block">
                                                                Sign Up
                                                            </Button>
                                                        </FormGroup>
                                                    </AvForm>
                                                </Col>

                                                <Col md={6} className="d-none d-md-inline-block">
                                                    <div className="auth-page-sidebar">
                                                        <div className="overlay"></div>
                                                        <div className="auth-user-testimonial">
                                                            <p className="font-size-24 font-weight-bold text-white mb-1">
                                                                I simply love it!
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>

                            <Row className="mt-1">
                                <Col className="col-12 text-center">
                                    <p className="text-muted">
                                        Already have an account?{' '}
                                        <Link to="/account/login" className="text-primary font-weight-bold ml-1">
                                            Sign In
                                        </Link>
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    const { user, loading, error } = state.Auth;
    return { user, loading, error };
};

export default connect(mapStateToProps, { registerUser })(Register);
