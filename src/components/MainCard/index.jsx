import { useEffect, useState } from 'react';
import About from '../About';
import Projects from '../Projects';
import Resume from '../Resume';
import './index.css';

function MainCard() {
  const [animationClass, setAnimationClass] = useState('quick-animation');
  const [currentComponent, setcurrentComponent] = useState('about');
  const [optionSelected, setOptionSelected] = useState({ attributes: { value: { value: 'About' } } });

  useEffect(() => {
    setTimeout(() => setAnimationClass(''), 500);
    const initialOption = document.getElementById('li-about');
    setOptionSelected(initialOption);
  }, []);

  return (
    <>
    <nav className="navbar-options">
      <ul className="ul-list-navbar">
        <li
          id="li-about"
          value="About Me"
          onClick={ ({ target }) => {
            setAnimationClass('quick-animation');
            setcurrentComponent('about');
            if (optionSelected) optionSelected.style.color = 'white';
            target.style.color = '#ffdb70';
            setOptionSelected(target);
            setTimeout(() => setAnimationClass(''), 500);
          } }
        >
          About
        </li>
        <li
          value="Resume"
          onClick={ ({ target }) => {
            setAnimationClass('quick-animation');
            setcurrentComponent('resume');
            if (optionSelected) optionSelected.style.color = 'white';
            target.style.color = '#ffdb70';
            setOptionSelected(target);
            setTimeout(() => setAnimationClass(''), 500);
          } }
        >
          Resume
        </li>
        <li
          value="Projects"
          onClick={ ({ target }) => {
            setAnimationClass('quick-animation');
            setcurrentComponent('projects');
            if (optionSelected) optionSelected.style.color = 'white';
            target.style.color = '#ffdb70';
            setOptionSelected(target);
            setTimeout(() => setAnimationClass(''), 500);
          } }
        >
          Projects
        </li>
      </ul>
    </nav>
    <article className={'article-main-card ' + animationClass}>
      <section className={'section-nav-options-title'}>
        <h2 className="h2-title">
          { optionSelected.attributes.value.value }
          <hr className="bottom-hr-title" />
        </h2>
      </section>
      
      <section className="content-render-section">
        {
          currentComponent.includes('about') && (<About />)
        }
        {
          currentComponent.includes('resume') && (<Resume />)
        }
        {
          currentComponent.includes('projects') && (<Projects />)
        }
      </section>
    </article>
    </>
  );
}

export default MainCard;
