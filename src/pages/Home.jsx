import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bienvenido a mi Portafolio</h1>
      <p>Soy desarrollador web</p>
      <nav>
        <ul>
          <li><Link to="/projects">Proyectos</Link></li>
          <li><Link to="/resume">Currículum</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
