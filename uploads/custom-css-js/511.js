<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
function initMap() {
	let map;
	let osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';	
	let	osmUrl = "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png";
	let	osmAttrib = "© " + osmLink + "";
	let	ignattrib = "<a href=https://geoservices.ign.fr/>IGN</a>";
	let	osmMap = L.tileLayer(osmUrl, { attribution: osmAttrib });	
	let osmMap2 = L.tileLayer('https://data.geopf.fr/wmts?'+
		'&REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&TILEMATRIXSET=PM'+
		'&LAYER={ignLayer}&STYLE={style}&FORMAT={format}'+
		'&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}',
		{
			ignApiKey: 'decouverte',
			ignLayer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2',
			style: 'normal',
			format: 'image/png',
			service: 'WMTS',
			opacity: 0.4
		});
		
	// Photographies aériennes 
	let OrthoIGN = L.tileLayer('https://data.geopf.fr/wmts?'+
		'&REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&TILEMATRIXSET=PM'+
		'&LAYER={ignLayer}&STYLE={style}&FORMAT={format}'+
		'&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}',
		{
			ignApiKey: 'decouverte',
			ignLayer: 'ORTHOIMAGERY.ORTHOPHOTOS',
			style: 'normal',
			format: 'image/jpeg',
			service: 'WMTS',
			attribution: ignattrib
		});
	let ignOsm= L.layerGroup([OrthoIGN,osmMap2]);
	let baseLayers = {
		"plan": osmMap,
		"satellite":ignOsm
	};
	map=L.map("siteMap", {
		layers: [ignOsm], 
		zoomControl: false
	}).setView([48.51667, -2.78333], 9);
	
	L.control.layers(baseLayers, null, {collapsed:false}).setPosition('bottomleft').addTo(map);
	let scale = L.control.scale({
		position: "topright",
	});
	scale.addTo(map); 
	L.control.zoom({
		position: "topright",
	}).addTo(map);
	var iconSUrl = ImgDef.markerS;
	let iconS=L.icon({
		iconUrl:iconSUrl,
		iconSize: [26, 40],
		iconAnchor: [13, 40],
		popupAnchor: [0, -40]
	})
    var marker = L.marker([48.637674347284, -2.4783618196398],{
		icon:iconS
	}).addTo(map)
        .bindPopup('<h4>Erquy - Les Lacs Bleus</h4>'+
						'<p>Parking au port<br>'+
						'<a href="	https://www.google.com/maps/place/Site+d\'escalade+des+Lacs+Bleus/@48.6380309,-2.4782376,188m/data=!3m1!1e3!4m6!3m5!1s0x480e0b621a62ce7b:0xf00d468a1e884aa2!8m2!3d48.6378725!4d-2.4782367!16s%2Fg%2F11h3z473qn?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Voir sur google maps</a></p>'
		);
	 var marker2 = L.marker([48.651109346554, -2.4407120057222],{
		icon:iconS
	}).addTo(map)
        .bindPopup('<h4>Erquy - Fosse Eyrand</h4>'+
						'<p>Parking le long de la route avant le centre de vacances Rozarmor<br>'+
						'<a href="	//maps.app.goo.gl/DdxW8ijSadwv1m7w7" target="_blank" rel="noopener noreferrer">Voir sur google maps</a></p>'
		);
	  var marker3 = L.marker([48.654691369272, -2.3732556130899],{
		icon:iconS
	}).addTo(map)
        .bindPopup('<h4>Frehel - Le Routin</h4>'+
						'<p>Parking le long de la rd34 au carrefour vers Pléhérel<br>'+
						'<a href="	https://www.google.com/maps/place/Routin-Courcoux/@48.6455788,-2.440718,6016m/data=!3m1!1e3!4m6!3m5!1s0x480e75f9d846402d:0x2c218d6e14cf5deb!8m2!3d48.6547434!4d-2.3733203!16s%2Fg%2F11sx54cw6w?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Voir sur google maps</a></p>'
		);
	 var marker4 = L.marker([48.443436692324, -2.0376098155975],{
		icon:iconS
	}).addTo(map)
        .bindPopup('<h4>Lanvallay - Abbaye de Léhon</h4>'+
						'<p>Parking le long de la rivière près du port<br>'+
						'<a href="	https://maps.app.goo.gl/RxJfxQFuUjcP7Rde9" target="_blank" rel="noopener noreferrer">Voir sur google maps</a></p>'
		);
	 var marker5 = L.marker([48.463068895986, -2.0259582996368],{
		icon:iconS
	}).addTo(map)
        .bindPopup('<h4>Lanvallay - La Vieille Rivière</h4>'+
						'<p>Parking à la maison de la Rance<br>'+
						'<a href="	https://maps.app.goo.gl/Kn6R6SGoeSr34CpX7" target="_blank" rel="noopener noreferrer">Voir sur google maps</a></p>'
		);
	 var marker6 = L.marker([48.192034352239, -2.622612555945],{
		icon:iconS
	}).addTo(map)
        .bindPopup('<h4>La Prenessaye - Moulin du Vicomte</h4>'+
						'<p>Parking à côté de la carrière<br>'+
						'<a href="	https://maps.app.goo.gl/mX2DT9XyBgSp2poRA" target="_blank" rel="noopener noreferrer">Voir sur google maps</a></p>'
		);
	 var marker7 = L.marker([48.525956051369, -3.3586084842682],{
		icon:iconS
	}).addTo(map)
        .bindPopup('<h4>Belle-Isle / Louargat - Rocher de la Pie</h4>'+
						'<p>Parking au début du sentier sur la D22<br>'+
						'<a href="	https://maps.app.goo.gl/LdYC96T4XbiVq3rf6" target="_blank" rel="noopener noreferrer">Voir sur google maps</a></p>'
		);
	 var marker8 = L.marker([48.674663309033, -3.0447412755503],{
		icon:iconS
	}).addTo(map)
        .bindPopup('<h4>Tremeven - Saint-Jacques</h4>'+
						'<p>Parking hameau de Saint-Jacques<br>'+
						'<a href="	https://maps.app.goo.gl/Um482suAJ6fMo8M87" target="_blank" rel="noopener noreferrer">Voir sur google maps</a></p>'
		);
	 var marker9 = L.marker([48.817912295773, -3.0757067577184],{
		icon:iconS
	}).addTo(map)
        .bindPopup('<h4>Ploubazlanec - Loguivy -Le Mélus</h4>'+
						'<p>Parking dans le lotissement<br>'+
						'<a href="	https://maps.app.goo.gl/wfKf2hKvCL32Ennq7" target="_blank" rel="noopener noreferrer">Voir sur google maps</a></p>'
		);
	 var marker10 = L.marker([48.855155942804, -3.2477630403055],{
		icon:iconS
	}).addTo(map)
        .bindPopup('<h4>Plougrescant - Porz Scaff</h4>'+
						'<p><br>'+
						'<a href="	https://maps.app.goo.gl/6gFBntNzXJkMauMg8" target="_blank" rel="noopener noreferrer">Voir sur google maps</a></p>'
		);
	 var marker11 = L.marker([48.856627033857, -3.2473941663272],{
		icon:iconS
	}).addTo(map)
        .bindPopup('<h4>Plougrescant - Porz Scaff</h4>'+
						'<p><br>'+
						'<a href="	https://maps.app.goo.gl/YhXWLSDKkKWQAa43A" target="_blank" rel="noopener noreferrer">Voir sur google maps</a></p>'
		);
	 var marker12 = L.marker([48.870264659288, -3.2240214550964],{
		icon:iconS
	}).addTo(map)
        .bindPopup('<h4>Plougrescant - Pointe du Château</h4>'+
						'<p><br>'+
						'<a href="	https://maps.app.goo.gl/hr8mGXqnkunYPa3e9" target="_blank" rel="noopener noreferrer">Voir sur google maps</a></p>'
		);
	 var marker13 = L.marker([48.867553654674, -3.2226146485819],{
		icon:iconS
	}).addTo(map)
        .bindPopup('<h4>Plougrescant - Porz Bugale / Kericu</h4>'+
						'<p>Parking de Porz Hir<br>'+
						'<a href="	https://maps.app.goo.gl/1aLLUE7YSLTVyZyD7" target="_blank" rel="noopener noreferrer">Voir sur google maps</a></p>'
		);
	 var marker14 = L.marker([48.865936292042, -3.2175165747773],{
		icon:iconS
	}).addTo(map)
        .bindPopup('<h4>Plougrescant - Porz Hir</h4>'+
						'<p>Parking de Porz Hir<br>'+
						'<a href="	https://maps.app.goo.gl/5uEXjp3qBu8sqfKH7" target="_blank" rel="noopener noreferrer">Voir sur google maps</a></p>'
		);
	
	
        
}
document.addEventListener('DOMContentLoaded', initMap);


</script>
<!-- end Simple Custom CSS and JS -->
