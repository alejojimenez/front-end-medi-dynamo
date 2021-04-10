import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";

export const AddPatient = (props) => {
	const { actions } = useContext(Context);
	console.log("props en Component AddPatient", props);
	const [state, setState] = useState({
		rut: "",
		firstname: "",
		lastname: "",
		age: "",
		sex: "",
		address: "",
		telephone: "",
		email: "",
		forecast: ""
	});

	return (
		<div className="container">
			<h2 className="color-text-general text-center mt-view-patients-card"><strong>Agregar Nuevo Paciente</strong></h2>
			<div className="col-12 shadow p-4 mb-5 bg-size-form-addPatient rounded">
				{console.log("State", state)}
				<form>
					<Row>
						<Col md = {6}>
							<div className="form-group">
								<label><strong>Rut:</strong></label>
								<input
									onChange={event => {
										setState({ ...state, rut: event.target.value });
									}}
									type="text"
									className="shadow-sm form-control"
									placeholder="Ingrese rut del paciente"
								/>
							</div>
						</Col>
					</Row>
					<Row>
						<Col md = {6}>
							<div className="form-group">
								<label><strong>Nombres:</strong></label>
								<input
									onChange={event => {
										setState({ ...state, firstname: event.target.value });
									}}
									type="text"
									className="shadow-sm form-control"
									placeholder="Ingrese nombre del paciente"
								/>
							</div>
						</Col>
						<Col md = {6}>
							<div className="form-group">
								<label><strong>Apellidos:</strong></label>
								<input
									onChange={event => {
										setState({ ...state, lastname: event.target.value });
									}}
									type="text"
									className="shadow-sm form-control"
									placeholder="Ingrese apellidos del paciente"
								/>
							</div>
						</Col>
					</Row>
					<Row>
						<Col md = {6}>
							<div className="form-group">
								<label><strong>Edad:</strong></label>
								<input
									onChange={event => {
										setState({ ...state, age: event.target.value });
									}}
									type="number"
									className="shadow-sm form-control"
									placeholder="Ingrese edad del paciente"
								/>
							</div>
						</Col>
						<Col md = {6}>
							<div className="form-group">
								<label><strong>Sexo:</strong></label>
								<input
									onChange={event => {
										setState({ ...state, sex: event.target.value });
									}}
									type="text"
									className="shadow-sm form-control"
									placeholder="Ingrese sexo del paciente"
								/>
							</div>
						</Col>
					</Row>
					<Row>
						<Col md = {6}>
							<div className="form-group">
								<label><strong>Dirección:</strong></label>
								<input
									onChange={event => {
										setState({ ...state, address: event.target.value });
									}}
									type="text"
									className="shadow-sm form-control"
									placeholder="Ingrese dirección Hab. del paciente"
								/>
							</div>
						</Col>
						<Col md = {6}>
							<div className="form-group">
								<label><strong>Teléfono:</strong></label>
								<input
									onChange={event => {
										setState({ ...state, telephone: event.target.value });
									}}
									type="phone"
									className="shadow-sm form-control"
									placeholder="Ingrese número de telefono del paciente"
								/>
							</div>
						</Col>
					</Row>
					<Row>
						<Col md = {6}>
							<div className="form-group">
								<label><strong>E-mail:</strong></label>
								<input
									onChange={event => {
										setState({ ...state, email: event.target.value });
									}}
									type="email"
									className="shadow-sm form-control"
									placeholder="Ingrese correo electronico del paciente"
								/>
							</div>
						</Col>
						<Col md = {6}>
							<div className="form-group">
								<label><strong>Previsión Social:</strong></label>
								<input
									onChange={event => {
										setState({ ...state, forecast: event.target.value });
									}}
									type="text"
									className="shadow-sm form-control"
									placeholder="Ingrese previsión social de paciente"
								/>
							</div>
						</Col>
					</Row>
				</form>
			</div>
			<p className="col-12 text-right my-3">
				<Link className="btn btn-light shadow-sm rounded-pill"
					onClick={() => {
						actions.addPatients(
							state.rut, 
							state.firstname, 
							state.lastname, 
							state.age, 
							state.sex, 
							state.address, 
							state.telephone, 
							state.email, 
							state.forecast
						);
						props.history.push("/patients");
					}}
					type="button"
				>
					<i className="fa fa-user-plus" aria-hidden="true"></i> Guardar
				</Link> 
				{" "}
				<Link className="btn btn-light shadow-sm rounded-pill" type="button" to="/patients">
					<i className="fa fa-reply" aria-hidden="true"></i> Retornar
				</Link>
			</p>
		</div>
	);
};

AddPatient.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object
};