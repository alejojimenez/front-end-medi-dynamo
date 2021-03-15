import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import PropTypes from "prop-types";
import Patient from "../img/m102.jpg";

export const PatientsCard = (props) => {
	console.log("props en Component PatientsCard", props);
	const { store, actions } = useContext(Context);

	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src={Patient} alt="Pacientes" className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<Row>
							<Col>
								<Link className="btn" to={"/edit/" + props.id}>
									<i className="fas fa-pencil-alt fa-2x mr-3" />
								</Link>
							</Col>
							<Col>
								<button className="btn" onClick={() => props.onDelete()}>
									<i className="fas fa-trash-alt fa-2x" />
								</button>
							</Col>
						</Row>
					</div>
					<label className="name lead">{props.firstname} {" "} {props.lastname}</label>
					<Row>
						<Col className="justify-content-start">
							<i className="fas fa-id-card text-muted mr-3" />
							<span className="text-muted">{props.rut}</span>
						</Col>
						<Col className="justify-content-start">
							<i className="fas fa-medkit text-muted mr-3" />
							<span className="text-muted">{props.forecast}</span>
						</Col>
					</Row>
					<Row>
						<Col className="justify-content-start">
							<i className="fas fa-hourglass-half text-muted mr-3" />
							<span className="text-muted">{props.age}</span>
						</Col>
						<Col className="justify-content-start">
							<i className="fas fa-venus-mars text-muted mr-3" />
							<span className="text-muted">{props.sex}</span>
						</Col>
					</Row>
					<Row>
						<Col className="justify-content-start">
							<i className="fas fa-map-marker-alt text-muted mr-3" />
							<span className="text-muted">{props.address}</span>
						</Col>
						<Col className="justify-content-start">
							<span
								className="fas fa-phone fa-fw text-muted mr-3"
								data-toggle="tooltip"
								title=""
								data-original-title="(870) 288-4149"
							/>
							<span className="text-muted small">{props.telephone}</span>
						</Col>
					</Row>
				</div>
			</div>
		</li>
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
	age: PropTypes.string,
	sex: PropTypes.string,
	address: PropTypes.string,
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