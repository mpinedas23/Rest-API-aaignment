console.log("Rest API assignment");


let searchButton = document.querySelector("#search")

searchButton.addEventListener("click",()=>{
  console.log("button pressed")
  useApiRequest()
})
async function useApiRequest() {
  let API_KEY = "zfxMjQ8TxNyZnnla927UjbnFydB3WERxp0iCjfkH"; //save API key
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`); //make a request
  console.log(response)

  let data  = await response.json()  //get the data
  console.log(data)

  useApiData(data)

}


function useApiData(data){
 document.querySelector("#content").innerHTML += data.explanation
 document.querySelector("#content").innerHTML += `<img src="${data.url}">`
}