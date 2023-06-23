// we can use async await function to fetch an api

// for example
const fun = async () => {
  try {
    const setHeader = {
      // here we can set the headers
      headers: {
        Accept: "application/json",
      },
    };
    const res = await fetch("url of the api", setHeader); // here we fetch the api
    const data = await res.json(); // we get the response
    console.log(data); // we get the data and we can use in html
  } catch (err) {
    console.log(err);
  }
};
