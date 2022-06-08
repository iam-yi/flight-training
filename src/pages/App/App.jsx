import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import Instructor from '../Instructor/Instructor';
import RentalPrice from '../RentalPrice/RentalPrice';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import { instructors } from '../../data.js';
import { prices } from '../../priceData';
import PaymentPage from '../PaymentPage/PaymentPage';
import Success from '../Success/Success';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/orders/new" element={<NewOrderPage  />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/instructor" element={<Instructor instructors={instructors}/>} />
            <Route path="/price" element={<RentalPrice prices={prices} />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
