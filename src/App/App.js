import {useState} from 'react';

//Import Components
import Header from '../Header/Header';
import Button from '../Button/Button';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import NoteDetail from '../NoteDetail/NoteDetail';

const App = () => {

  const [showAddTask, setAddTask] = useState(true);
  const [notes, setNotes] = useState([]);

  //Function to toggle show AddTaskForm
  const toggleShowAddTask = () => {
    setAddTask(!showAddTask);
  }

  //Function to add note to notes 
  const addNote = (note) => {
    //Update notes based on previous state
    setNotes(prevState => [...prevState, note]);
  }

  return (
    <div>
      <Header/>
      <Button onClick={toggleShowAddTask} showAddTask={showAddTask}/>
      {
        showAddTask && <Form addNote={addNote}/>
      }
      <NoteDetail notes={notes}/>
      <Footer/>
    </div>
  );
}

export default App;
