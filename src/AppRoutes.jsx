import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Todos from './pages/Todos';

export default function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<Todos />} />
        {/* 404 pages */}
        <Route path='/404' element={<NotFound />} />
        {/* Handler to redirect to 404 pages */}
        <Route path='/*' element={<Navigate to='/404' />} />
      </Routes>
    </>
  );
}
