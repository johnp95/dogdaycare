const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AppointmentService = require('./frontend/src/services/appointments');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.put('/appointments/:date', (req, res) => {
  const date = req.params.date;
  const newGuest = req.body;
  AppointmentService.createApt(date, newGuest)
    .then(result => res.send(result))
    .catch(error => res.status(500).send(error));
});

app.delete('/appointments/:date', (req, res) => {
  const date = req.params.date;
  AppointmentService.cancelApt(date)
    .then(result => res.send(result))
    .catch(error => res.status(500).send(error));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});