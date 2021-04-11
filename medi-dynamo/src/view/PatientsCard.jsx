import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import PropTypes from "prop-types";
import Patient from "../img/m102.jpg";

export const PatientsCard = (props) => {
	console.log("props en Component PatientsCard", props);
	const { store, actions } = useContext(Context);

	return (
		<>
		<div className="container">
			<div className="card bg-list-card shadow p-1 mb-1 rounded">
				<ul className="list-group list-group-flush">
					<li className="bg-list-card list-group-item">
						<div className="row">
							<Col md = {3}>
								<img src={Patient} alt="Pacientes" className="rounded-circle mx-auto d-block img-fluid mt-4 mb-4" />
							</Col>
							<Col md = {4}>
								<Row>
									<Col>
										<label className="name lead"><strong>{props.firstname} {" "} {props.lastname}</strong></label>
									</Col>
								</Row>
								<Row>
									<Col>
										<i className="fas fa-id-card text-muted mr-3" />
										<span className="text-muted">{props.rut}</span>
									</Col>
								</Row>
								<Row>
									<Col>
										<i className="fas fa-hourglass-half text-muted mr-3" />
										<span className="text-muted">{props.age}</span>
									</Col>
								</Row>
								<Row>
									<Col>
										<i className="fas fa-envelope text-muted mr-3" />
										<span className="text-muted">{props.email}</span>
									</Col>
								</Row>
								<Row>
									<Col>
										<i className="fas fa-map-marker-alt text-muted mr-3" />
										<span className="text-muted">{props.address}</span>
									</Col>
								</Row>
							</Col>
							<Col md = {3}>
								<Row>
									<Col>
										<span className="text-muted"> </span>
									</Col>
								</Row>
								<Row>
									<Col>
										<i className="fas fa-medkit text-muted mr-3" />
										<span className="text-muted">{props.forecast}</span>
									</Col>
								</Row>
								<Row>
									<Col>
										<i className="fas fa-venus-mars text-muted mr-3" />
										<span className="text-muted">{props.sex}</span>
									</Col>
								</Row>
								<Row>
									<Col>
										<span
											className="fas fa-phone fa-fw text-muted mr-3"
											data-toggle="tooltip"
											title=""
											data-original-title="(870) 288-4149"
										/>
										<span className="text-muted small">{props.telephone}</span>
									</Col>
								</Row>
							</Col>
							<Col className = "justify-content-end mt-5" md = {2}>
								<Link className="btn" to={"/editpatient/" + props.id}>
									<i className="color-text fas fa-pencil-alt fa-2x mr-3" />
								</Link>
								<button className="btn" onClick={() => props.onDelete()}>
									<i className="color-text fas fa-trash-alt fa-2x" />
								</button>
							</Col>
						</div>
					</li>
				</ul>
			</div>
		</div>
		</>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
PatientsCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	onEdit: PropTypes.func,
	index: PropTypes.number,
	rut: PropTypes.string,
	forecast: PropTypes.string,
	firstname: PropTypes.string,
	lastname: PropTypes.string,
	age: PropTypes.number,
	sex: PropTypes.string,
	address: PropTypes.string,
	email: PropTypes.string,
	telephone: PropTypes.string,
	id: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
PatientsCard.defaultProps = {
	onDelete: null
};