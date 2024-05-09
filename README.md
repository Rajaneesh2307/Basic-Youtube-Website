# Basic-Youtube-Website
Basic-Youtube-Website-Using-HTML-CSS-JAVASCRIPT
The head section includes meta tags, links to the CSS stylesheet and icon fonts, and the title of the document.
The body section contains several div elements, each with a specific purpose:
The Main div includes the YouTube logo, a search bar, a microphone icon for voice search, a notifications icon, and a user profile image.
The OutputData div is likely where the video data fetched from the YouTube API will be displayed.
The like, Description, and Recommendations divs seem to be for user interactions such as liking or disliking the video, displaying the video description, and showing recommended videos, respectively.
The script tag at the end links to an external JavaScript module named Video.js, which presumably contains the JavaScript code to fetch and display the video data.
It seems like you’re working with the YouTube Data API. The code you’ve shared is a JavaScript function that fetches data from the YouTube API based on a search query, and then displays the results on a webpage.

The q parameter in the YouTube API request indeed stands for “query”. It’s used to find videos related to a specific topic or keyword. When a user inputs a value in the search field and clicks the button, the SearchData function is triggered. This function fetches data from the YouTube API, where the search query (q) is the value input by the user.

The fetched data is then passed to the DisplayDataInDom function, which creates new HTML elements for each item in the data, including an image thumbnail, title, and channel name. These elements are appended to a parent div, which is then added to the #Output element in the DOM.

The ShowVideo function is attached as a click event listener to each div. When a div is clicked, it redirects the user to a new page and stores the video data in the local storage.

The Homepage event listener redirects the user to the home page when clicked.

Please remember to keep your API key secure and not share it publicly to prevent unauthorized usage. If you have any more questions or need further clarification, feel free to ask!
