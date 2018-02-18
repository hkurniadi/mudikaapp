// This API is still broken

import db from '../models/events.json'

const eventsAPI = {
  getEvents: () => {
    fetch(db, {
      accept: 'application/json'
    }).then((response) => {
      console.log(response.json());
      return response;
    })
  }
}

export default eventsAPI;