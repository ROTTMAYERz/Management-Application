import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import './App.css';
import ProjectsPage from './components/projects/ProjectsPage';
import HomePage from './components/home/homePage';
import Logo3 from '/assets/logo-3.svg';
import ProjectPage from './components/projects/ProjectPage';

function App() {
  return (
    <Router>
      <header className="sticky">
        <span className="logo">
          <img src={Logo3} alt="logo" width="49" height="99" />
        </span>
        <NavLink to="/" className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/projects" className="button rounded">
          Projects
        </NavLink>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
