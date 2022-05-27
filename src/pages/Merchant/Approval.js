import React from 'react';

import {
    Row,
    Col,
    UncontrolledButtonDropdown,
    Card,
    CardBody,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    CustomInput,
    Table,
} from 'reactstrap';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
//import BootstrapTable from 'react-bootstrap-table-next';

const Approval = () => {
    // const selectRow = {
    //     mode: 'checkbox',
    //     clickToSelect: true,
    //     style: { backgroundColor: '#727cf5', color: '#fff' },
    // };
    const data = [
        {
            id: 1,
            firstName: 'Sarvesh',
            lastName: 'Rembhotkar',
            companyName: 'Steinn Labs',
            email: 'sarvesh@gmail.com',
        },
        {
            id: 2,
            firstName: 'Sarvesh',
            lastName: 'Rembhotkar',
            companyName: 'Steinn Labs',
            email: 'sarvesh@gmail.com',
        },
        {
            id: 3,
            firstName: 'Sarvesh',
            lastName: 'Rembhotkar',
            companyName: 'Steinn Labs',
            email: 'sarvesh@gmail.com',
        },
    ];
    return (
        <React.Fragment>
            <Row className="page-title align-items-center">
                <Col sm={4} xl={6}>
                    <h4 className="mb-1 mt-0">Approval List</h4>
                </Col>
            </Row>
            <Card className="mt-3">
                <CardBody>
                    <UncontrolledButtonDropdown className="d-inline-block ml-1 mb-4">
                        <DropdownToggle tag="button" className="btn btn-primary dropdown-toggle">
                            <i className="uil uil-sort-amount-down"></i>
                        </DropdownToggle>
                        <DropdownMenu left>
                            <DropdownItem>Approve</DropdownItem>
                            <DropdownItem>Reject</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>

                    <Table hover responsive>
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Company Name</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => {
                                return (
                                    <tr>
                                        <td>
                                            <div>
                                                <CustomInput type="checkbox" id={item.id} />
                                            </div>
                                        </td>

                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.companyName}</td>
                                        {/* <td className="drop_address">{item.address}</td> */}
                                        <td>{item.email}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default Approval;
