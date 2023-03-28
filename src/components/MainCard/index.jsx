import { useEffect, useState } from 'react';
import About from '../About';
import Projects from '../Projects';
import Resume from '../Resume';
import { QUICK_ANIMATION_CLASS, FIVE_HUNDRED } from '../../constants';
import './index.css';

function MainCard() {
  const [animationClass, setAnimationClass] = useState(QUICK_ANIMATION_CLASS);
  const [optionSelected, setOptionSelected] = useState({
    id: '', attributes: { value: { value: 'about' } },
  });

  useEffect(() => {
    setTimeout(() => setAnimationClass(''), FIVE_HUNDRED);
    const initialOption = document.getElementById('div-about-button');
    setOptionSelected(initialOption);
  }, []);

  const changeSelectedNavbarOption = ({ target }) => {
    setAnimationClass(QUICK_ANIMATION_CLASS);
    if (optionSelected) optionSelected.style.color = 'white';
    target.style.color = '#ffdb70';
    setOptionSelected(target);
    setTimeout(() => setAnimationClass(''), FIVE_HUNDRED);
  };

  const displaySelectedNavbarOption = () => {
    switch (optionSelected.id) {
    case 'div-about-button':
      return <About />;
    case 'div-resume-button':
      return <Resume />;
    case 'div-projects-button':
      return <Projects />;
    default:
      return null;
    }
  };

  return (
    <article className={ `article-main-card ${animationClass}` }>
      <section className="section-nav-options-title">
        <h2 className="h2-title">
          { optionSelected.attributes.value.value }
          <hr className="bottom-hr-title" />
        </h2>
        <nav className="navbar-options">
          <div>
            <button
              id="div-about-button"
              value="About Me"
              onClick={ changeSelectedNavbarOption }
            >
              About
            </button>
          </div>

          <div>
            <button
              id="div-resume-button"
              value="Resume"
              onClick={ changeSelectedNavbarOption }
            >
              Resume
            </button>
          </div>

          <div>
            <button
              id="div-projects-button"
              value="Projects"
              onClick={ changeSelectedNavbarOption }
            >
              Projects
            </button>
          </div>
        </nav>
      </section>

      <section className="content-render-section">
        { displaySelectedNavbarOption() }
      </section>
    </article>
  );
}

export default MainCard;
