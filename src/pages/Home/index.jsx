import MainCard from '../../components/MainCard';
import Profile from '../../components/Profile';
import './index.css';

function Home() {
  return (
    <section className="section-home">
      <Profile />
      <MainCard />
    </section>
  );
}

export default Home;
