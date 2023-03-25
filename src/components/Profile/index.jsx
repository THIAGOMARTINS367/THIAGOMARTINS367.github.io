import { useEffect, useState } from 'react';
import { FIVE_HUNDRED, FIVE_HUNDRED_EIGHTY } from '../../constants';
import data from '../../database/data.json';
import './index.css';

function Profile() {
  const { profile } = data;
  const [mobileScreen, setMobileScreen] = useState(false);
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  const [profileTransitionMoreInfo, setProfileTransitionMoreInfo] = useState('');
  const [profileItemTransitionMoreInfo, setProfileItemTransitionMoreInfo] = useState('');

  useEffect(() => {
    setMobileScreen(window.innerWidth <= FIVE_HUNDRED_EIGHTY);
  }, []);

  const defineTransitionClasses = () => {
    if (profileTransitionMoreInfo.length === 0) {
      setProfileTransitionMoreInfo('transition-profile-more-info');
      setTimeout(
        () => setProfileItemTransitionMoreInfo('transition-profile-item-more-info'),
        FIVE_HUNDRED,
      );
    } else {
      setProfileTransitionMoreInfo('');
      setProfileItemTransitionMoreInfo('');
    }
  };

  return (
    <aside className="aside-profile">
      <section className="section-profile-info">
        <div className="div-profile-picture">
          <img src={ profile.picture } alt="imagem de perfil" />
        </div>
        <div className="profile-info-content">
          <div className="div-profile-name">
            { profile.myName }
          </div>
          <div className="div-profile-title">
            { profile.title }
          </div>
        </div>
        {
          mobileScreen && (
            <div>
              <button
                type="button"
                className="button-menu-mobile-platforms"
                onClick={ () => {
                  defineTransitionClasses();
                  setDisplayMobileMenu(!displayMobileMenu);
                } }
              >
                <img src="/assets/down-arrow-menu.svg" alt="More Info" />
              </button>
            </div>)
        }
      </section>

      <section className={ `section-profile-more-info ${profileTransitionMoreInfo}` }>
        {
          profile.contacts.map((contactObj) => (
            <div
              key={ contactObj.name }
              className={ `div-profile-icon ${profileItemTransitionMoreInfo}` }
            >
              <a href={ contactObj.url } target="_blank" rel="noreferrer">
                <div className="div-img-icon">
                  <img
                    className="profile-icons"
                    src={ contactObj.image }
                    alt={ contactObj.name }
                  />
                </div>
              </a>
              <div className="div-profile-info">
                <div>
                  { contactObj.name.toUpperCase() }
                </div>
                <a href={ contactObj.url } target="_blank" rel="noreferrer">
                  { contactObj.username }
                </a>
              </div>
            </div>
          ))
        }
        {
          profile.otherInformations.map((contactObj) => (
            <div
              key={ contactObj.name }
              className={ `div-profile-icon ${profileItemTransitionMoreInfo}` }
            >
              <a href={ contactObj.url } target="_self" rel="noreferrer">
                <div className="div-img-icon">
                  <img
                    className="profile-icons"
                    src={ contactObj.image }
                    alt={ contactObj.name }
                  />
                </div>
              </a>
              <div className="div-profile-info">
                <div>
                  { contactObj.name.toUpperCase() }
                </div>
                <a href={ contactObj.url } target="_self" rel="noreferrer">
                  { contactObj.subtitle }
                </a>
              </div>
            </div>
          ))
        }
      </section>
    </aside>
  );
}

export default Profile;
