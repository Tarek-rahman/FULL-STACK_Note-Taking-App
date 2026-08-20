import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateNote from './pages/CreateNote';
import Navber from './components/Navber';
import Footer from './components/footer';
const App = () => {
  return (
    <>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createNote" element={<CreateNote />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
