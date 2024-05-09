let API_Key = "AIzaSyA5jG2HokBASwUxwg0s2U-Rql7Bb8uy0Zo";
let OurData;

document.querySelector("#btn").addEventListener("click", SearchData);
async function SearchData() {
  try {
    let InputValue = document.getElementById("Search").value;
    let FetchData = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=52&q=${InputValue}&key=${API_Key}`
    );
    let YoutubeData = await FetchData.json();
    OurData = YoutubeData.items;
    console.log(YoutubeData.items);
    DisplayDataInDom(YoutubeData.items);
    return YoutubeData;
  } catch (error) {
    console.log("Error: ", error);
  }
}
SearchData();

function DisplayDataInDom(OurData) {
  document.querySelector("#Output").innerHTML = "";

  OurData.forEach(function (value) {
    let div = document.createElement("div");
    div.id = "SubDiv";

    let image = document.createElement("img");
    image.src = value.snippet.thumbnails.high.url;

    let title = document.createElement("p");
    title.innerText = value.snippet.title;
    title.id = "Title";

    let channelName = document.createElement("p");
    channelName.innerText = value.snippet.channelTitle;
    channelName.id = "ChannelName";

    div.append(image, title, channelName);
    div.addEventListener("click", function () {
      ShowVideo(value);
    });
    function ShowVideo(value) {
      window.location.href = "./Video.html";
      localStorage.setItem("VideoID", JSON.stringify(value));
    }

    document.querySelector("#Output").append(div);
  });
}

let Homepage = document.getElementById("link");
Homepage.addEventListener("click", function () {
  window.location.href = "./Home.html";
});

// Sure! The q parameter in a YouTube API request stands for "query." It's like asking YouTube to find videos related to a specific topic or keyword.
