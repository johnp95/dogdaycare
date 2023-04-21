const Notification = ({message}) => {
    if (message === null) {
        return null
    }

    if (message === "post") {
        return (
            <div className='bookmessage'>
                Your appointment was booked!
            </div>
        )
    }

    if (message === "delete") {
        return (
            <div className='cancelmessage'>
                Your appointment was canceled!
            </div>
        )
    }

    else if (message === "notfound") {
        return (
            <div className='notfoundmessage'>
                No appointment matching your information was found!
            </div>
        )
    }
    
}

export default Notification