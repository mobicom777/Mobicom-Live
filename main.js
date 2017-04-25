
	var myOptions = {
		"nativeControlsForTouch": false,
		techOrder: ["azureHtml5JS", "flashSS", "html5FairPlayHLS","silverlightSS", "html5"],
		"logo": { "enabled": false },
		controls: true,
		autoplay: true,
		width: "640",
		height: "400",
		poster: ""
}

	
	 
myPlayer = amp("azuremediaplayer", myOptions);

myPlayer.src([
    { src: "http://mobicom.streaming.mediaservices.windows.net/8d842291-3599-4d36-87fc-f2f34ece2d4e/d6cc5050-3613-46b9-a98a-46ea91cda061.ism/manifest", type: "application/vnd.ms-sstr+xml", streamingFormats: ["SMOOTH", "HLS","HLS-V3", "HLS-V4"]}, 
]);
