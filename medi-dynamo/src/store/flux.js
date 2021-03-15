const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            // captura de datos en inputs formulario
            user_data:{
                email:"",
                password:"",
                name:"",
                username:""
            },

            currentUser: "",

        },
        actions: {
            // funcion input controlado - captura de datos
            onChangeUser: (evento) => {
                const store = getStore();
                const {user_data} = store;
                user_data[evento.target.name] = evento.target.value
                setStore({user_data});
            },

            // funcion enviar datos capturados
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
                            sessionStorage.setItem("u_token", data.token);
                            store.currentUser = store.user_data.username;
                            console.log("currentUser", store.currentUser);
                            if (data !== `{msg: "Username/Password are incorrect"}`) {
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

        },
    };
};

export default getState;