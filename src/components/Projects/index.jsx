import data from '../../database/data.json';
import './index.css';

function Projects() {
  const { projectsSection } = data;
  return (
    <section className="section-projects">
      <section className="section-project-cards">
        {
          projectsSection.projects.map((projectObj) => (
            <section key={ projectObj.title } className="div-project-card">
              <div className="div-img-project-card">
                <img className="img-project-card" src={ projectObj.image } alt={ projectObj.title } />
              </div>
              <section className="section-project-card-information">
                <div>
                  <h3 className="h3-project-card-title">{ projectObj.title }</h3>
                  <div className="div-project-card-technologies">
                    {
                      projectObj.technologies.map((technology) => (
                        <div key={ technology } className="div-project-card-technology">{ technology }</div>
                      ))
                    }
                  </div>
                </div>
                <div>
                  <p className="p-project-card-description">{ projectObj.description }</p>
                </div>
                <div className="div-card-buttons">
                  {
                    projectObj.repository && (
                      <div className="div-button-repository">
                        <a href={ projectObj.repository } target="_blank" rel="noreferrer">
                          <button type="button">Github</button>
                        </a>
                      </div>
                    )
                  }
                  {
                    projectObj.url && (
                      <div className="div-button-webpage">
                        <a href={ projectObj.url } target="_blank" rel="noreferrer">
                          <button type="button">Ver</button>
                        </a>
                      </div>
                    )
                  }
                </div>
              </section>
            </section>
          ))
        }
      </section>
    </section>
  );
}

export default Projects;
