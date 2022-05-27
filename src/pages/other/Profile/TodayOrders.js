import React, { useState } from 'react';
import { Card, CardBody, Table, Modal, ModalBody, Button, ModalHeader, Row, Col } from 'reactstrap';
//import paginationFactory from 'react-bootstrap-table2-paginator';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { Link } from 'react-router-dom';
const TodayOrders = () => {
    const classes = { 'In-Progress': 'warning', Delivered: 'success', Issue: 'danger' };
    const data = [
        {
            id: 1,
            customername: 'Sarvesh Rembhotkar',
            pickupaddress: '    Hill Side Society, Flat No. 901, Wing kanchenjunga, Bavdhan, Pune',
            dropaddress: '  Soba Sahawas Sr No. 6/4, Wing C, Flat No.16, Karve nagar, Pune 411052',
            customercontact: '986504432',
            orderprice: '$80',
            shipmenttype: 'Express',
            status: 'Delivered',
        },
        {
            id: 2,
            customername: 'Abhishek Muley',
            pickupaddress: 'Soba Sahawas Sr No. 6/4, Wing C, Flat No.16, Karve nagar, Pune 411052',
            dropaddress: ' Hill Side Society, Flat No. 901, Wing kanchenjunga, Bavdhan, Pune',
            customercontact: '986504432',
            orderprice: '$200',
            shipmenttype: 'Same Day',
            status: 'In-Progress',
        },
        {
            id: 3,
            customername: 'Sanket Rembhotkar',
            pickupaddress: ' Hill Side Society, Flat No. 901, Wing kanchenjunga, Bavdhan, Pune',
            dropaddress: 'Soba Sahawas Sr No. 6/4, Wing C, Flat No.16, Karve nagar, Pune 411052',
            customercontact: '986504432',
            orderprice: '$300',
            shipmenttype: 'Express',
            status: 'Delivered',
        },
        {
            id: 4,
            customername: 'Sanket Rembhotkar',
            pickupaddress: ' Soba Sahawas Sr No. 6/4, Wing C, Flat No.16, Karve nagar, Pune 411052',
            dropaddress: 'Hill Side Society, Flat No. 901, Wing kanchenjunga, Bavdhan, Pune',
            customercontact: '986504432',
            orderprice: '$300',
            shipmenttype: 'Express',
            status: 'In-Progress',
        },
        {
            id: 5,
            customername: 'Sanket Rembhotkar',
            pickupaddress: ' Hill Side Society, Flat No. 901, Wing kanchenjunga, Bavdhan, Pune',
            dropaddress: 'Soba Sahawas Sr No. 6/4, Wing C, Flat No.16, Karve nagar, Pune 411052',
            customercontact: '986504432',
            orderprice: '$300',
            shipmenttype: 'Express',
            status: 'Issue',
        },
        {
            id: 6,
            customername: 'Sarvesh Rembhotkar',
            pickupaddress: ' Soba Sahawas Sr No. 6/4, Wing C, Flat No.16, Karve nagar, Pune 411052',
            dropaddress: 'Hill Side Society, Flat No. 901, Wing kanchenjunga, Bavdhan, Pune',
            customercontact: '986504432',
            orderprice: '$300',
            shipmenttype: 'Express',
            status: 'Delivered',
        },
        {
            id: 7,
            customername: 'Abhishek Muley',
            pickupaddress: ' Hill Side Society, Flat No. 901, Wing kanchenjunga, Bavdhan, Pune',
            dropaddress: 'Soba Sahawas Sr No. 6/4, Wing C, Flat No.16, Karve nagar, Pune 411052',
            customercontact: '986504432',
            orderprice: '$300',
            shipmenttype: 'Express',
            status: 'In-Progress',
        },
        {
            id: 8,
            customername: 'Sanket Rembhotkar',
            pickupaddress: ' Hill Side Society, Flat No. 901, Wing kanchenjunga, Bavdhan, Pune',
            dropaddress: 'Soba Sahawas Sr No. 6/4, Wing C, Flat No.16, Karve nagar, Pune 411052',
            customercontact: '986504432',
            orderprice: '$300',
            shipmenttype: 'Express',
            status: 'Issue',
        },
        {
            id: 9,
            customername: 'Sanket Rembhotkar',
            pickupaddress: ' Soba Sahawas Sr No. 6/4, Wing C, Flat No.16, Karve nagar, Pune 411052',
            dropaddress: 'Hill Side Society, Flat No. 901, Wing kanchenjunga, Bavdhan, Pune',
            customercontact: '986504432',
            orderprice: '$300',
            shipmenttype: 'Same Day',
            status: 'Delivered',
        },
    ];

    return (
        <Card>
            <CardBody className="pb-0">
                <Table hover responsive className="mt-4">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Pickup Address</th>
                            <th scope="col">Drop Address</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Price</th>
                            <th scope="col">Shipment Type</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>
                                        {item.status === 'In-Progress' ? (
                                            <Link to="/editOrder">{item.customername}</Link>
                                        ) : (
                                            item.customername
                                        )}
                                    </td>
                                    <td className="pick_address">{item.pickupaddress}</td>
                                    <td className="drop_address">{item.dropaddress}</td>
                                    <td>{item.customercontact}</td>
                                    <td>{item.orderprice}</td>
                                    <td>{item.shipmenttype}</td>
                                    <td>
                                        <span className={'badge badge-soft-' + classes[item.status] + ' py-1 '}>
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default TodayOrders;
