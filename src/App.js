import { Routes, Route } from 'react-router-dom';
import DashboardContextProvider from './context/DashboardContext';

import './App.css';

import DashboardEmployees from './Pages/DashboardEmployees/DashboardEmployees';
import DashboardFinance from './Pages/DashboardFinance/DashboardFinance';
import Sidebar from './Components/Sidebar/Sidebar';



function App() {
  return (
    <DashboardContextProvider>
      <Sidebar />
      <Routes>
        <Route path="/" element={<DashboardFinance />} />
        <Route path="dashboard-employees" element={<DashboardEmployees />} />
      </Routes>
    </DashboardContextProvider>
  );
}

export default App;
