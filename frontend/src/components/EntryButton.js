import AppState from "../components/AppState";

const EntryButton = ({onEntered}) => {
        return (
            <div className="entry">
                <button className="entrybutton" onClick={() => onEntered(AppState.selectCal)}> Create Booking</button><br/> 
                <button className="entrybutton" onClick={() => onEntered(AppState.deleteApt)}> Cancel Booking</button>
            </div>
            
        )

}

export default EntryButton