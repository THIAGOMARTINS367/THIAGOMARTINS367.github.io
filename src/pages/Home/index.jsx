import Profile from "../../components/Profile";
import Projects from "../../components/Projects";
import './index.css';

function Home() {
  return (
    <section className="section-home">
      <Profile />
      <Projects />
    </section>
  );
}

export default Home;
