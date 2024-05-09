function getData() {
  let Data = JSON.parse(localStorage.getItem("VideoID"));
  let Video = document.createElement("iframe");
  Video.src = `https://www.youtube.com/embed/${Data.id.videoId}`;
  Video.id = "VideoStyle";
  Video.width = "560";
  Video.height = "315";
  Video.setAttribute("allowfullscreen", true);

  let title = document.createElement("p");
  title.innerText = Data.snippet.title;
  title.id = "Title";

  let channel = document.createElement("p");
  channel.innerText = Data.snippet.channelTitle;
  channel.id = "ChannelName";

  document.getElementById("OutputData").append(Video, title, channel);
}

setTimeout(() => {
  getData();
}, 1500);

let Homepage = document.getElementById("link");
Homepage.addEventListener("click", function () {
  window.location.href = "./Home.html";
});

let DataDom;
async function Recommendations() {
  try {
    let Data = JSON.parse(localStorage.getItem("VideoID"));
    let VideoTitle = Data.snippet.title;
    let API_Key = "AIzaSyDQDOuM_I7O-hs-Bsm56L7V3woORQIZ9dw";
    let Fetch_Data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${VideoTitle}&key=${API_Key}`
    );
    let OurData = await Fetch_Data.json();
    DataDom = OurData.items;
    console.log(DataDom);
    DisplayDataInDom(DataDom);
  } catch (error) {
    console.log("Error: " + error);
  }
}
setTimeout(() => {
  Recommendations();
}, 2000);

function DisplayDataInDom(DataDom) {
  document.querySelector("#Recommendations").innerHTML = "";

  DataDom.forEach(function (value) {
    let div = document.createElement("div");
    div.id = "SubDiv";

    let video = document.createElement("iframe");
    video.src = `https://www.youtube.com/embed/${value.id.videoId}`;
    video.id = "video_name";
    video.setAttribute("allowfullscreen", true);

    let title = document.createElement("p");
    title.innerText = value.snippet.title;
    title.id = "title_name";

    let channelName = document.createElement("p");
    channelName.innerText = value.snippet.channelTitle;
    channelName.id = "channel_name";

    div.append(video, title, channelName);
    document.querySelector("#Recommendations").append(div);
  });
}
