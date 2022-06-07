import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import Instructor from '../Instructor/Instructor';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import { instructors } from '../../data.js';

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
            <Route path="/our-instructor" element={<Instructor instructors={instructors}/>} />

            
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
