function initialize() {
	var options = {atmosphere: true, center: [0, 0], zoom: 0};
	var earth = new WE.map('earth_div', options);
	WE.tileLayer('http://tileserver.maptiler.com/nasa/{z}/{x}/{y}.jpg', {
		minZoom: 0,
		maxZoom: 5,
		attribution: 'NASA'
	}).addTo(earth);
	
	// Get the width of the window
	var windowWidth = $(window).width();
	$(window).resize(function() {windowWidth = $(window).width();});
	
	// Add a marker for info, bin a pop up to it, and make it pop up
	var InfoMarker = WE.marker([-40,-150], "invisible").addTo(earth);
	InfoMarker.bindPopup("<center style='font-family:Century Gothic, Arial, Helvetica, sans-serif;font-size:250%;color:#C34A14'>\
		Rotate the globe and select a marker for information</center>");
	InfoMarker.openPopup();
	earth.setView([-10.0, -150])
	
	// Add a marker for Europe
	var EuropeMarker = WE.marker([47.7516, 1.6751]).addTo(earth);
	// Create pop-up
	EuropeMarker.bindPopup("<center style='font-family:Century Gothic, Arial, Helvetica, sans-serif;font-size:250%;color:#C34A14'>\
		<b>Europe:</b> Nearly 1,500 people killed last year by hottest summer on record</center>\
		<a href='more-info/europe.html' style='font-family:Century Gothic, Arial, Helvetica, sans-serif;font-size:20px;color:#04344A'>View more information</a>", screen.width*0.6);
		
	// Centre the pop-up
	EuropeMarker.on('click', function(e){earth.setView([67.7516,1.6751])});
	//EuropeMarker.on('click', function(e){SaharaMarker.closePopup()});
	
	// Add a marker for the Sahara Desert
	var SaharaMarker = WE.marker([23.4162, 13.0]).addTo(earth);
	// Create pop-up
	SaharaMarker.bindPopup("<center style='font-family:Century Gothic, Arial, Helvetica, sans-serif;font-size:250%;color:#C34A14'>\
		<b>Sahara Desert:</b> The Sahara desert has grown by 10%</center>\
		<a href='more-info/sahara.html' type='button' style='font-family:Century Gothic, Arial, Helvetica, sans-serif;font-size:20px;color:#04344A'>View more information</a>", screen.width*0.6);
		
		 //<button type='button' style='font-family:Century Gothic;font-size:20px;color:#04344A'>Justification</button>
	// Centre the pop-up
	SaharaMarker.on('click', function(e){earth.setView([43.4162, 13.0])});
	
	// Add a marker for Australia
	var AustraliaMarker = WE.marker([-25.0, 134.0]).addTo(earth);
	// Create pop-up
	AustraliaMarker.bindPopup("<center style='font-family:Century Gothic, Arial, Helvetica, sans-serif;font-size:250%;color:#C34A14'>\
		<b>Australia:</b> Almost 2,000 homes set ablaze by recent bush fires</center>\
		<a href='more-info/australia.html' type='button' style='font-family:Century Gothic, Arial, Helvetica, sans-serif;font-size:20px;color:#04344A'>View more information</a>", screen.width*0.6);
		
	// Centre the pop-up
	AustraliaMarker.on('click', function(e){earth.setView([-5.0, 134.0])});
	
	// Add a marker for Bangladesh
	var BangladeshMarker = WE.marker([23.6850, 90.3563]).addTo(earth);
	// Create pop-up
	BangladeshMarker.bindPopup("<center style='font-family:Century Gothic, Arial, Helvetica, sans-serif;font-size:250%;color:#C34A14'>\
		<b>Bangladesh:</b> 13.3 million people's homes to be in ruins by 2050</center>\
		<a href='more-info/bangladesh.html' type='button' style='font-family:Century Gothic, Arial, Helvetica, sans-serif;font-size:20px;color:#04344A'>View more information</a>", screen.width*0.6);
		
	// Centre the pop-up
	BangladeshMarker.on('click', function(e){earth.setView([43.6850, 90.3563])});
	
	// Add a marker for Miami Dade
	var MiamiMarker = WE.marker([25.778135, -80.179100]).addTo(earth);
	// Create pop-up
	MiamiMarker.bindPopup("<center style='font-family:Century Gothic, Arial, Helvetica, sans-serif;font-size:250%;color:#C34A14'>\
		<b>Miami-Dade County:</b> Over 25,000 homes could be swamped by the sea in 40 years</center>\
		<a href='more-info/miami.html' type='button' style='font-family:Century Gothic, Arial, Helvetica, sans-serif;font-size:20px;color:#04344A'>View more information</a>", screen.width*0.6);
		
	// Centre the pop-up
	MiamiMarker.on('click', function(e){earth.setView([45.778135, -80.179100])});
	
	// Add a marker for the Amazon Rainforest
	var AmazonMarker = WE.marker([-3.465305 , -62.215881]).addTo(earth);
	// Create pop-up
	AmazonMarker.bindPopup("<center style='font-family:Century Gothic, Arial, Helvetica, sans-serif;font-size:250%;color:#C34A14'>\
		<b>Amazon:</b> Over half of the Amazon Rainforest could be ravaged by 2030</center>\
		<a href='more-info/amazon.html' type='button' style='font-family:Century Gothic, Arial, Helvetica, sans-serif;font-size:20px;color:#04344A'>View more information</a>", screen.width*0.6);
		
	// Centre the pop-up
	AmazonMarker.on('click', function(e){earth.setView([16.6 , -62.215881])});
	
	// Add a marker for the Antarctica
	var AntarcticaMarker = WE.marker([-82.8628 , 135.0000]).addTo(earth);
	// Create pop-up
	AntarcticaMarker.bindPopup("<center style='font-family:Century Gothic, Arial, Helvetica, sans-serif;font-size:250%;color:#C34A14'>\
		<b>Antarctica:</b> Antarctica had their hottest day on record: over 18 &degC</center>\
		<a href='more-info/antarctica.html' type='button' style='font-family:Century Gothic, Arial, Helvetica, sans-serif;font-size:20px;color:#04344A'>View more information</a>", screen.width*0.6);
		
	// Centre the pop-up
	AntarcticaMarker.on('click', function(e){earth.setView([-62.8628 , 135.0000])});
	
	// Ensure only one marker is popped up at a time
	EuropeMarker.on('click', function(e){
		SaharaMarker.closePopup();
		AustraliaMarker.closePopup();
		BangladeshMarker.closePopup();
		MiamiMarker.closePopup();
		AmazonMarker.closePopup();
		AntarcticaMarker.closePopup();
		InfoMarker.closePopup();
	});
		
	SaharaMarker.on('click', function(e){
		EuropeMarker.closePopup();
		AustraliaMarker.closePopup();
		BangladeshMarker.closePopup();
		MiamiMarker.closePopup();
		AmazonMarker.closePopup();
		AntarcticaMarker.closePopup();
		InfoMarker.closePopup();
	});
		
	AustraliaMarker.on('click', function(e){
		EuropeMarker.closePopup();
		SaharaMarker.closePopup();
		BangladeshMarker.closePopup();
		MiamiMarker.closePopup();
		AmazonMarker.closePopup();
		AntarcticaMarker.closePopup();
		InfoMarker.closePopup();
	});
		
	BangladeshMarker.on('click', function(e){
		EuropeMarker.closePopup();
		SaharaMarker.closePopup();
		AustraliaMarker.closePopup();
		MiamiMarker.closePopup();
		AmazonMarker.closePopup();
		AntarcticaMarker.closePopup();
		InfoMarker.closePopup();
	});
		
	MiamiMarker.on('click', function(e){
		EuropeMarker.closePopup();
		SaharaMarker.closePopup();
		AustraliaMarker.closePopup();
		BangladeshMarker.closePopup();
		AmazonMarker.closePopup();
		AntarcticaMarker.closePopup();
		InfoMarker.closePopup();
	});
		
	AmazonMarker.on('click', function(e){
		EuropeMarker.closePopup();
		SaharaMarker.closePopup();
		AustraliaMarker.closePopup();
		BangladeshMarker.closePopup();
		MiamiMarker.closePopup();
		AntarcticaMarker.closePopup();
		InfoMarker.closePopup();
	});
		
	AntarcticaMarker.on('click', function(e){
		EuropeMarker.closePopup();
		SaharaMarker.closePopup();
		AustraliaMarker.closePopup();
		BangladeshMarker.closePopup();
		MiamiMarker.closePopup();
		AmazonMarker.closePopup();
		InfoMarker.closePopup();
	});
}
