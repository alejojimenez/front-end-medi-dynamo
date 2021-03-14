import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { PatientsCard } from "./PatientsCard";
import { PatientsModal } from "../component/PatientModal";
import { Context } from "../store/appContext.js";

export const Patients = () => {
	const [state, setState] = useState({
		showModal: false,
		idDeleteContact: null,
		idEditContact: null
	});
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getContacts();
	}, []);

	return (
		<>
			<div className="container">
				<div>
					<p className="text-right my-3">
						<Link className="btn btn-success" to="/add">
							Add new contact
						</Link>
					</p>
					<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
						<ul className="list-group pull-down" id="contact-list">
							{store.allContacts.map((item, index) => (
								<PatientsCard
									name={item.full_name}
									address={item.address}
									phone={item.phone}
									email={item.email}
									key={index}
									index={index}
									id={item.id}
									onDelete={() => setState({ showModal: true, idDeleteContact: item.id })}
									onEdit={() => setState({ idEditContact: item.id })}
								/>
							))}
						</ul>
					</div>
				</div>
				<PatientsModal
					show={state.showModal}
					onClose={() => setState({ showModal: false })}
					idToDelete={state.idDeleteContact}
				/>
			</div>
		</>
	);
};
