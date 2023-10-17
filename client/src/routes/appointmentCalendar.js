import React, {useState} from "react"
import { GET_APPOINTMENTS, CREATE_APPOINTMENT } from "../utils/mutations"
import { useMutation, useQuery } from '@apollo/client';
import Calendar from "react-calendar"

function AppointmentCalendar() {
    const { loading, error, data } = useQuery(GET_APPOINTMENTS);
  
    const [createAppointment] = useMutation(CREATE_APPOINTMENT);
  
    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [appointmentText, setAppointmentText] = useState('');
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    const handleAddAppointment = () => {
      if (selectedDate && appointmentText.trim() !== '') {
        createAppointment({ variables: { date: selectedDate.toISOString(), text: appointmentText } })
          .then(() => {
            setSelectedDate(null);
            setAppointmentText('');
          })
          .catch((error) => {
            console.error(error);
          });
      }
    };
  
    return (
      <div>
        <h1>Appointment Calendar</h1>
        <div>
          <Calendar onChange={handleDateChange} value={date} />
        </div>
        <div>
          {selectedDate && (
            <div>
              <h2>Appointments for {selectedDate.toLocaleDateString()}</h2>
              <input
                type="text"
                placeholder="Add appointment"
                value={appointmentText}
                onChange={(e) => setAppointmentText(e.target.value)}
              />
              <button onClick={handleAddAppointment}>Add Appointment</button>
              {data.appointments && data.appointments.length > 0 && (
                <ul>
                  {data.appointments.map((appointment) => (
                    <li key={appointment.id}>
                      {appointment.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default AppointmentCalendar;