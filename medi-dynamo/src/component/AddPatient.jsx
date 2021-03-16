import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Col, Row, Button } from "react-bootstrap";

export const AddPatient = props => {
	const { actions, store } = useContext(Context);
	console.log("props en Component AddPatient", props);
	const [state, setState] = useState({
		rut: null,
		firstname: null,
		lastname: null,
		age: null,
		sex: null,
		address: null,
		telephone: null,
		email: null,
		forecast: null
	});

	return (
		<div className="container">
			<h2 className="color-text-general text-center mt-5"><strong>Agregar Nuevo Paciente</strong></h2>
			<div className="bg-size-form-addPatient">
				<form>
					<Row>
						<Col md = {6}>
							<div className="form-group">
								<label><strong>RUT:</strong></label>
								<input
									onChange={event => {
										setState({ ...state, rut: event.target.value });
									}}
									type="text"
									className="form-control"
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
									className="form-control"
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
									className="form-control"
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
									className="form-control"
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
									className="form-control"
									placeholder="Ingrese sexo del paciente"
								/>
							</div>
						</Col>
					</Row>
					<Row>
						<Col md = {6}>
							<div className="form-group">
								<label><strong>Direccion:</strong></label>
								<input
									onChange={event => {
										setState({ ...state, address: event.target.value });
									}}
									type="text"
									className="form-control"
									placeholder="Ingrese dirección Hab. del paciente"
								/>
							</div>
						</Col>
						<Col md = {6}>
							<div className="form-group">
								<label><strong>Telefono:</strong></label>
								<input
									onChange={event => {
										setState({ ...state, telephone: event.target.value });
									}}
									type="phone"
									className="form-control"
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
									className="form-control"
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
									className="form-control"
									placeholder="Ingrese previsión social de paciente"
								/>
							</div>
						</Col>
					</Row>
					<Row>
						<Col md = {4}>
							<Button
								onClick={() => {
									actions.addContacts(state.rut, state.firstname, state.lastname, state.age, state.sex, state.address, state.telephone, state.email, state.forecast);
									props.history.push("/patients");
								}}
								type="button"
								className="btn btn-primary form-control">
								save
							</Button>
						</Col>
						<Col md = {4}>
							<Button>
								<Link className="mt-3 w-100 text-center" to="/patients">
									Retornar
								</Link>
							</Button>
						</Col>
					</Row>
				</form>
			</div>
		</div>
	);
};

AddPatient.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object
};