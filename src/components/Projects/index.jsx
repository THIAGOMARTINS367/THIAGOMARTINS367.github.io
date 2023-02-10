import data from '../../database/data.json';

function Projects() {
  const { projectsSection } = data;
  return (
    <section>
      <section>
        {
          projectsSection.projects.map((projectObj) => (
            <div>
              <div>
                <img src={ projectObj.image } alt={ projectObj.title } />
              </div>
              <div>
                <h3>{ projectObj.title }</h3>
                <div>
                  <p>{ projectObj.technologies }</p>
                </div>
              </div>
              <div>
                <p>{ projectObj.description }</p>
              </div>
              <div>
                <div>
                  {
                    projectObj.repository && (
                      <a href="#" target="_blank">
                        <button type="button">Github</button>
                      </a>
                    )
                  }
                  {
                    projectObj.url && (
                      <a href="#" target="_blank">
                        <button type="button">Ver</button>
                      </a>
                    )
                  }
                </div>
              </div>
            </div>
          ))
        }
      </section>
    </section>
  );
}

export default Projects;
