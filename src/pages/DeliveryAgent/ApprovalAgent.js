// // import React from 'react';
// // import {
// //     Row,
// //     Col,
// //     UncontrolledButtonDropdown,
// //     Card,
// //     CardBody,
// //     Input,
// //     UncontrolledDropdown,
// //     DropdownMenu,
// //     DropdownItem,
// //     DropdownToggle,
// //     Table,
// // } from 'reactstrap';
// // import BootstrapTable from 'react-bootstrap-table-next';
// // //import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
// // //import paginationFactory from 'react-bootstrap-table2-paginator';
// // import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

// // //import PageTitle from '../../components/PageTitle';

// // const records = [
// //     {
// //         id: 1,
// //         username: 'Sarvesh25',
// //         address: 'Soba Sahawas C-16, Karve Nagar, Pune',
// //         emailAddress: 'Kaggle',
// //         phone: '+1 (823) 532-2427',
// //         vehicleModel: 'Activa',
// //         yearOfMake: 2016,
// //     },
// //     {
// //         id: 2,
// //         username: 'Sarvesh25',
// //         address: 'Soba Sahawas C-16, Karve Nagar, Pune',
// //         emailAddress: 'Kaggle',
// //         phone: '+1 (823) 532-2427',
// //         vehicleModel: 'Activa',
// //         yearOfMake: 2016,
// //     },
// //     {
// //         id: 3,
// //         username: 'Sarvesh25',
// //         address: 'Soba Sahawas C-16, Karve Nagar, Pune',
// //         emailAddress: 'Kaggle',
// //         phone: '+1 (823) 532-2427',
// //         vehicleModel: 'Activa',
// //         yearOfMake: 2016,
// //     },
// // ];
// // const columns = [
// //     {
// //         dataField: 'id',
// //         text: 'ID',
// //         sort: true,
// //     },
// //     {
// //         dataField: 'username',
// //         text: 'Username',
// //         sort: false,
// //     },
// //     {
// //         dataField: 'emailAddress',
// //         text: 'Email Address',
// //         sort: false,
// //     },
// //     {
// //         dataField: 'address',
// //         text: 'Address',
// //         sort: false,
// //     },
// //     {
// //         dataField: 'phone',
// //         text: 'Phone Number',
// //         sort: false,
// //     },
// //     {
// //         dataField: 'vehicleModel',
// //         text: 'Vehicle Model',
// //         sort: false,
// //     },
// //     {
// //         dataField: 'yearOfMake',
// //         text: 'Year Of Make',
// //         sort: false,
// //     },
// //     {
// //         dataField: 'vehiclePhoto',
// //         text: 'Vehicle Photo',
// //         sort: false,
// //     },
// //     {
// //         dataField: 'licencePhoto',
// //         text: 'Licence Photo',
// //         sort: false,
// //     },
// // ];

// // const ApprovalAgent = () => {
// //     const selectRow = {
// //         mode: 'checkbox',
// //         clickToSelect: true,
// //         style: { backgroundColor: '#727cf5', color: '#fff' },
// //     };

// //     return (
// //         <React.Fragment>
// //             <Row className="page-title align-items-center">
// //                 <Col sm={4} xl={6}>
// //                     <h4 className="mb-1 mt-0">Approval List</h4>
// //                 </Col>
// //             </Row>
// //             <Card className="mt-3">
// //                 <CardBody>
// //                     <UncontrolledButtonDropdown className="d-inline-block ml-1 mb-4">
// //                         <DropdownToggle tag="button" className="btn btn-primary dropdown-toggle">
// //                             <i className="uil uil-sort-amount-down"></i>
// //                         </DropdownToggle>
// //                         <DropdownMenu left>
// //                             <DropdownItem>Approve</DropdownItem>
// //                             <DropdownItem>Reject</DropdownItem>
// //                         </DropdownMenu>
// //                     </UncontrolledButtonDropdown>

// //                     <BootstrapTable
// //                         bootstrap4
// //                         keyField="id"
// //                         bordered={false}
// //                         data={records}
// //                         columns={columns}
// //                         //   pagination={paginationFactory({ sizePerPage: 5, sizePerPageRenderer: sizePerPageRenderer, sizePerPageList: [{ text: '5', value: 5, }, { text: '10', value: 10 }, { text: '25', value: 25 }, { text: 'All', value: records.length }] })}
// //                         selectRow={selectRow}
// //                         wrapperClasses="table-responsive"
// //                     />
// //                 </CardBody>
// //             </Card>
// //         </React.Fragment>
// //     );
// // };

// // export default ApprovalAgent;

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

const ApprovalAgent = () => {
    // const selectRow = {
    //     mode: 'checkbox',
    //     clickToSelect: true,
    //     style: { backgroundColor: '#727cf5', color: '#fff' },
    // };
    const data = [
        {
            id: 1,
            selectid: 1,
            username: 'Sarvesh25',
            address: 'Soba Sahawas C-16, Karve Nagar, Pune',
            emailAddress: 'sarvesh@gmail.com',
            phone: '+1 (823) 532-2427',
            vehicleModel: 'Activa',
            yearOfMake: 2016,
        },
        {
            id: 2,
            selectid:2,
            username: 'Sarvesh25',
            address: 'Soba Sahawas C-16, Karve Nagar, Pune',
            emailAddress: 'sarvesh@gmail.com',
            phone: '+1 (823) 532-2427',
            vehicleModel: 'Activa',
            yearOfMake: 2016,
        },
        {
            id: 3,
            selectid:3,
            username: 'Sarvesh25',
            address: 'Soba Sahawas C-16, Karve Nagar, Pune',
            emailAddress: 'sarvesh@gmail.com',
            phone: '+1 (823) 532-2427',
            vehicleModel: 'Activa',
            yearOfMake: 2016,
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
                                <th scope="col">ID</th>
                                <th scope="col">Username</th>
                                <th scope="col">Address</th>
                                <th scope="col">Email Address</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Vehicle Model</th>
                                <th scope="col">Year Of Make</th>
                                <th scope="col">Vehicle Photo</th>
                                <th scope="col">Licence Photo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => {
                                return (
                                    <tr>
                                        <td>
                                            <div>
                                                <CustomInput type="checkbox" id={item.selectid} />
                                            </div>
                                        </td>
                                <td>{item.id}</td>
                                        <td>{item.username}</td>
                                        <td className="drop_address">{item.address}</td>
                                        <td>{item.emailAddress}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.vehicleModel}</td>
                                        <td>{item.yearOfMake}</td>
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

export default ApprovalAgent;

// import React from 'react';
// import {
//     Row,
//     Col,
//     UncontrolledButtonDropdown,
//     Card,
//     CardBody,
//     Input,
//     UncontrolledDropdown,
//     DropdownMenu,
//     DropdownItem,
//     DropdownToggle,
// } from 'reactstrap';
// import BootstrapTable from 'react-bootstrap-table-next';
// //import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
// //import paginationFactory from 'react-bootstrap-table2-paginator';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

// //import PageTitle from '../../components/PageTitle';

// const records = [
//     {
//         id: 1,
//         username: 'Sarvesh25',
//         address: 'Soba Sahawas C-16, Karve Nagar, Pune',
//         emailAddress: 'sarvesh@gmail.com',
//         phone: '+1 (823) 532-2427',
//         vehicleModel: 'Activa',
//         yearOfMake: 2016,
//     },
//     {
//         id: 2,
//         username: 'Sarvesh25',
//         address: 'Soba Sahawas C-16, Karve Nagar, Pune',
//         emailAddress: 'sarvesh@gmail.com',
//         phone: '+1 (823) 532-2427',
//         vehicleModel: 'Activa',
//         yearOfMake: 2016,
//     },
//     {
//         id: 3,
//         username: 'Sarvesh25',
//         address: 'Soba Sahawas C-16, Karve Nagar, Pune',
//         emailAddress: 'sarvesh@gmail.com',
//         phone: '+1 (823) 532-2427',
//         vehicleModel: 'Activa',
//         yearOfMake: 2016,
//     },
// ];

// const columns = [
//     {
//         dataField: 'id',
//         text: 'ID',
//         sort: true,
//     },
//     {
//         dataField: 'username',
//         text: 'Username',
//         sort: false,
//     },
//     {
//         dataField: 'address',
//         text: 'Address',
//         sort: false,
//         classes: 'id-custom-cell',
//     },

//     {
//         dataField: 'emailAddress',
//         text: 'Email Address',
//         sort: false,
//         classes: 'id-custom-cell',
//     },
//     {
//         dataField: 'phone',
//         text: 'Phone Number',
//         sort: false,
//     },
//     {
//         dataField: 'vehicleModel',
//         text: 'Vehicle Model',
//         sort: false,
//     },
//     {
//         dataField: 'yearOfMake',
//         text: 'Year Of Make',
//         sort: false,
//     },
//     {
//         dataField: 'vehiclePhoto',
//         text: 'Vehicle Photo',
//         sort: false,
//     },
//     {
//         dataField: 'licencePhoto',
//         text: 'Licence Photo',
//         sort: false,
//     },
// ];

// const ApprovalAgent = () => {
//     const selectRow = {
//         mode: 'checkbox',
//         clickToSelect: true,
//         style: { backgroundColor: '#727cf5', color: '#fff' },
//     };

//     return (
//         <React.Fragment>
//             <Row className="page-title align-items-center">
//                 <Col sm={4} xl={6}>
//                     <h4 className="mb-1 mt-0">Approval List</h4>
//                 </Col>
//             </Row>

//             <Card className="mt-3">
//                 <CardBody>
//                     <UncontrolledButtonDropdown className="d-inline-block ml-1 mb-4">
//                         <DropdownToggle tag="button" className="btn btn-primary dropdown-toggle">
//                             <i className="uil uil-sort-amount-down"></i>
//                         </DropdownToggle>
//                         <DropdownMenu left>
//                             <DropdownItem>Approve</DropdownItem>
//                             <DropdownItem>Reject</DropdownItem>
//                         </DropdownMenu>
//                     </UncontrolledButtonDropdown>

//                     <BootstrapTable
//                         bootstrap4
//                         keyField="id"
//                         bordered={false}
//                         data={records}
//                         columns={columns}
//                         // rowClasses="drop_address"
//                         //   pagination={paginationFactory({ sizePerPage: 5, sizePerPageRenderer: sizePerPageRenderer, sizePerPageList: [{ text: '5', value: 5, }, { text: '10', value: 10 }, { text: '25', value: 25 }, { text: 'All', value: records.length }] })}
//                         selectRow={selectRow}
//                         wrapperClasses="table-responsive"
//                     />
//                 </CardBody>
//             </Card>
//         </React.Fragment>
//     );
// };

// export default ApprovalAgent;
