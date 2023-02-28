import data from '../../database/data.json';
import './index.css';

function About() {
  const { profile: { description } } = data;
  return (
    <section className="section-about">
      <div className="div-about-description">
        {
          description.paragraphs.map((paragraph) => (
            <p key={ paragraph } dangerouslySetInnerHTML={ { __html: paragraph } } />
          ))
        }
      </div>
    </section>
  );
}

export default About;
