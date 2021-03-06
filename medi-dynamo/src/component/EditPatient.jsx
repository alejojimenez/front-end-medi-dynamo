import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";

export const EditPatient = (props) => {
	const { actions, store } = useContext(Context);
	const contact = store.allPatients.find(element => element.id == props.match.params.id);
	const [state, setState] = useState(contact);

	const [disabledButton, setDisabledButton] = useState(true);

	useEffect(() => {
		if (state.firstname && state.lastname && state.age && state.sex && state.address && state.telephone && state.email && state.forecast) {
			setDisabledButton(false);
		} else {
			setDisabledButton(true);
		}
	}, [state]);

	return (
		<div className="container">
			<h2 className="color-text-general text-center mt-view-patients-card"><strong>Editar Datos de Paciente</strong></h2>
			<div className="shadow p-4 mb-5 bg-size-form-addPatient rounded">
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
									placeholder="Actualice rut del paciente"
									value={state.rut}
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
									placeholder="Actualice nombre del paciente"
									value={state.firstname}
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
									placeholder="Actualice apellidos del paciente"
									value={state.lastname}
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
									placeholder="Actualice edad del paciente"
									value={state.age}
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
									placeholder="Actualice sexo del paciente"
									value={state.sex}
								/>
							</div>
						</Col>
					</Row>
					<Row>
						<Col md = {6}>
							<div className="form-group">
								<label><strong>Direcci??n:</strong></label>
								<input
									onChange={event => {
										setState({ ...state, address: event.target.value });
									}}
									type="text"
									className="shadow-sm form-control"
									placeholder="Actualice direcci??n Hab. del paciente"
									value={state.address}
								/>
							</div>
						</Col>
						<Col md = {6}>
							<div className="form-group">
								<label><strong>Tel??fono:</strong></label>
								<input
									onChange={event => {
										setState({ ...state, telephone: event.target.value });
									}}
									type="phone"
									className="shadow-sm form-control"
									placeholder="Actualice n??mero de telefono del paciente"
									value={state.telephone}
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
									placeholder="Actualice correo electronico del paciente"
									value={state.email}
								/>
							</div>
						</Col>
						<Col md = {6}>
							<div className="form-group">
								<label><strong>Previsi??n Social:</strong></label>
								<input
									onChange={event => {
										setState({ ...state, forecast: event.target.value });
									}}
									type="text"
									className="shadow-sm form-control"
									placeholder="Actualice previsi??n social de paciente"
									value={state.forecast}
								/>
							</div>
						</Col>
					</Row>
				</form>
			</div>
			<p className="text-right my-3">
				<Link className={`btn ${disabledButton ? "btn-secondary" : "btn-light"} shadow-sm rounded-pill`}
					disabled={disabledButton}
					onClick={() => {
						actions.editPatient(
							state.rut, 
							state.firstname, 
							state.lastname, 
							state.age, 
							state.sex, 
							state.address, 
							state.telephone, 
							state.email, 
							state.forecast,
							props.match.params.id
						);
						props.history.push("/patients");
					}}
					type="button"
				>
					<i class="fa fa-user-plus" aria-hidden="true"></i> Guardar
				</Link> 
				{" "}
				<Link className="btn btn-light shadow-sm rounded-pill" type="button" to="/patients">
					<i className="fa fa-reply" aria-hidden="true"></i> Retornar
				</Link>
			</p>
		</div>
	);
};

EditPatient.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object
};