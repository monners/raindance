/**
*-------------------------
* MAIN vendor javascript file
*-------------------------
**/


var Raindance = {
	init: function(settings) {
		this.settings = settings;
		this.attachRain();
	},

	settings: {},

	attachRain: function() {
		var rainContainer = document.getElementById(this.settings.rainContainer),
			rain1 = document.createElement("DIV"),
			rain2 = document.createElement("DIV"),
			drops = this.createDrops();

		rain1.id = 'rain1';
		rain2.id = 'rain2';

		for(var i=0; i < drops.length; i++) {
			if (i % 2 === 0) {
				rain1.appendChild(drops[i]);	
			} else {
				rain2.appendChild(drops[i]);
			}
		}

		rainContainer.appendChild(rain1)
		rainContainer.appendChild(rain2);
	},

	createDrops: function() {
		var drops = [],
			num = (this.settings.strength / 2) || 10;

		for(var j=0; j<this.settings.strength * 2; j++) {
			var drop = document.createElement('IMG');
			drop.setAttribute('src', this.settings.imgUrl);
			this.styleDrops(drop);
			drops.push(drop);
		}
		return drops;
	},

	styleDrops: function(drop) {
		var defineProps = {
			ychaos 		: Math.floor((Math.random()*this.settings.height)-(this.settings.height+20)),
			xchaos 		: Math.floor((Math.random())*100),
			distance 	: parseInt(Math.random()*100),
			wchaos 		: Math.round(this.settings.distance)+"px",
			ochaos 		: function() {
							return ((this.distance)/100);
						},
			satchaos 	: (this.settings.distance*10)+"%",  //Saturation and opacity decrease with droplet size to simulate depth.
			colchaos 	: Math.floor(Math.random()*2*this.settings.colorRange - this.settings.colorRange) + this.settings.color
		},
			props = {
				'position': 'absolute',
				'top': defineProps.ychaos + 'px',
				'left': defineProps.xchaos + '%',
				'padding': 0,
				'margin': 0,
				'width': defineProps.wchaos,
				'opacity': defineProps.ochaos(),
				'background-color' : "hsla("+defineProps.colchaos+", "+defineProps.satchaos+", 50%, 1)"

			}


		for(prop in props) {
			drop.style.setProperty(prop, props[prop]);
		}

		return drop;
	}

}
;


Raindance.init({
	rainContainer: 'raindanceContainer',
	imgUrl: 'resources/img/drop.png',
	height:4000,
	width: 1000,
	distance: 10,
	strength: 30,
	color: 17,
	colorRange: 60
});
