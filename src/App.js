
import Card from './components/Card';
import CareerComponent from './components/CareerComponent';
import MainComponent from './components/MainComponent';
import RatingComponent from './components/RatingComponent';
import StatictsComponent from './components/StatictsComponent';
function App() {
  return (
    <div className='flex flex-col gap-6' >
      <MainComponent />
      <CareerComponent />
      <StatictsComponent />
      <RatingComponent />
      {/* <Card /> */}
    </div>
  );
}

export default App;
