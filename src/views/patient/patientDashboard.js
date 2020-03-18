import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Pie,Line } from 'react-chartjs-2';

const data2 = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [
		{
			label: 'My First dataset',
			fill: false,
			lineTension: 0.1,
			backgroundColor: 'rgba(75,192,192,0.4)',
			borderColor: 'rgba(75,192,192,1)',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: 'rgba(75,192,192,1)',
			pointBackgroundColor: '#fff',
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: 'rgba(75,192,192,1)',
			pointHoverBorderColor: 'rgba(220,220,220,1)',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: [65, 59, 80, 81, 56, 55, 40],
		},
	],
};

const data = {
	labels: ['Red', 'Green', 'Yellow'],
	datasets: [
		{
			data: [300, 50, 100],
			backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
			hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
		},
	],
};
class PatientDashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collapse: true,
			fadeIn: true,
			timeout: 300,
		};
	}

	componentDidMount = () => {};

	render() {
		return (
			<section>
				<div className="contact-list-container">
					<div className="animated fadeIn">
						<Row>
							<Col xs="12" sm="12" md="12">
								<Card>
									<CardBody>
										<h1 className="h1 text-center text-success font-weight-bold">
										Patient Dashboard
										</h1>
										<hr></hr>
										<div class="row">
											<div class="col-md-6">
												<Line data={data} />
											</div>
											<div class="col-md-6">
												<Pie data={data} />
											</div>
										</div>
									</CardBody>
								</Card>
							</Col>
						</Row>
					</div>
				</div>
			</section>
		);
	}
}
export default PatientDashboard;
