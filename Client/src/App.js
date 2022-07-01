
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Cake from './component/Cake';
import Order from './component/Order';
import { BrowserRouter,Routes,Route,} from "react-router-dom";
import Logout from './component/Logout';
import Sginup from './component/Sginup';
import PrivateComp from './component/PrivateComp';
import Login from './component/Login'
import Footer from './component/Footer';
import PageNotFound from './component/PageNotFound';
function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar />

     <Routes>
     <Route element={<PrivateComp />}>
     <Route path="/" element={<Home />} />
     <Route path="/cake" element={<Cake />} />
     <Route path="/order" element={<Order />} />
     <Route path="/logout" element={<Logout />} />
     
     <Route path='*' element={<PageNotFound />} />
     </Route>
     <Route path="/signup" element={<Sginup />} />
     <Route path="/login" element={<Login />} />
     </Routes>
     
     <Footer />
   </BrowserRouter>
   </>
  );
}

export default App;
