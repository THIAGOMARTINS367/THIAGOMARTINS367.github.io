import data from '../../database/data.json';
import './index.css';

function Projects() {
  const { projectsSection } = data;
  return (
    <section className="section-projects">
      <h2 className="h2-section-projects">
        { projectsSection.title.toUpperCase() }
      </h2>
      <section className="section-project-cards">
        {
          projectsSection.projects.map((projectObj) => (
            <div key={ projectObj.title } className="div-project-card">
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
                  <div className="div-button-repository">
                    {
                      projectObj.repository && (
                        <a href="#" target="_blank">
                          <button type="button">Github</button>
                        </a>
                      )
                    }
                  </div>
                  <div className="div-button-webpage">
                    {
                      projectObj.url && (
                        <a href="#" target="_blank">
                          <button type="button">Ver</button>
                        </a>
                      )
                    }
                  </div>
                </div>
              </section>
            </div>
          ))
        }
      </section>
    </section>
  );
}

export default Projects;
