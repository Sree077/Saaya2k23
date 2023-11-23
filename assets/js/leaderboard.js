function makeApiCall() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://saaya23dashborad.onrender.com/getPoint', true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        try {
          const data = JSON.parse(xhr.responseText);
          sortAndRenderLeaderboard(data);
        } catch (error) {
          console.error('Error parsing JSON:', error.message);
        }

        // Schedule the next API call after a delay (e.g., 10 seconds)
        setTimeout(makeApiCall, 10000); // 10000 milliseconds = 10 seconds
      } else {
        console.error('API request failed with status:', xhr.status);

        // If an error occurs, retry after a delay (e.g., 10 seconds)
        setTimeout(makeApiCall, 10000); // 10000 milliseconds = 10 seconds
      }
    }
  };

  xhr.send();
}

// Initial API call
makeApiCall();

function sortAndRenderLeaderboard(data) {
  // Sort the points array by point value in descending order
  data.points.sort((a, b) => b.point - a.point);

  const existingContainer = document.getElementById('leaderboard');
  existingContainer.innerHTML = ''; // Clear existing content

  for (let i = 0; i < data.count; i++) {
    const newCardContainer = document.createElement('div');
    newCardContainer.classList.add('card');
    newCardContainer.setAttribute('data-aos', 'fade-up');
    newCardContainer.setAttribute('data-aos-anchor-placement', 'top-bottom');

    const ulElement = document.createElement('ul');

    const departmentLi = document.createElement('li');
    const departmentHeading = document.createElement('h1');
    departmentHeading.textContent = data.points[i].branch;
    departmentLi.appendChild(departmentHeading);

    const pointsLi = document.createElement('li');
    const pointsHeading = document.createElement('h1');
    pointsHeading.classList.add('point');
    pointsHeading.textContent = data.points[i].point;
    pointsLi.appendChild(pointsHeading);

    ulElement.appendChild(departmentLi);
    ulElement.appendChild(pointsLi);

    newCardContainer.appendChild(ulElement);
    existingContainer.appendChild(newCardContainer);
  }
}
