import {useState} from 'react';
import { Switch, Route, HashRouter} from 'react-router-dom';

//Import Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notes from '../Notes/Notes';
import UpdateNote from '../UpdateNote/UpdateNote';

const App = () => {

  const [showAddTask, setAddTask] = useState(true);

  //Function to toggle show AddTaskForm
  const toggleShowAddTask = () => {
    setAddTask(!showAddTask);
  }

  return (
    <div>
      <Header/>
      <HashRouter>
          <Switch>
            <Route exact path="/" render={(props) => (<Notes onClick={toggleShowAddTask} showAddTask={showAddTask}/>)}/>
            <Route exact path="/notes/:id/update" component={UpdateNote}/>
          </Switch>
      </HashRouter>
      <Footer/>
    </div>
  );
}

export default App;
