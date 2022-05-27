import React, { useState } from 'react';
import { Card, CardBody, Table, CustomInput, Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
//import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { Flag } from 'react-feather';

const Tasks = () => {
    const data = [
        {
            id: 1,
            From: '02/01/2020',
            To: '8/01/2020',
            Amount: '$2000',
            //   value: true,
        },
        {
            id: 2,
            From: '09/01/2020',
            To: '15/01/2020',
            Amount: '$3000',
            //   value: false,
        },
        {
            id: 3,
            From: '16/01/2020',
            To: '22/01/2020',
            Amount: '$4500',
            //   value: true,
        },
    ];
    const [modal, setModal] = useState(false);

    const [checkbox, setcheckbox] = useState(data.map((value) => ({ id: value.id, checked: false })));
    const [currentcheckbox, setcurrentcheckbox] = useState('');

    const showModal = (e) => {
        setcurrentcheckbox(e.target.id);

        if (e.target.checked) {
            setModal(true);
        }
    };

    const hideModal = (e, checked) => {
        setcheckbox(
            checkbox.map((value) => {
                if (value.id === Number(currentcheckbox)) {
                    value.checked = checked;
                }
                return value;
            })
        );
        setModal(false);
    };

    return (
        <Card>
            <CardBody className="pb-0">
                {/* <Button className="float-right" size={'sm'} color="primary">
                    <i className="uil uil-export ml-1"></i> Export
                </Button> */}

                {/* <h5 className="card-title mt-0 mb-0 header-title">Recent Orders</h5> */}

                <Table responsive className="mt-4">
                    <thead>
                        <tr>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            return (
                                <tr>
                                    <td>{item.From}</td>
                                    <td>{item.To}</td>
                                    <td>{item.Amount}</td>
                                    <td>
                                        <CustomInput
                                            checked={checkbox.find((value) => value.id === item.id).checked}
                                            type="checkbox"
                                            onClick={(e) => showModal(e)}
                                            id={item.id}></CustomInput>
                                    </td>
                                </tr>
                            );
                        })}
                        <Modal isOpen={modal} toggle={showModal}>
                            <ModalHeader toggle={hideModal}>Payment Confirmation</ModalHeader>
                            <ModalBody>
                                <Card className="mb-1">
                                    <CardBody>
                                        <h5 className="card-title font-size-16 text-center">
                                            Are you sure you want to mark this as paid?
                                        </h5>
                                    </CardBody>
                                </Card>
                            </ModalBody>
                            <div className="submit mb-3">
                                <Button color="secondary" onClick={(e) => hideModal(e, false)}>
                                    No
                                </Button>
                                <Button color="primary" onClick={(e) => hideModal(e, true)} className="ml-3">
                                    Yes
                                </Button>
                            </div>
                        </Modal>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default Tasks;
