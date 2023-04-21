import { useState } from "react"
import AppointmentService from "./services/appointments"
import Notification from "./components/Notification";
import Content from "./components/Content";
import AppState from "./components/AppState";
import "./index.css"

const App = () => {

  const currDate = new Date();
  currDate.setHours(0,0,0,0);
  const maxDate = new Date(currDate.getFullYear(), currDate.getMonth() + 3, currDate.getDay());
  const blankGuest = {
    date: "",
    name: "",
    number: "",
    email: "",
    dogName: "",
    breed: ""
  }

  const [dateValue, setValue] = useState(currDate);
  const [isEntered, setEntered] = useState(AppState.notEntered);
  const [dateSelected, setSelected] = useState(false);
  const [message, setMessage] = useState(null);
  const [guestInfo, setGuestInfo] = useState(blankGuest);
  
  const onEntered = (state) => {
    switch (state) {
      case AppState.notEntered:
        setEntered(AppState.notEntered)
        break;
      case AppState.selectCal:
        setEntered(AppState.selectCal)
        break;
      case AppState.deleteApt: 
        setEntered(AppState.deleteApt)
        break;
    }
  }

  const onDateChange = (nextDate) => {
    if ((dateValue.getTime() === nextDate.getTime())){
      setSelected(!dateSelected)
    }
    else {
      setSelected(true)
    }
    setValue(nextDate)
  }

  const guestInputChange = (event) => {

    setGuestInfo({
      ...guestInfo,
      [event.target.name]: event.target.value,
      date: dateValue.getTime()
    })
  }

  const addGuest = (event) => {
    event.preventDefault();
  
    fetch('/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(guestInfo),
    })
      .then(() => {
        setGuestInfo(blankGuest);
        onEntered(AppState.notEntered);
        setMessage('post');
        setTimeout(() => {
          setMessage(null);
        }, 2500);
      })
      .catch((error) => {
        console.error(error);
        setMessage('error');
        setTimeout(() => {
          setMessage(null);
        }, 2500);
      });
  };
  
  const removeGuest = (event) => {
    event.preventDefault();
  
    fetch(`/api/appointments/${guestInfo.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setGuestInfo(blankGuest);
        onEntered(AppState.notEntered);
        setMessage('delete');
        setTimeout(() => {
          setMessage(null);
        }, 2500);
      })
      .catch((error) => {
        console.error(error);
        setMessage('error');
        setTimeout(() => {
          setMessage(null);
        }, 2500);
      });
  };
  
  return (
      <div>
        <Notification message={message} />
        <div className="titleflexbox">
          <div>
          <h1>Welcome to the Dog Daycare!</h1>
          </div>
            
        </div>
          
          <div className="contentflexbox">
            <div className="contentbox">
            <Content dateValue={dateValue} onDateChange={onDateChange} onEntered={onEntered} isEntered={isEntered} addGuest={addGuest} removeGuest={removeGuest} guestInputChange={guestInputChange} currDate={currDate} maxDate={maxDate} dateSelected={dateSelected}/>
            </div>
          </div>
      </div>
  )
}

export default App