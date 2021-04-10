const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            // captura de datos en inputs formulario
            user_data:{
                email:"",
                password:"",
                token:"",
                name:"",
                username:""
            },

            currentUser: null,

            allPatients: [],

        },
        actions: {
            /////////////////////////////////////////////////
            // funcion obtener token - Sesion de usuarios  //
            /////////////////////////////////////////////////
			getToken: () => {
				const localToken = localStorage.getItem("token");
				const localUser = JSON.parse(localStorage.getItem("user"));
				setStore({
					user_data: {
						token: localToken,
						user: localUser
					}
				});
				console.log("Token Local -->", localToken);
				console.log("User Local -->", (localUser));
			},            
            /////////////////////////////////////////////////
            // funcion input controlado - captura de datos //
            /////////////////////////////////////////////////
            onChangeUser: (evento) => {
                const store = getStore();
                const {user_data} = store;
                user_data[evento.target.name] = evento.target.value
                setStore({user_data});
            },
            /////////////////////////////////////
            // funcion registrar usuarios      //
            /////////////////////////////////////
            onSubmitSignup: (evento) => {
                evento.preventDefault();
                const store = getStore();
                console.log(evento)
                if (store.user_data.email === "" || store.user_data.password === "" || store.user_data.username === "") {
                    alert("Correo, Usuario y Contraseña, son datos requeridos!!!")
                } else { 
                    let options = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(store.user_data)
                    }
                    fetch("http://localhost:5000/signup", options)
                        .then(resp => resp.json())
                        .then(data => {
                            console.log("Success:", data)
                            alert("Usuario Registrado con Exito!!!");
                        })
                        .catch(error => console.log(error))
                }
            },
            ////////////////////////////
            // funcion iniciar sesion //
            ////////////////////////////
            onSubmitSignin: (evento) => {
                evento.preventDefault();
                const store = getStore();
                const data = { email: store.user_data.email, password: store.user_data.password, username: store.user_data.username };
                if (data.username === "" || data.email === "" || data.password === "") {
                    alert("Correo, Usuario y Contraseña, son datos requeridos!!!")
                } else { 
                    let options = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    }
                    fetch("http://localhost:5000/login", options)
                        .then(response => response.json())
                        .then(data => {
                            console.log("Success:", data);

                            setStore({ user_data: data });
                            setStore({ currentUser: data.user.username });

                            console.log("currentUser", store.currentUser);
                            if (typeof Storage !== "undefined") {
                                localStorage.setItem("token", data.token);
                                sessionStorage.setItem("user", data.user.username);
                            } else {
                                // LocalStorage no soportado en este navegador
                            }

                            if (localStorage.setItem("token") !== " ") {
                                alert("Usuario Validado con Exito!!!");
                            } else {
                                alert("Datos suministrados Incorrectos!!!");
                            }
                        })
                        .catch(error => {
                            console.error("Error:", error);
                    });
                }
            },

            //////////////////////////////////////
            // Sesiones funciones API REST CRUD //
            //////////////////////////////////////

            ///////////////////////////////////////////
			// Agregar un nuevo Contacto a la Agenda //
            ///////////////////////////////////////////
			addPatients: (rut, firstname, lastname, age, sex, address, telephone, email, forecast) => {
				console.log("---Flux add - Put Patient---");
				fetch("http://127.0.0.1:5000/api/medidynamo/create/patients", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
                        "rut": rut,
                        "firstname": firstname,
                        "lastname": lastname,
                        "age": age,
                        "sex": sex,
                        "address": address,
                        "telephone": telephone,
                        "email": email,
                        "forecast": forecast
					})
				})
					.then(data => data.json().then(response => ({ status: data.status, resMsg: response.msg })))
					.then(({ status, resMsg }) => {
						if (status === 400) alert(resMsg);
					})
					.catch(err => alert(err.message));
			},
            ///////////////////////////////////////
			// Eliminar un Contacto de la Agenda //
            ///////////////////////////////////////
			delPatient: idToDelete => {
				console.log("---Flux Delete Contact---");
				fetch(`http://127.0.0.1:5000/api/medidynamo/delete/patient/${idToDelete}`, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" }
				})
					.then(res => res.json())
					.then(() => {
						fetch("http://127.0.0.1:5000/api/medidynamo/read/patients")
							.then(res => res.json())
							.then(data => setStore({ allPatients: data }));
					})
					.catch(err => alert(err.message));
			},
            /////////////////////////////////////////////////
			// Cambiar valores de un Contacto de la Agenda //
            /////////////////////////////////////////////////
			editPatient: (rut, firstname, lastname, age, sex, address, telephone, email, forecast, idToEdit) => {
				fetch(`http://127.0.0.1:5000/api/medidynamo/update/patient/${idToEdit}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
                        "rut": rut,
                        "firstname": firstname,
                        "lastname": lastname,
                        "age": age,
                        "sex": sex,
                        "address": address,
                        "telephone": telephone,
                        "email": email,
                        "forecast": forecast
					})
				})
					.then(data => data.json().then(response => ({ status: data.status, resMsg: response.msg })))
					.then(({ status, resMsg }) => {
						if (status === 400) alert(resMsg);
					})
					.then(() => {
						fetch("http://127.0.0.1:5000/api/medidynamo/read/patients")
							.then(res => res.json())
							.then(data => setStore({ allPatients: data }));
					})
					.catch(err => alert(err.message));
			},
            ////////////////////////////////////////////////////////
			// Obtener de la API todos los Contactos de la Agenda //
            ////////////////////////////////////////////////////////
			getPatients: () => {
				console.log("---Flux Get Patients---");
				const config = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				fetch("http://127.0.0.1:5000/api/medidynamo/read/patients", config)
					.then(response => response.json())
					.then(data => {
						console.log("--json-allPatients--", data);
						setStore({ allPatients: data });
					})
					.catch(error => console.log(error));
			}            
        },
    };
};

export default getState;