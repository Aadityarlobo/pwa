if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      console.log('App is loader');
      navigator.serviceWorker.register('./sw.js')
          .then( () => {
              console.log("Service Worker registerd");
          })
    })
  }


  // Video sources and index
const videos = ["video1.mp4", "video2.mp4", "video3.mp4"];
let currentIndex = 0;

// Like button click handler
const likeButton = document.getElementById("like-button");
likeButton.addEventListener("click", () => {
    // Handle the like action here, e.g., increment a like count
    // You can also save this information on the server
    alert("Video Liked!");
});

// Timer function to switch to the next video after 24 hours
function startVideoRotation() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % videos.length;
        const videoPlayer = document.getElementById("video-player");
        videoPlayer.src = videos[currentIndex];
        videoPlayer.load();
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
}

// Initialize the video rotation timer
startVideoRotation();
