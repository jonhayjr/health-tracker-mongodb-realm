import './NoteDetail.css';

const NoteDetail = ({notes}) => {

    const noteElements = notes ?
    notes.map((note, index) => 
        ( 
            <div className="card" key={index}>
                <div className="card-header">
                    {note.date}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Diet: {note.diet}</li>
                    <li className="list-group-item">Mood: {note.mood}</li>
                    <li className="list-group-item">Symptoms: {note.symptoms}</li>
                </ul>
            </div>
        )
    )
    : '';

    return (
        <div className="note-container">
          {
             noteElements
          }
        </div>
    )
}

export default NoteDetail
