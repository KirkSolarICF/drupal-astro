
let targets = gsap.utils.toArray(".video-box-of-goods video");
// randomize the starting video
let currentIndex = Math.floor(Math.random() * targets.length);
// set the play/pause button
// let playPauseButton = document.getElementById('playPauseButton');
/* this function will play the video at the given index
  1. select the video contaner, span and strong elements
  2. update the span with the current index number
  3. add the 'playing' class to the video
  4. play the video
  5. add an event listener for the 'ended' event
  6. show the play/pause button and attach the play/pause functionality
*/
function playVideo(index) {
  let video = targets[index];
//   let messageContainer = document.querySelector('.videoMessage');
//   let messageSpan = messageContainer.querySelector('span');
//   let videoStatus = messageContainer.querySelector('strong');
  
  // Update the message span with the current index number plus one - oh yeah, there's some fun animation here too! 😎
  let numbersTL = gsap.timeline();
//   numbersTL.fromTo(messageSpan, {scale: 1.5, backgroundColor:'rgba(0, 0, 0, 0.5)',color:'white'}, {scale: 1, backgroundColor:'transparent',color:'black', duration: 4, ease:'back'})
    // .add(() => messageSpan.textContent = index + 1, "<")
  
  video.classList.add('playing');
  
  video.play();
   video.playbackRate = 1;
//   videoStatus.textContent = 'playing';
  video.addEventListener('ended', vidHandler, false);
  // Show the play/pause button and attach the play/pause functionality
  // playPauseButton.style.display = 'block';
//   playPauseButton.innerText = 'Pause';
  // playPauseButton.onclick = () => {
  //   if (video.paused) {
  //     video.play();
  //   //   videoStatus.textContent = 'playing';
  //     playPauseButton.innerText = 'Pause';
  //   } else {
  //     video.pause();
  //   //   videoStatus.textContent = 'paused';
  //     playPauseButton.innerText = 'Play';
  //   }
  // };
}

function vidHandler(e) {
   // Remove the 'playing' class from the video that just ended
  e.target.classList.remove('playing');
  currentIndex = (currentIndex + 1) % targets.length;
  playVideo(currentIndex);
}
  
// stagger the videos in, then run the playVideo function

let staggerVideosTimeline = gsap.timeline({delay: .5});
// call the playVideo function with the current index
staggerVideosTimeline.from(targets, {duration: .5, opacity: 0, stagger: 0.2, onComplete: playVideo, onCompleteParams: [currentIndex]});