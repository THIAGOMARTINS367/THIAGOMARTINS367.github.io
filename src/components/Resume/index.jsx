import data from '../../database/data.json';
import './index.css';

function Resume () {
  const { professional } = data;
  professional.education.sort((a, b) => b.start - a.start);
  professional.experience.sort((a, b) => b.start - a.start);
  return (
    <section className="section-resume">
      <section className="timeline">
        <div className="div-title-img-timeline">
          <div className="div-img-icon-education">
            <img src="/assets/stacked-book.svg" alt="stacked-book.svg" />
          </div>
          <h3 className="h3-title-timeline">
            Education
          </h3>
        </div>
        <ul className="ul-list-timeline">
          <li className="li-timeline-bottom-line-icon"><div></div></li>
          {
            professional.education.map((itemObj) => (
              <li className="li-timeline-item" key={ itemObj.title }>
                <div className="div-marker-separator">
                  <div className="div-timeline-item-marker">
                    <div></div>
                  </div>
                </div>
                <div className="div-timeline-item-content">
                  <h4>{ itemObj.title }</h4>
                  <span className="item-timeline-period">{ itemObj.start } — { itemObj.end }</span>
                  <p dangerouslySetInnerHTML={{ __html: itemObj.description }}></p>
                </div>
              </li>
            ))
          }
        </ul>
      </section>

      <section className="timeline">
        <div className="div-title-img-timeline">
          <div className="div-img-icon-experience">
            <img src="/assets/user-settings.svg" alt="user-settings.svg" />
          </div>
          <h3 className="h3-title-timeline">
            Experience
          </h3>
        </div>
        <ul className="ul-list-timeline">
          <li className="li-timeline-bottom-line-icon"><div></div></li>
          {
            professional.experience.map((itemObj) => (
              <li className="li-timeline-item" key={ itemObj.title }>
                <div className="div-marker-separator">
                  <div className="div-timeline-item-marker">
                    <div></div>
                  </div>
                </div>
                <div className="div-timeline-item-content">
                  <h4>{ itemObj.title }</h4>
                  <span className="item-timeline-period">{ itemObj.start } — { itemObj.end }</span>
                  <p dangerouslySetInnerHTML={{ __html: itemObj.description }}></p>
                </div>
              </li>
            ))
          }
        </ul>
      </section>
    </section>
  );
}

export default Resume;
