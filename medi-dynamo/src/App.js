import injectContext from './store/appContext';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';

//Secciones
import Home from '../src/view/Home';
// import NavBar from '../src/component/NavBar';
import Login from './view/Login';
import Signup from './view/Signup';
import Footer from '../src/component/Footer';
import { Patients } from './view/Patients';
import { AddPatient } from './component/AddPatient';
import { EditPatient } from './component/EditPatient';

function App() {
  return (
    <>
      <Router>
          {/* <NavBar /> */}
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Signup}/>
            <Route exact path="/patients" component={Patients} />
            <Route exact path="/addpatient" component={AddPatient} />
            <Route exact path="/editpatient/:id" component={EditPatient} />
            <Route render={() => <h1>Not Found</h1>}/>

            {/*<Route component={Login} path="/login"/>
            <Route component={Signup} path="/signup"/>
            <Route path="/compania" component={ViewCompany}/>
            <Route path="/contenedores" component={Containers}/>
            <Route path="/notificaciones" component={Notifications}/>
            <Route path="/operadores" component={RootOperator}/>
            <Route exact path="/quienes-somos" component={WhoWeAre} />
            <Route exact path="/planes-de-pago" component={PayMethod} />
            <Route exact path="/contactanos" component={Contact} />
            <Route exact path="/enviar-notificacion" component={SendNotify} /> */}
          </Switch>
          <Footer />
      </Router>
    </>
  );
}

export default injectContext(App);
