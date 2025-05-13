import Scheduler from './Scheduler';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Scheduler />} />
    </Routes>
  );
}

export default App;