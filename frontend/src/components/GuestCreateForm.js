import EntryButton from "./EntryButton"

const GuestCreateForm = ({dateValue, addGuest, guestInputChange, dateSelected}) => {
    if (dateSelected){
        return (
            <div className="createformcontainer">
                <h3>Enter Appointment Information for {dateValue.toLocaleDateString()}</h3>
                <form onSubmit={addGuest}>
                    <div>
                        Name<br/><input className="form" type="text" name="name" autoComplete="off" required="required" onChange={guestInputChange}/><br/>
                        Phone Number<br/><input className="form" type="text" name="number" autoComplete="off" required="required" onChange={guestInputChange}/><br/>
                        Email<br/><input className="form" type="text" name="email" autoComplete="off" required="required" onChange={guestInputChange}/><br/>
                        Dog's Name<br/><input className="form" type="text" name="dogName" autoComplete="off" required="required" onChange={guestInputChange}/><br/>
                        Dog's Breed<br/><input className="form" type="text" name="breed" autoComplete="off" required="required" onChange={guestInputChange}/><br/>
                    </div>
                    <button className="submitbutton" type="submit">Submit Info</button><br/>
                </form>
            </div>
            
        )
    }
    
}

export default GuestCreateForm