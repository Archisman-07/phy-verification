import {Routes,Route,Outlet} from 'react-router-dom';
import FirstPage from "./components/first-page/first-page.component";
import Container from "./components/container/container.component";
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import SecondPage from './components/second-page/second-page.component';
import ThirdPage from './components/third-page/third-page.component';

import FirstPageContent from './components/first-page-content/first-page-content.component';


import BasicDetails from './components/basic-details/basic-details.component';
import BasicTable from './components/course-list/course-list.component';
import CustomizedTables from './components/fees/fees.component';
import ViewDetailsPopup from './components/view-details-popup/view-details-popup.component';




const App= ()=> {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='bulk' element={<SecondPage/>}/>
        <Route path='view' element={<ThirdPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
