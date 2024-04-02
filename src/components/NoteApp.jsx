import AddNewNote from "./AddNewNote"
import NoteList from "./NoteList"
import NoteSortApp from "./NoteSortApp"
import NoteStatus from "./NoteStatus"

function NoteApp({ sortBy , onSort}) {
    return (
        <div className="note-app">
            <AddNewNote />
            <div className="note-container">
                <NoteSortApp sortBy={sortBy} onSort={onSort}/>
                <NoteStatus />
                <NoteList sortBy={sortBy} />
            </div>
        </div>
    )
}

export default NoteApp