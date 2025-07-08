import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './pages/User';
import Layout from './layout/Layout';
import Lecture from './pages/Lecture';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<User />} />
            <Route path='lectures' element={<Lecture />} />
            </Route>
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
