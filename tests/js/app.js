$(document).ready(function(){

	$('#player').videre({
		video: {
			quality: [
				{
					label: '720p',
					src: 'https://vjs.zencdn.net/v/oceans.mp4?HD'
				},
				{
					label: '360p',
					src: 'https://vjs.zencdn.net/v/oceans.mp4?SD'
				},
				{
					label: '240p',
					src: 'https://vjs.zencdn.net/v/oceans.mp4?SD'
				}
			],
			title: 'jQueryScript.Net'
		},
		dimensions: 1280
	});

});