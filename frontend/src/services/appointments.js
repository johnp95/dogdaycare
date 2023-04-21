
// const baseURL = 'http://localhost:3001/appointments'

// //Post appointment
// const createApt = (date, newGuest) => {
//   const requestOptions = {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(newGuest)
//   };
  
//   return fetch(`${baseURL}/${date}`, requestOptions)
//     .then(response => response.json());
// }

// //Cancel appointment
// const cancelApt = (date) => {
//   const requestOptions = {
//     method: 'DELETE',
//   };
  
//   return fetch(`${baseURL}/${date}`, requestOptions)
//     .then(response => response.json());
// }

// module.exports = { createApt, cancelApt };
const baseURL = 'http://localhost:3001/appointments'

//Post appointment
const createApt = (date, newGuest) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newGuest)
  };
  
  return fetch(`${baseURL}/${date}`, requestOptions)
    .then(response => response.json());
}

//Cancel appointment
const cancelApt = (date) => {
  const requestOptions = {
    method: 'DELETE',
  };
  
  return fetch(`${baseURL}/${date}`, requestOptions)
    .then(response => response.json());
}

module.exports = {
  createApt: createApt,
  cancelApt: cancelApt
};
