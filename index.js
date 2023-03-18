// Cat Meme
const img = document.querySelector("img");
const search = document.querySelector("#search");
const searchButton = document.querySelector("#searchButton");

async function getCats() {
  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=NJbJWO0cdfaTh7s450SQXaXaJZnWOPWZ&s=cats",
      { mode: "cors" }
    );
    const catData = await response.json();
    img.src = catData.data.images.original.url;
  } catch (error) {
    console.log(error);
    img.src = "";
  }
}

async function getInput(input) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=NJbJWO0cdfaTh7s450SQXaXaJZnWOPWZ&s=${input.value}`,
      { mode: "cors" }
    );
    const inputData = await response.json();
    img.src = inputData.data.images.original.url;
  } catch (error) {
    console.log(error);
    img.src = "";
  }
}

getCats();

searchButton.addEventListener("click", () => {
  if (search.value.length === 0) {
    getCats();
  } else {
    getInput(search);
  }
});

// Anime Quote

fetch("https://animechan.vercel.app/api/random")
  .then(function (response) {
    return response.json();
  })
  .then(function (quote) {
    console.log(quote);
  });
