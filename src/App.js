
import Card from './components/Card';
import CareerComponent from './components/CareerComponent';
import CertificateComponent from './components/CertificateComponent';
import CoursesComponent from './components/CoursesComponent';
import FAQ from './components/FAQ';
import FeaturesComponent from './components/FeaturesContainer';
import MainComponent from './components/MainComponent';
import PackageComponent from './components/PackageContainer';
import RatingComponent from './components/RatingComponent';
import StatictsComponent from './components/StatictsComponent';
import TechnicalComponent from './components/TechnicalComponent';
function App() {
  return (
    <div className='flex flex-col gap-6' >
      <MainComponent />
      <CareerComponent />
      <StatictsComponent />
      <RatingComponent />
      {/* <Card /> */}
      
      <PackageComponent />
      <FeaturesComponent/>
      {/* <CertificateComponent /> */}
      

      <CoursesComponent />
      <FAQ />
      <TechnicalComponent />

    </div>
  );
}

export default App;
