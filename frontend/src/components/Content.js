import EntryButton from "./EntryButton";
import AppState from "./AppState";
import GuestCreateForm from "./GuestCreateForm";
import GuestDeleteForm from "./GuestDeleteForm";
import Calendar from "react-calendar";

const Content = ({dateValue, onDateChange, onEntered, isEntered, addGuest, removeGuest, guestInputChange, currDate, maxDate, dateSelected}) => {
    const now = new Date()
    switch (isEntered) {
        case AppState.notEntered:
            return (
                <div>
                    <EntryButton onEntered={onEntered} />
                </div>
                
            )
        case AppState.selectCal:
            return (
                <div>
                    <h2>Create Booking</h2>
                    <div>
                        <h3>Select a Date:</h3>
                        <Calendar dateValue={dateValue} onChange={onDateChange} minDate={currDate} maxDate={new Date(maxDate)}/>
                    </div>
                    <div>
                        <GuestCreateForm dateValue={dateValue} addGuest={addGuest} guestInputChange={guestInputChange} dateSelected={dateSelected}/>
                    </div>
                    
                </div>
            )
        case AppState.deleteApt:
            return (
                <div>
                    <h2>Cancel Booking</h2>
                    <h3>Enter Guest Information:</h3>
                    <GuestDeleteForm  removeGuest={removeGuest} guestInputChange={guestInputChange}/>
                </div>
            )
    }
}

export default Content