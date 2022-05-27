import React from 'react';
import { Card, CardBody, Table, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import OverviewWidget from '../../../components/OverviewWidget';
import { Watch, Truck } from 'react-feather';
//import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Chart from 'react-apexcharts';
//import { Link } from 'react-router-dom';
const Projects = () => {
    const options = {
        chart: {
            type: 'bar',
            stacked: false,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '45%',
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            showAlways: false,
            show: false,
        },
        legend: {
            show: true,
        },

        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.2,
            },
            borderColor: '#f3f4f7',
        },
        // tooltip: {
        //     y: {
        //         formatter: function (val) {
        //             return '$ ' + val + ' thousands';
        //         },
        //     },
        // },
    };
    const data = [
        {
            name: 'Total Number Of Days ',
            data: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        },
        {
            name: 'Number Of Days Worked',
            data: [31, 29, 31, 28, 31, 30, 31, 31, 30, 31, 29, 31],
        },
    ];
    return (
        <React.Fragment>
            <CardBody className="mb-5">
                <Row>
                    <Col lg={6}>
                        <FormGroup>
                            <Label for="exampleTime">Shift Start Time :</Label>
                            <Input type="time" name="time" id="exampleTime" placeholder="date Time" disabled/>
                        </FormGroup>
                    </Col>
                    <Col lg={6}>
                        <FormGroup>
                            <Label for="exampleTime">Shift End Time :</Label>
                            <Input type="time" name="time" id="exampleTime" placeholder="date Time" disabled />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4}>
                        <OverviewWidget
                            items={[
                                { title: '121,000', description: 'Total No. Of Hours', icon: Watch },
                                { title: '21,000', description: 'Total No. Of Trips', icon: Truck },
                            ]}></OverviewWidget>
                    </Col>
                    <Col lg={8}>
                        <h5 className="ml-4 mt-4">Attendance</h5>

                        <Chart options={options} series={data} type="bar" className="apex-charts" height={210} />
                    </Col>
                </Row>
            </CardBody>
        </React.Fragment>
    );
};

export default Projects;
