import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './page/home';
import Category from './page/category';
import DetailMeal from './page/DetailMeal';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/detail" element={<DetailMeal/>}/>
      </Routes>
    </Router>
  );
}

export default App;
