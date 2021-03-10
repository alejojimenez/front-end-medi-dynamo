import injectContext from './store/appContext';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import { Router, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';

//Secciones
import NavBar from "../src/component/NavBar";

function App() {
  return (
    <Router>
        <NavBar />
        <Switch>
          {/* <Route component={Login} path="/login"/> 
          <Route exact path="/home" component={Home}/>
          <Route path="/compania" component={ViewCompany}/>
          <Route path="/contenedores" component={Containers}/>
          <Route path="/notificaciones" component={Notifications}/>
          <Route path="/operadores" component={RootOperator}/>
          <Route exact path="/quienes-somos" component={WhoWeAre} />
          <Route exact path="/planes-de-pago" component={PayMethod} />
          <Route exact path="/contactanos" component={Contact} />
          <Route exact path="/enviar-notificacion" component={SendNotify} /> */}
        </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default injectContext(App);
