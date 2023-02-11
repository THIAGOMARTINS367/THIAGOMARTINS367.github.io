import './index.css';
import data from '../../database/data.json';

function Profile() {
  const { profile, profile: { description } } = data;
  return (
    <section className="section-profile">
      <div className="div-description">
        { 
          description.paragraphs.map((paragraph) => (
            <p key={ paragraph } className="p-description" dangerouslySetInnerHTML={{__html: paragraph}}></p>
          ))
        }
      </div>

      <section className="section-informations">
        <div>
          <img src={ profile.picture } alt="imagem de perfil" />
        </div>
        <div>
          {
            profile.contacts.map((contactObj) => (
              <div key={ contactObj.name } className="div-profile-icons">
                <a href={ contactObj.url } target="_blank" rel="noreferrer">
                  <img className="profile-icons" src={ contactObj.image } alt={ contactObj.name } />
                </a>
              </div>
            ))
          }
        </div>
      </section>
    </section>
  );
}

export default Profile;
