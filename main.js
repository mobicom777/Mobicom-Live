
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
    { src: "http://mobicom.streaming.mediaservices.windows.net/81a420aa-9da0-443f-abc0-699231d716e6/Janam Janam Lyrics - Dilwale.ism/manifest", type: "application/vnd.ms-sstr+xml", streamingFormats: ["SMOOTH", "HLS","HLS-V3", "HLS-V4"]}, 
]);
