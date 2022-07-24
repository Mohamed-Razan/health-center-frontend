import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css"

import SelectUser from "./Components/Login/SelectUser";
import LoginAdmin from "./Components/Login/LoginAdmin";
import AdminHome from "./Components/Admin/Home/AdminHome";
import LoginStudent from "./Components/Login/LoginStudent"
import LoginDoctor from "./Components/Login/LoginDoctor"
import PastAppTableStudent from "./Components/Student/PastAppointment/PastAppTableStudent";
import Studenthome from "./Components/Student/Home/Studenthome";
import PastAppTableAdmin from "./Components/Admin/PastAppointment/PastAppTableAdmin";
import DoctorHome from "./Components/Doctor/Home/DoctorHome";
import PastPrescriptionTableDoctor from "./Components/Doctor/PastPrescription/PastPrescriptionTableDoctor";
import PastPrescriptionTableStudent from "./Components/Student/PastPrescription/PastPrescriptionTableStudent";
import UserDetails from "./Components/Admin/Profile/UserDetails";
import ProfileAdmin from "./Components/Admin/Profile/Profile";
import ProfileDoctor from "./Components/Doctor/Profile/Profile"
import ProfileStudent from "./Components/Student/Profile/Profile"

function App() {
  return (
    <div style={{ backgroundColor: "#EDF4FC", minHeight: "100vh" }}>
      <Router>
        <Switch>
          <Route exact path="/" component={SelectUser} />

          <Route exact path="/admin" component={LoginAdmin} />
          <Route exact path="/admin/:id" component={AdminHome} />
          <Route exact path="/admin/:id/appointment" component={PastAppTableAdmin} />
          <Route exact path="/admin/:id/profile" component={ProfileAdmin} />

          <Route exact path="/student" component={LoginStudent} />
          <Route exact path="/student/:id" component={Studenthome} />
          <Route exact path="/student/:id/past-appointment" component={PastAppTableStudent} />
          <Route exact path="/student/:id/past-prescription" component={PastPrescriptionTableStudent} />
          <Route exact path="/student/:id/profile" component={ProfileStudent} />

          <Route exact path="/doctor" component={LoginDoctor} />
          <Route exact path="/doctor/:id" component={DoctorHome} />
          <Route exact path="/doctor/:id/past-prescription" component={PastPrescriptionTableDoctor} />
          <Route exact path="/doctor/:id/profile" component={ProfileDoctor} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
