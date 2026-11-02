// Only one clip plays at a time: starting a video pauses the others.
(function () {
  var videos = document.querySelectorAll(".clip video");
  videos.forEach(function (video) {
    video.addEventListener("play", function () {
      videos.forEach(function (other) {
        if (other !== video) other.pause();
      });
    });
  });
})();
