import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHome from './AdminHome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdminProfile } from './AdminProfile';
import { MainAdmin } from './MainAdmin';
import EmployeeHome from './EmployeeHome';
import EmpProfile from './EmpProfile';
import Start from './start';
import AdminServices from './AdminServices';
import ListEmployee from './Listemployee';
import Listreport from './Listreport';
import AddEmployee from './AddEmployee';
import AddAdmin from './AddAdmin';
import EmpServices from './EmpServices';
import AddReport from './AddReport';
import EmpById from './EmpById';
import EmpByPerform from './EmpByPerform';
import EmpByDept from './EmpByDept';
import EmpDetails from './EmpDetails';
import ViewAdmin from './ViewAdmin';
import DeleteEmployee from './DeleteEmployee';
import UpdateEmployee from './UpdateEmployee';
import Loginform from './Loginform';
import ProjectSelect from './ProjectSelect';
import LoginformEmp from './LoginformEmp';
import Listhr from './Listhr';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Start />}></Route>
        <Route path="/Admin" element={<AdminHome />}>
          <Route path="" element={<MainAdmin />}></Route>
          <Route path="/Admin/Manage" element={<AdminServices />}></Route>
          <Route path="/Admin/profile" element={<AdminProfile />}></Route>
          <Route path="/Admin/Manage/ViewEmp" element={<ListEmployee />}></Route>
          <Route path="/Admin/Manage/report" element={<Listreport />}></Route>
          <Route path="/Admin/Manage/AddEmp" element={<AddEmployee />}></Route>
          <Route path="/Admin/Manage/AddAdmin" element={<AddAdmin />}></Route>
          <Route path="/Admin/Manage/FindEmp" element={<EmpById />}></Route>
          <Route path="/Admin/Manage/FindPerform" element={<EmpByPerform />}></Route>
          <Route path="/Admin/Manage/FindDept" element={<EmpByDept />}></Route>
          <Route path="/Admin/Manage/DeleteEmp" element={<DeleteEmployee />}></Route>
          <Route path="/Admin/Manage/UpdateEmp" element={<UpdateEmployee />}></Route>
          <Route path="/Admin/Manage/Project" element={<ProjectSelect />}></Route>
          <Route path="/Admin/Manage/allAdmin" element={<Listhr/>}></Route>
        </Route>

        <Route path="/Loginform" element={<Loginform />}></Route>
        <Route path="/LoginformEmp" element={<LoginformEmp />}></Route>

        <Route path="/EmployeeHome" element={<EmployeeHome />}>
          <Route path="" element={<EmpProfile />}></Route>
          <Route path="/EmployeeHome/EmpAction" element={<EmpServices />}></Route>
          <Route path="/EmployeeHome/EmpAction/reportchange" element={<AddReport />}></Route>
          <Route path="/EmployeeHome/EmpAction/empdetails" element={<EmpDetails />}></Route>
          <Route path="/EmployeeHome/EmpAction/admin" element={<ViewAdmin />}></Route>
        </Route>


      </Routes>


    </BrowserRouter>
  );
}

export default App;
