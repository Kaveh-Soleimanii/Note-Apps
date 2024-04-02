
function NoteSortApp({ sortBy, onSort }) {
    return (
        <div className="NoteSortApp">
            <select value={sortBy} onChange={onSort} className="childreNoteSortApp">
                <option value="latest">Sort based on latest notes</option>
                <option value="earliest">Sort based on earliest notes</option>
                <option value="completed">Sort based on completed notes</option>
            </select>
        </div>
    )
}

export default NoteSortApp