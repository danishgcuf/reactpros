
import './App.css';
import { Route, Routes } from 'react-router-dom'
import NewMeeupPage from './Pages/NewMeetup';
function App() {
  return (

 
  <Routes>

    <Route path='/' element= {<NewMeeupPage />}>
    </Route>
  </Routes>
     

  );
}

export default App;
