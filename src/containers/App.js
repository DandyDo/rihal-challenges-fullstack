import './App.css';
import Classes from '../components/Classes';

function App() {
  const requestStudents = () => {
    fetch('http://localhost:3000/students')
      .then(response => response.json())
      .then(students => console.log(students))
      .catch(err => console.log(err));
  }
  requestStudents();

  // const studentsPerClass = () => {
  //   
  // }

  return (
    <div className="App">
      <Classes />
    </div>
  );
}

export default App;
