jwplayer("my-video").setup({
	file: "videoURL",
	image: "https://prod-ent-live-gm.jiocinema.com/hls/live/2100299/hd_akamai_androidmob_avc_eng_ipl_s1_m1010424/master.m3u8",
	primary: "html5",
	advertising: {
		client: "vast",
	schedule: {
		"myAds":{
		"offset":"pre",
		"tag":"https://ad-stage.visiblemeasures.com/a/2/?pl=218579"}
		}
	}
});
