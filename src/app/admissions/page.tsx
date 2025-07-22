import AboutSchool from "../components/AboutSchool";
import Activities from "../components/Activities";
import HeroBanner2 from "../components/AdmFromV/HeroBanner2/HeroBanner2";
import CounsellingForm from "../components/CounsellingForm";
import DiscoverSchool from "../components/DiscoverSchool";
import HeroBanner from "../components/HeroBanner";
import LearningLife from "../components/LearningLife";
import ManipalAdvantage from "../components/ManipalAdvantage";
import Testimonials from "../components/Testimonials";






export default function Home() {
  return (
    <section className="overflow-hidden">
      <HeroBanner2/>
      <AboutSchool/>
      <DiscoverSchool/>
      <LearningLife/>
      <ManipalAdvantage/>
      <Activities/>
      <Testimonials/>
      <CounsellingForm/>
    </section>
  );
}
