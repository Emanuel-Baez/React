const Projects = () => {
    return (
     
      <div className="container mt-4">
      <h2>Proyectos</h2>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Proyecto 1</h5>
          <p className="card-text">
            Descripción breve del proyecto. Incluye tecnologías usadas y el objetivo principal del proyecto.
          </p>
          <a href="https://enlace-al-proyecto.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Ver Proyecto
          </a>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Proyecto 2</h5>
          <p className="card-text">
            Descripción breve del proyecto. Incluye tecnologías usadas y el objetivo principal del proyecto.
          </p>
          <a href="https://enlace-al-proyecto.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Ver Proyecto
          </a>
        </div>
      </div>
    </div>

    );
  };
  
  export default Projects;
  