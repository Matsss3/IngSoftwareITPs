import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Stats from './components/Stats';
import Services from './components/Services';
import AppointmentForm from './components/AppointmentForm';
import PatientServices from './components/PatientServices';
import Team from './components/Team';
import InsuranceCoverage from './components/InsuranceCoverage';
import UsefulInformation from './components/UsefulInformation';
import News from './components/News';
import LocationAndHours from './components/LocationsAndHours';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutUs/>
      <Stats/>
      <Services/>
      <AppointmentForm/>
      <PatientServices/>
      <Team/>
      <InsuranceCoverage/>
      <UsefulInformation/>
      <News/>
      <LocationAndHours/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
