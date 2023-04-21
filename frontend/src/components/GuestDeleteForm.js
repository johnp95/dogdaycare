const GuestDeleteForm = ({removeGuest, guestInputChange}) => {
    return (
        <form onSubmit={removeGuest}>
            <div>
                Appointment Date<br/><input className="form" type="date" name="date" autoComplete="off" required="required" onChange={guestInputChange}/><br/>
                Name<br/><input className="form" type="text" name="name" autoComplete="off" required="required" onChange={guestInputChange}/><br/>
                Phone Number<br/><input className="form" type="text" name="number" autoComplete="off" required="required" onChange={guestInputChange}/><br/>
                Email<br/><input className="form" type="text" name="email" autoComplete="off" required="required" onChange={guestInputChange}/><br/>
                Dog's Name<br/><input className="form" type="text" name="dogName" autoComplete="off" required="required" onChange={guestInputChange}/><br/>
                Dog's Breed<br/><input className="form" type="text" name="breed" autoComplete="off" required="required" onChange={guestInputChange}/><br/>
            </div>
            <button type="submit" className="cancelbutton">Submit Info</button><br/>
        </form>
    )
}

export default GuestDeleteForm