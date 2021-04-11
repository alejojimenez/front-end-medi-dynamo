import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import PropTypes from "prop-types";
import '../style/App.css';

export const PatientModal = (props) => {
	console.log("props en Component PatientModal", props);
	const { actions } = useContext(Context);

	return (
		<div className="shadow p-4 mb-5 modal rounded" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Estas seguro?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<p className="text-center font-weight-bold">Advertencia: eliminaras un Paciente!</p>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-light shadow-sm rounded-pill"
							data-dismiss="modal"
							onClick={() => {
								actions.delPatient(props.idToDelete);
								props.onClose();
							}}>
							<i className="fa fa-thumbs-up" aria-hidden="true"></i> Eliminar
						</button>
						<button type="button" className="btn btn-light shadow-sm rounded-pill" onClick={props.onClose}>
							<i className="fa fa-reply" aria-hidden="true"></i> Retornar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
PatientModal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	idToDelete: PropTypes.string,
	id: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
PatientModal.defaultProps = {
	show: false,
	onClose: null
};