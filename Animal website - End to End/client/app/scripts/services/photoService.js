


mainModule.service('photoService' , function() {

	return {
		getMainCarusalPhotos: function () {
			photosData =	[
						{image:"images/Animals/ostrich.jpg", text: "Ostrich" },
						{image:"images/Animals/pelican.jpg", text: "Pelican" },
						{image:"images/Animals/crocodylus.jpg", text: "Crocodylus" },
						{image:"images/Animals/elephant.jpg", text: "Elephant" },
						{image:"images/Animals/ganu.jpg", text: "Ganu" },
						{image:"images/Animals/giraffa.jpg", text: "Giraffa" },
						{image:"images/Animals/gorilla.jpg", text: "Gorilla" },
						{image:"images/Animals/grayWolf.jpg", text: "GrayWolf" },
						{image:"images/Animals/hippopotamus.jpg", text: "Hippopotamus" },
						{image:"images/Animals/iguana.jpg", text: "Iguana" },
						{image:"images/Animals/komodoDragon.jpg", text: "KomodoDragon" },
						{image:"images/Animals/leopard.jpg", text: "Leopard" },
						{image:"images/Animals/lion.jpg", text: "Lion" },
						{image:"images/Animals/nightHeron.jpg", text: "NightHeron" },
						{image:"images/Animals/orangutan.jpg", text: "Orangutan" },
						{image:"images/Animals/ostrich.jpg", text: "Ostrich" },
						{image:"images/Animals/peacock.jpg", text: "Peacock" },
						{image:"images/Animals/pelican.jpg", text: "Pelican" },
						{image:"images/Animals/rhinoceros.jpg", text: "Rhinoceros" },
						{image:"images/Animals/russianTortoise.jpg", text: "Russian Tortoise" },						
						{image:"images/Animals/sandCat.jpg", text: "Sand Cat" },
						{image:"images/Animals/sloth.jpg", text: "Sloth" },
						{image:"images/Animals/zebra.jpg", text: "Zebra" }


	
			];					
			return photosData; 
		},
		getTumbnailPhotos: function () {
			photosData =	[
						"images/Tumbnails/1.jpg",
						"images/Tumbnails/2.jpg",
						"images/Tumbnails/4.jpg"
			];	
			return photosData;
		},
		getAnimalPhoto: function (type) {
			switch (type) {
				case 'Ostrich':          {return "images/Animals/ostrich.jpg";}
				case 'Pelican':          {return  "images/Animals/pelican.jpg";}
				case 'Crocodylus':       {return  "images/Animals/crocodylus.jpg";}
				case 'Elephant':         {return  "images/Animals/elephant.jpg";}
				case 'Ganu':             {return  "images/Animals/ganu.jpg";}
				case 'Gray wolf':        {return "images/Animals/grayWolf.jpg";}
				case 'Gorilla':          {return  "images/Animals/gorilla.jpg";}
				case 'Hippopotamus':     {return  "images/Animals/hippopotamus.jpg";}
				case 'Iguana':           {return  "images/Animals/iguana.jpg";}
				case 'Komodo dragon':    {return  "images/Animals/komodoDragon.jpg";}
				case 'Leopard':          {return  "images/Animals/leopard.jpg";}
				case 'Lion':           	 {return  "images/Animals/lion.jpg";}
				case 'Night heron':   	 {return  "images/Animals/nightHeron.jpg";}
				case 'Orangutan':        {return  "images/Animals/orangutan.jpg";}
				case 'Peacock':          {return  "images/Animals/peacock.jpg";}
				case 'Rhinoceros':       {return  "images/Animals/rhinoceros.jpg";}
				case 'Russian tortoise': {return  "images/Animals/russianTortoise.jpg";}
				case 'Sand cat':         {return  "images/Animals/sandCat.jpg";}
				case 'Sloth':            {return  "images/Animals/sloth.jpg";}
				case 'Zebra':            {return  "images/Animals/zebra.jpg";}
				default :                {return  "images/Animals/Default_Search.jpg";}																		
			}		
		},
		getZooCampPhoto: function () {
			return "images/General/zoo_camp.jpg";
		}	
	}
	
});