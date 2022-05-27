import React from 'react';
import { Card, CardBody, Table, Button } from 'reactstrap';

const TodayOrders = () => {
    return (
        <Card>
            <CardBody className="pb-0">
                <h5 className="card-title mt-0 mb-0 header-title">Today's Orders</h5>

                <Table hover responsive className="mt-4">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Merchant Name</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Sarvesh Rembhotkar</td>
                            <td>Otto B</td>
                            <td>$79.49</td>
                            <td>
                                <span className="badge badge-soft-warning py-1">In-Progress</span>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Abhishek Muley</td>
                            <td>Mark P</td>
                            <td>$125.49</td>
                            <td>
                                <span className="badge badge-soft-success py-1">Delivered</span>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Sanket Rembhotkar</td>
                            <td>Dave B</td>
                            <td>$35.49</td>
                            <td>
                                <span className="badge badge-soft-danger py-1">Issue</span>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Sarvesh Rembhotkar</td>
                            <td>Shreyu N</td>
                            <td>$49.49</td>
                            <td>
                                <span className="badge badge-soft-warning py-1">In-Progress</span>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Shivkant Kadam</td>
                            <td>Rik N</td>
                            <td>$69.49</td>
                            <td>
                                <span className="badge badge-soft-danger py-1">Issue</span>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Pranav Borole</td>
                            <td>Rik N</td>
                            <td>$69.49</td>
                            <td>
                                <span className="badge badge-soft-success py-1">Delivered</span>
                            </td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Salman Khan</td>
                            <td>Rik N</td>
                            <td>$69.49</td>
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

export default TodayOrders;
