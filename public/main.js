console.log("Rest API assignment");

let searchButton = document.querySelector("#search");

searchButton.addEventListener("click", () => {
  console.log("button pressed");
  useApiRequest();
});

async function useApiRequest() {
  let API_KEY = "zfxMjQ8TxNyZnnla927UjbnFydB3WERxp0iCjfkH"; //this is my key
  let selectedDate = document.querySelector("#datePicker").value; //this is where it gets the selected date
  let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  //once we have a selected date, we request it
  if (selectedDate) {
    apiUrl += `&date=${selectedDate}`;
  }

  try {
    let response = await fetch(apiUrl); // make a request
    console.log(response);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    let data = await response.json(); // get the data
    console.log(data);

    useApiData(data);
  } catch (error) {
    console.error("Error fetching data: ", error);
    document.querySelector("#content").innerHTML = "Please select a past date. Try again.";
  }
}

function useApiData(data) {
  document.querySelector("#content").innerHTML = `<p>${data.explanation}</p><img src="${data.url}" alt="NASA Image of the Day">`;
}
