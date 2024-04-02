var video;

window.addEventListener("load", function() {
	// console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	// console.log("Auto play is set to " + video.autoplay);
	// console.log("Loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	// console.log("Play Video");
	video.play();
	let volume = document.querySelector("#volume");
	let slider = document.querySelector("#slider");
	volume.innerHTML = slider.value;
	video.volume = slider.value/100;
});

document.querySelector("#pause").addEventListener("click", function() {
	// console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.1;
	console.log(video.playbackRate);
	
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.1;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	let volume = document.querySelector("#volume");
	let slider = document.querySelector("#slider");
	
	video.volume = slider.value/100;
	volume.innerHTML = slider.value;
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "oldSchool";
	video.style.display = "block";
	video.style.margin = "0 auto";
});

document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video";
});
