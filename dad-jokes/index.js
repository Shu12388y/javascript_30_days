const api_url = "https://api.api-ninjas.com/v1/dadjokes?limit=10";
const method = "GET";
const apikey = "use you own key";
const buttonSubmit = document.querySelector(".but__data");

const request = new XMLHttpRequest();
request.open(method, api_url, true);
request.setRequestHeader("X-Api-Key", apikey);
// xhr.setRequestHeader("Authorization","12345678910")
request.send();

buttonSubmit.addEventListener("click", function () {
  //   console.log(this.responeText);
  setTimeout(() => {
    let [data] = JSON.parse(request.response);
    const jokeData = document.querySelector(".joke__data");
    jokeData.innerHTML = data.joke;
    console.log(data.joke);
  }, 1000);
});
