import './App.css';
import MainInfo from './education/MainInfo';
import Education from './education/Education';
// import Expirients from './education/Expirience';
import Expirients from './education/Skills';
import Button from './education/Button';
import './education/Button/App.scss';

function App() {
  const personalData = {
    fullName: 'LeVaSiK BoIcKo',
    birthYear: 2005,
    job: 'Full-stack developer',
    university: 'It-academy & COM Tehno',
    lastWorkPlace: 'Hasanat group',

    desiredPosition: 'Python developer',
    lastWorkYears: '2020-2021',
    skills: ['HTML', "CSS", "JavaScript", "Python", "C#", "React", "Django"],
    hobbies: ['Swimming', 'Work-Out', 'Russian fight'],
  };

  function getJobExp(data){
    const years = data.split('-');
    return Number(years[1]) - Number(years[0]);
  };

  const data = (
    <div className='App'>
      <button className='btn'>CLICK ME</button>
      <nav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Home</a></li>
          <li><a href="">Home</a></li>
          <li><a href="">Home</a></li>
          <li><a href="">Home</a></li>
        </ul>
      </nav>


      <Button/>
      <MainInfo
        fullName={personalData.fullName}
        age={2021 - personalData.birthYear}
        desiredPosition={personalData.desiredPosition}
      />
      <Education
        university={personalData.university}
        lastWorkYear={personalData.lastWorkYears}
      />
      <Expirients
        lastWorkPlace={personalData.lastWorkPlace}
        expirient={getJobExp(personalData.lastWorkYears)}
        skills={personalData.skills}
      />
    </div>
  );

  return data;

};
export default App;
