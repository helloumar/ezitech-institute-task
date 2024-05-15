import Header from "./_components/Header";
import NavigationBar from "./_components/NavigationBar";
import StartInvesting from "./_components/StartInvesting";
import RecommendedCourses from "./_components/RecommendedCourses";
import TrendsAndTechnology from "./_components/TrendsAndTechnology";
import MainSection from "./_components/MainSection";
import LearningAnytime from "./_components/LearningAnytime";
import PerfectInternships from "./_components/PerfectInternships";
import HowItWorks from "./_components/HowItWorks";
import ServicesAward from "./_components/ServicesAward";
import FooterSection from "./_components/FooterSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <div className="w-full bgImage relative">
        <div className="absolute inset-0  w-full  bg-black/50"></div>
        <NavigationBar />
        <MainSection />
      </div>
      <ServicesAward />
      <HowItWorks />
      <TrendsAndTechnology />
      <RecommendedCourses />
      <PerfectInternships />
      <LearningAnytime />
      <StartInvesting />
      <FooterSection />
    </main>
  );
}
