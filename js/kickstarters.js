(function($) {
	var backers = {
		_names: [
		"Jason Kodat",
		"Aaron Dunn",
		"Aaron Weltz",
		"Adam Eliason",
		"Adam Lepczak",
		"Aileen Miles",
		"AJ Dellinger",
		"Alex L.",
		"Alex Lea",
		"Alexandra Walters",
		"Alexis Klancir",
		"Alina",
		"Alison Watch",
		"Allan Leahy",
		"Allen Khorasani",
		"Allison Stubbmann",
		"Alo Konsen",
		"Amanda Bray",
		"Amanda Elliott",
		"Amy H. Sturgis",
		"Amy Thompson",
		"Amy-Elizabeth Perrino",
		"Andrea Fuller",
		"Andrew Kadikian",
		"Andrew Kennelly",
		"Andrew Leigh",
		"Andrew Wilson",
		"Ang-Ella",
		"Angela C Sutherland",
		"Angelica Gauges",
		"Ann and Phelim Media LLC",
		"Ann Lowenstein",
		"Anna Lee",
		"Anne Griffin",
		"Annette Amaral",
		"Annette Freeman",
		"annette pappas",
		"Annie Borresen",
		"Anthony Bertorelli",
		"Anthony Craig",
		"Antoinette Jego",
		"Ariel Sarousi",
		"Arwen Morton",
		"Ashley Lutz",
		"Bad Monkey Productions",
		"Barbara Kurek",
		"Barbara Lettich",
		"Barbara Monahan",
		"Barbara Morgan",
		"Barbara Sheaffer",
		"Barney",
		"Baron von Darrin",
		"Bart delCimmuto",
		"Ben Holmes",
		"Benjamin Abrams",
		"Benjamin Wolf",
		"Beth Larsen",
		"Betty Parks",
		"Bill Mcniff",
		"Bill Moore",
		"Blake Morris",
		"Bonnie",
		"Brandon Hill",
		"Brandon Whaley",
		"Breah Alward",
		"Brenda Albrecht",
		"Brenda Boisjolie Arce",
		"Brian Brauner",
		"Brian Greene",
		"Brian J. Gladish",
		"Brian Sippel",
		"Brian Woon",
		"Brittany Carranza",
		"Brittany Conklin",
		"Brooke Azumi",
		"Bruce McCormack",
		"Bruce Tanner",
		"Bryan Lee Briggs",
		"Bryce Dilger",
		"C. Campbell",
		"C. Williams",
		"Callie Brooks",
		"Candace Passino",
		"candi kaya",
		"Cara Kowalski",
		"Carie Saxton",
		"Carin",
		"Carlton Solle",
		"Carmen Camacho",
		"Carol Giles-Straight",
		"Carolyn Erfurth",
		"Carolyn Stewart",
		"Cat Lewis",
		"catherine ivascyn",
		"Cathy Brooks",
		"Chad Z. Hower",
		"Charissa Cotrill",
		"Charles Bilodeau",
		"charles bishop",
		"Charlie Mencke",
		"Charlie Vick",
		"Chaz Cirame",
		"Cheri Deblaere",
		"Cheryl Wells",
		"Chiapei Huang",
		"Chip Andre",
		"Chris Velenik",
		"Chris Zuchowski",
		"Christine Morrissey",
		"Christopher Burns",
		"Christopher Rufo",
		"Christopher Tenney",
		"Christopher Vu",
		"Christy Vanest",
		"Chuck Cilek",
		"Cindy Boling",
		"Cindy Hayden",
		"Claire Wolfe",
		"Clark Neily",
		"Claudia D Yayi",
		"Clay Broga",
		"Clive Goodwin",
		"Cole Evans",
		"Colin Elliott",
		"Connie Spence",
		"Constance Dowler",
		"Courtney Gaston-Norton",
		"Coyote Hubbard",
		"Craig D",
		"Criss Brown",
		"Cristina Alonso",
		"Cristina Soto",
		"Cristy Murray",
		"Crystal Hubbard",
		"Cyndi Boehm Schaeffer",
		"Cynthia Lytle",
		"Cynthia Merriam",
		"Cynthia Taylor",
		"Daisy Church",
		"Dan Autry",
		"Dan Bolton",
		"Dan Stebbins",
		"Dan Welcheck",
		"Dana Kaminer Haulbrook",
		"Daniel",
		"Daniel Askins",
		"Daniel Attila",
		"Daniel Carney",
		"Daniel Hanna",
		"Daniel Simmons",
		"Daniel Spooner",
		"Daniel T. Richards",
		"Danielle Beck",
		"Danielle Massey",
		"Darel Snodgrass",
		"Darlene Moak",
		"Dave D K Kolars",
		"David A Geiger",
		"David Chesler",
		"David E. Port",
		"David Ferris",
		"david gaskill",
		"David H. Steinberg",
		"David Knutson",
		"David Northover",
		"David Ozenne",
		"David Reisman",
		"David Timmerman",
		"dawn brigando",
		"Dawn L.",
		"Deb Meehan",
		"Debbie Elster",
		"Debbie Fisher",
		"Deborah",
		"Deborah Cottrell",
		"Debra Connell",
		"Debra Estabrook",
		"Deirdre Cole",
		"demonknightinuyasha",
		"Denise Chaykun",
		"Dennis Cline",
		"Derek Wagner",
		"Diana Diehl",
		"Diane Erdman",
		"Diane Jurgens",
		"Diane Millman",
		"Diane Van Horn",
		"Dianna Abdala",
		"dianne reppucci",
		"Dominic Santini",
		"Dominik Weber",
		"Don Sloan",
		"Don Whiteside",
		"Donna F Dunnahue",
		"Donnie Frey",
		"Doug Masters",
		"Douglas F. Newman",
		"drkrm/gallery",
		"duncancreamer",
		"Dylan Anderson",
		"Earl Miller",
		"Eben Smith",
		"Edraline Argent",
		"Eduard de los Rios",
		"Edward J. Cunningham",
		"Elaine Cobb",
		"Eleanor A Hiteshew",
		"Elisabeth Tarttier-Hotter",
		"Elizabeth",
		"Elizabeth",
		"Elizabeth Kelly",
		"Ellen Mass",
		"Elvine Tsang",
		"Emily Blake",
		"Emily Bryant",
		"Emily Hertz",
		"Eric D Dubin",
		"Eric Decker",
		"Eric Geislinger",
		"Eric Gilbertson",
		"Eric Hanneken",
		"Eric Shanks",
		"Erin Leslie Reeder",
		"Erin Panto",
		"Eugenia King",
		"Evan Shaw",
		"Eve Cheshier",
		"Eve Mykytyn",
		"Everett Alvarez",
		"Fawn Colombatto",
		"Flannery Meehan",
		"Frances Lawson",
		"Frank Licursi",
		"Fred Stohl",
		"Gabriel Raviv",
		"Gallo Family",
		"Gayle Heifetz",
		"Gayle Roller",
		"Gayle Zalena",
		"Gene Caldwell iPocketIntelligence",
		"Geoffrey Davis",
		"George H. Webster III",
		"Gina Zhou",
		"Ginger Geronimo",
		"Glenn",
		"Glenn Bevensee",
		"Grant Williams",
		"Greg Edge",
		"Gregory Galant",
		"Gretchen",
		"H.J. Cuncannan",
		"Hal Oostdam",
		"Hannah",
		"Harold Woodley",
		"Heather Hugenot Johnson",
		"Heather Manby",
		"Heather Valli",
		"Henry Yamamoto",
		"Honour Leigh",
		"Ian Anderson",
		"Ike Hall",
		"Ingrid A Calhoun",
		"Ira Kartika",
		"Irrevenant",
		"Isis Duran",
		"J.",
		"J.E. Shiraki",
		"Jackie Mcguire",
		"Jacson",
		"Jade Veith",
		"james azzarello",
		"James Branson",
		"James Harberson",
		"James J Bell",
		"James W. Joseph",
		"Jamie Basden",
		"Jan Johnson",
		"Jane Cartmill",
		"Jane England",
		"Jane Fox",
		"Jane Osterholm",
		"Janet L Willis",
		"Janet Logan",
		"Janet Soderstrom",
		"Janey Darline Lemoine",
		"Janey Shaddrick",
		"Janice Frasche",
		"Janice Lyons",
		"Janine Shlasinger",
		"Jason Carter",
		"Jason Daniels",
		"Jasper Dionisio",
		"Jeanette Sherwood",
		"Jeanne Rice",
		"Jeff Lahann",
		"Jeff Orenstein",
		"Jeff Pitblado",
		"Jeffrey Justice",
		"Jeffrey Witney",
		"Jenn Edgell",
		"Jenn Tate",
		"Jennifer Brown",
		"Jennifer Dowdle",
		"Jennifer Franco",
		"Jennifer Haynal",
		"Jennifer Weitzel",
		"Jeremy Fulton",
		"Jerry Allen",
		"Jessica Kuzemko",
		"Jessica Mendoza",
		"Jessica Mulis",
		"Jil Dawicki",
		"Jill Shuey",
		"Jim Melloan",
		"Jim Musumeci",
		"Jim Newton",
		"Jim Ridgway",
		"Jim Smith",
		"Jim Stark",
		"Jimmy Murphy",
		"JoAnn Muller",
		"Jocelyn Eke",
		"Jody Daughtrey",
		"Joe Clay",
		"Joe Gramc",
		"Joe Moke",
		"Joel Koh",
		"Joel Norvell",
		"John Cahill",
		"John Carnes",
		"John Claudio",
		"John Convery",
		"John E. Rose",
		"John Flaherty",
		"John Henry Phelan",
		"John Leschen",
		"John Little",
		"John Moore",
		"John Sizemore",
		"John VDN + Vitor Santa Maria",
		"John W McDonnell",
		"John Will",
		"Joi Muratore",
		"Joie P.",
		"Jolanda Zapata",
		"Jon C Gettel",
		"Jon Yuhasz",
		"Jonathan Cain",
		"Jonathan Ganther",
		"Jonathan Howe",
		"Joni Lane",
		"Jordan K. Buckway",
		"Joseph Martinez",
		"Joseph Olson",
		"Joshua R Ventress",
		"Joshua Taylor",
		"Joyce Irby",
		"Joyce Krechting",
		"Joyce Yen",
		"Juliana",
		"Julie Rhoda",
		"Justin Myles Holmes",
		"JV",
		"Karen Guerin",
		"Karen Hoffman",
		"Karen Lange",
		"Karen Smith",
		"Karen Whiteside",
		"Karla Scherer",
		"Kat Norman Leard",
		"Katelyn Geiser",
		"Kathie Thomas",
		"Kathryn Amatangelo",
		"Kay McKinstry",
		"Kaylan Kaatz",
		"Keith Booe",
		"kelley rodriguez",
		"Kelli Rae Morris",
		"Kellie Patzer",
		"Kenneth Broggelwirth",
		"Kenneth Goodreau",
		"Kimberly",
		"Kimberly Barnes",
		"Kimberly Fowler",
		"Kimberly Gilbertson",
		"Kimberly Spanjol",
		"Kip Piper",
		"Kirk Graves",
		"KIRK ROGERS",
		"Kjell Boersma",
		"Kristen McIntyre",
		"Kristi Moerke",
		"Kristine Raatz",
		"Krupa Shah",
		"Kurt",
		"Kurt and Nadia Peterson",
		"Kyle Mack",
		"Lana Steeley",
		"Larry Fine",
		"Laura Schrier",
		"Laurie Crocker",
		"Lee",
		"Leef Smith - ",
		"Leora Berger",
		"Lili Froggy",
		"Linda Boone",
		"Linda Lutman & Collies",
		"Linda Macdonald",
		"Linda Rulifson",
		"Lindsay Dugan",
		"Lindsey Ipsen",
		"Lisa Barr",
		"Lisa Duncan",
		"Lisa Holbrook",
		"Lisa Ignacz",
		"Lisa Lindblom",
		"Lisa Pickle",
		"Lisa Tyson",
		"Lisa Wuriu",
		"LJ Scott",
		"Logan Respess",
		"Lonni Clarke",
		"Lora L Stedman",
		"Loreen Durham",
		"Lori Egan",
		"Lorian Baker",
		"Lucinda Adrian",
		"luke bubsy",
		"Lyle Rubin",
		"Lyn Valdivia",
		"Lynda Hunt",
		"M. C. Ridge",
		"Maaureen North",
		"Maike Miller",
		"Maki Ben-Avari",
		"Mandy",
		"Manpreet Chawla",
		"Marge Pizzuti",
		"Maria LoTempio",
		"Mariann Mellito Mudd",
		"Marianne Aurre Molleur",
		"Marie Wakefield",
		"Marilyn Petty",
		"Mario Mesa",
		"Marion Zerrenthin",
		"Mark & Linda Rogers",
		"Mark Boling",
		"Mark Bower",
		"Mark Mullins",
		"Mark Reynolds",
		"Mark Roman III",
		"Marlon Brock",
		"Marsha Enright",
		"Marten Davies",
		"Martin Fischlin",
		"Marvnfl",
		"Mary berg",
		"Mary Ellen Wood",
		"Mary Gesford",
		"Mary Grettenberger",
		"Mary Lou Seymour",
		"Mary Steudtel",
		"Matt Edwards",
		"Matt Hay",
		"Matt Vieyra",
		"Matthew",
		"Matthew J Pind",
		"Maurice Fitzgerald",
		"Megan Porter",
		"Meghan Ristau",
		"Melanie & Jeff Strubble",
		"Melanie Cahilly",
		"melissa",
		"Melissa Muro",
		"Michael Cox",
		"Michael Echeverria",
		"Michael Foudy",
		"Michael Harbour",
		"Michael Jessing",
		"Michael Johnston",
		"Michael Lynch",
		"Michael Martin",
		"Michael Nonelle",
		"Michael Okola",
		"Michael Pamment",
		"Michael Rains",
		"Michael Scheidt",
		"Michael Wolf",
		"Micheal Todd Rice",
		"Michele Ajamian",
		"Michelle Beck",
		"Michelle Ritts",
		"Michelle Zahler",
		"Mikaela Kenne",
		"Mike DeLay",
		"Mike Faff",
		"Mike Giampaolo",
		"Mike Ostrem",
		"Mindy Schwartz",
		"Monica",
		"Monk",
		"Nat Tuck",
		"Natalie Montfort",
		"Natalie Struiksma",
		"Natalie Yandle",
		"Nicholas Krom",
		"Nicholas Tucker",
		"Nicolas van de Put",
		"Nicole Gonzalez-Knowlton",
		"Nora Tyeklar",
		"Norah McIntire",
		"Norma Campbell",
		"Oliver E. Olson",
		"Orna Rachovitsky",
		"Osa Conservation",
		"Over the River",
		"P H Twiss",
		"Pamela Pacheco",
		"Patricia Herrmann",
		"Patricia Joy",
		"Patti",
		"Paul",
		"Paul Patorno",
		"Paul Spanbauer",
		"Paul Stelzig",
		"Paula Bezark",
		"Peter Christensen",
		"Peter Jacob",
		"Phil Boling",
		"Philip Doolittle",
		"Philip Gregory Maravilla",
		"Phyllis A. King",
		"Potato Girl",
		"R Tamara de Silva",
		"Rachel Davison",
		"Rachel Willis",
		"Radley Balko",
		"Rahul",
		"Raj Shekhar",
		"Ralph Krause",
		"Randy Klemetsen",
		"Randy Lloyd",
		"Raymond Dussault",
		"Rebecca Langford",
		"Red Williams",
		"Rhonda Fleming",
		"Richard",
		"Richard Freitas",
		"Richard Jack",
		"Richard Lorenc",
		"RksN",
		"Rob Montz",
		"Rob Pfaltzgraff",
		"Rob Raffety",
		"Robbie Benson",
		"Robert Day",
		"Robert Denard",
		"Robert Hatch",
		"Robert M Blumen",
		"Robert Meester",
		"Roberta R. Theriault",
		"Robin Pardey",
		"Robyn Licursi",
		"Ron Headley",
		"Ronald  Dumont",
		"Rose Hilliard",
		"Ross Kenyon",
		"Roy Haddad",
		"Ryan Boren",
		"Ryan Hogan",
		"Ryan Pratt",
		"Ryan Stockstad",
		"Ryan Treat",
		"Ryan Weiss",
		"Sachi Alonzo",
		"Sandra Germaine",
		"Sandy Lintz",
		"Sara J. Martinez",
		"Sarah Aguilar",
		"Sarah Gorman",
		"Sarath Krishnaswamy",
		"Scot Johnson",
		"Scott Hampton",
		"Scott Kingsley Clark",
		"scott kolodge",
		"Scott Lamb",
		"Scott Mullinix",
		"Scott Olmsted",
		"Scott Tillman",
		"Sean Brennan",
		"Sean W. Malone",
		"Selen Flores",
		"Seth Bradley",
		"Shannon Rosser",
		"Sharon Fiscus",
		"Sharon Nyland",
		"shaun G. Rodriguez",
		"Shaun Kelly",
		"Shawn Anderson",
		"Shawn Flanagan",
		"Shawn Sapp",
		"Sherry Zendel",
		"Sheryl Franklin",
		"Shirley Johnson",
		"Siri  Margerin",
		"Skip Duplissey",
		"Sonja Monsen Ray",
		"Stacey Paulsen",
		"Stacy Wilson",
		"Stanley N Lozowski",
		"Stefanie Facchini",
		"Stephanie Coronado",
		"Stephanie Gans",
		"Stephanie James",
		"Stephanie M. Luken",
		"Stephanie Stone",
		"Stephen Davis",
		"stephen fleischer",
		"Stephen Loiaconi",
		"Stephen Markacs",
		"steve",
		"Steve Gordon",
		"Steven Belsher",
		"Steven St.Laurent",
		"Stewart Power",
		"Sue Spilman",
		"Susan DiMenna",
		"Susan Jenkins",
		"Susanne Winter",
		"Suzanne DeBolt",
		"Suzanne Melton",
		"Suzanne Smith",
		"Sybil Erden",
		"T. White",
		"Tammy Rosner",
		"Tania R.L.de Jesus",
		"Tara Sterk",
		"Tara Thomas",
		"Tarek Hijaz",
		"Tatiana Freitas",
		"Taylor Peake Wyatt",
		"Taylor Smith",
		"Teneisha Negron",
		"Teresa Dyer",
		"Terry Dunlap Jr",
		"Terry Kelso",
		"Terry Smith",
		"Terry Tuznik",
		"Theory Madison",
		"Thomas Barkwell",
		"Thomas Bell",
		"Tim Hartin",
		"Timothy Doran",
		"Tom Birch",
		"Tom Burry",
		"Tom Gryn",
		"Tom Kulaga",
		"Tom Rowles",
		"Tone Milazzo",
		"Tony Skaggs",
		"Tory EvilAngel Fortin",
		"Traci Kidwell",
		"Tracy Fowler",
		"Tracy Smith",
		"Unity Nowe",
		"Valerie Churchill",
		"Vanessa Kurzweil",
		"Veryl Ann Grace",
		"Vicki McKenna",
		"Vincent lazzara",
		"Virginia",
		"Virginia (Gina) Witt",
		"Virginia Bacigalupi",
		"Virginia De Lay",
		"Virginia E Anderson",
		"Virginia Elinor Becchine",
		"Walt Sanford",
		"Walter Monk",
		"Wes Kennison",
		"William Davis",
		"William Jordan",
		"William Toler",
		"Winnie Gong",
		"Yoi Tanabe",
		"Yolanda Villa",
		"Yvonne Langworthy-swanson"],
		getNames: function() {
			return this._names;
		}
	};
	
	var elements = {
		_ids: [
		"#backer-1",
		"#backer-2",
		"#backer-3",
		"#backer-4",
		"#backer-5",
		"#backer-6",
		"#backer-7",
		"#backer-8",
		"#backer-9",
		"#backer-10",
		"#backer-11",
		"#backer-12"],
		getIds: function() {
			return this._ids;
		}
	};
	
	var unused_backers = [];
	var used_backers = [];
	var current_backers = [];
	
	var unused_elements = [];
	var used_elements = [];
	
	var frequency = 1000; // Expressed in miliseconds
	var interval = 0;
	
	$(document).ready(function() {
		init();
	});
	
	function init() {	
		config_backers();
		config_elements();
		
		for(var i = 0; i < 12; i++) {
			var backer = getRandomItem(unused_backers, used_backers);
			var id = "#backer-" + (i + 1);
			$(id).html(backer);
		}
		
		startLoop();
	}
	
	// STARTS and Resets the loop if any
	function startLoop() {
	    if(interval > 0) clearInterval(interval);  // stop
	    interval = setInterval(updateBacker, frequency);  // run
	}
	
	function updateBacker() {
		if(unused_elements.length == 0) {
			config_elements();
		}
		
		if(unused_backers.length == 0) {
			config_backers();
		}		

		var element = getRandomItem(unused_elements, used_elements);
		var backer = getRandomItem(unused_backers, used_backers);
		var current_backer = $(element).html();
		
		current_backers.remove(current_backer);
		current_backers.push(backer);
		
		$(element).fadeOut(function() {
			$(element).html(backer);
			$(element).fadeIn();
		});
	}
	
	function getRandomIndex(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	function getRandomItem(unused_array, used_array) {
		var index = getRandomIndex(0, (unused_array.length - 1));
		item = unused_array[index];
		
		used_array.push(unused_array[index]);
		unused_array.splice(index, 1);

		return item;
	}
	
	function config_elements() {
		used_elements = [];
		unused_elements.push.apply(unused_elements, elements.getIds());
	}
	
	function config_backers() {
		used_backers = [];
		unused_backers.push.apply(unused_backers, backers.getNames());
	}
	
	Array.prototype.remove = function() {
		var what, a = arguments, L = a.length, ax;
		while(L && this.length) {
			what = a[--L];
			while ((ax = this.indexOf(what)) !== -1) {
				this.splice(ax, 1);
			}
		}
		return this;
	};
})(jQuery);