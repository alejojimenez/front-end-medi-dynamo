import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { PatientsCard } from "./PatientsCard";
import { PatientModal } from "../component/PatientModal";
import { Context } from "../store/appContext.js";

export const Patients = () => {
	const [state, setState] = useState({
		showModal: false,
		idDeletePatient: null,
		idEditPatient: null
	});
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPatients();
	}, []);

	return (
		<>
			<div className="container mt-view-patients-card">
				<h2 className="color-text-general text-center mb-5"><strong>Listado de Pacientes</strong></h2>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.allPatients.map((item, index) => (
							<PatientsCard
								rut={item.rut}
								forecast={item.forecast}
								firstname={item.firstname}
								lastname={item.lastname}
								age={item.age}
								sex={item.sex}
								address={item.address}
								email={item.email}
								telephone={item.telephone}
								key={index}
								index={index}
								id={item.id}
								onDelete={() => setState({ showModal: true, idDeletePatient: item.id })}
								onEdit={() => setState({ idEditPatient: item.id })}
							/>
						))}
					</ul>
				</div>
				<p className="text-right my-3">
						<Link className="btn btn-light shadow-sm rounded-pill" to="/addPatient">
							<i className="fa fa-user-plus" aria-hidden="true"></i> Agregar nuevo paciente
						</Link> 
						{" "}
						<Link className="btn btn-light shadow-sm rounded-pill" to="/home">
							<i className="fa fa-reply" aria-hidden="true"></i> Retornar
						</Link>
				</p>
				<PatientModal
					show={state.showModal}
					onClose={() => setState({ showModal: false })}
					idToDelete={state.idDeletePatient}
				/>
			</div>
		</>
	);
};
