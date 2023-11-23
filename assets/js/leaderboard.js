function Click() {
    fetch('https://saaya23dashborad.onrender.com/getPoint')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Assuming the response is in JSON format
      })
      .then(data => {
        // Handle the data from the API
        console.log(data);
      })
      .catch(error => {
        // Handle errors during the fetch
        console.error('There was a problem with the fetch operation:', error);
      });
  };
  