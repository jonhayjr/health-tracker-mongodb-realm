import {useState, useEffect} from 'react';

//Import Components
import Header from '../Header/Header';
import Button from '../Button/Button';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import NoteDetail from '../NoteDetail/NoteDetail';

const App = () => {
  const defaultNotes = [{date: '07/31/2021', diet: 'tetett', mood: 'tetetet', symptoms: 'tetetet'}];
  const [showAddTask, setAddTask] = useState(true);
  const [notes, setNotes] = useState(defaultNotes);

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
