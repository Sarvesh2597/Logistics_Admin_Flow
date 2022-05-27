import React from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    Table,
    Input,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
} from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const AllOrders = () => {
    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        style: { backgroundColor: '#727cf5', color: '#fff' },
    };

    return (
        <Card>
            <CardBody className="pb-0">
                {/* <Button className="float-right" size={'sm'} color="primary">
                    <i className="uil uil-export ml-1"></i> Export
                </Button> */}

                {/* <h5 className="card-title mt-0 mb-0 header-title">Recent Orders</h5> */}

                <Table hover responsive className="mt-4">
                    <thead>
                        <tr>
                            <th scope="col">Sr No.</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Pickup Address</th>
                            <th scope="col">Drop Address</th>
                            <th scope="col">Customer Contact</th>
                            <th scope="col">Order Price</th>
                            <th scope="col">Shipment Type</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Abhishek Muley</td>
                            <td className="pick_address">
                                Hill Side Society, Flat No. 901, Wing kanchenjunga, Bavdhan, Pune
                            </td>
                            <td className="drop_address">
                                {' '}
                                Soba Sahawas Sr No. 6/4, Wing C, Flat No.16, Karve nagar, Pune 411052
                            </td>
                            <td>987546632</td>
                            <td>$80</td>
                            <td>Express</td>
                            <td>
                                <span className="badge badge-soft-warning py-1">In-Progress</span>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Sarvesh Rembhotkar</td>
                            <td className="pick_address">
                                Soba Sahawas Sr No. 6/4, Wing C, Flat No.16, Karve nagar, Pune 411052
                            </td>
                            <td className="drop_address">
                                Hill Side Society, Flat No. 901, Wing kanchenjunga, Bavdhan, Pune
                            </td>
                            <td>987546632</td>
                            <td>$200</td>
                            <td>Express</td>
                            <td>
                                <span className="badge badge-soft-success py-1">Delivered</span>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Sanket Rembhotkar</td>
                            <td className="pick_address">
                                {' '}
                                Hill Side Society, Flat No. 901, Wing kanchenjunga, Bavdhan, Pune
                            </td>
                            <td className="drop_address">
                                {' '}
                                Soba Sahawas Sr No. 6/4, Wing C, Flat No.16, Karve nagar, Pune 411052
                            </td>
                            <td>987546632</td>
                            <td>$300</td>
                            <td>Same Day</td>
                            <td>
                                <span className="badge badge-soft-danger py-1">Issue</span>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default AllOrders;
