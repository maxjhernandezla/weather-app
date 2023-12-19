import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewHome from '../pages/NewHome/NewHome';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewHome />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
