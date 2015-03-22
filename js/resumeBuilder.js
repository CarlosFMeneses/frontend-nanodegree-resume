var bio = {
	"name": "Carlos F. Meneses",
	"role": "Java Projrammer",
	"contacts": {
		"mobile": "(908)505-5097",
		"email": "carlos.f.meneses@gmail.com",
		"github": "CarlosFMeneses",
		"twitter": "@carlosfmeneses",
		"location": "NYC Metro Area"
	},
	"welcomeMessage": "Greetings and Salutations!",
	"skills": [
		"Core Java", "XML, HTML, CSS, JS", "Graphic Design", "Photography"
	],
	"bioPic": "images/fry.jpg"
}

var education = {
	"schools": [
		{
			"name": "Elizabeth High School",
			"city": "Elizabeth, NJ, USA",
			"mayor": ["Computer Science", "Graphic Design"],
			"minor": ["French", "Music Theory"],
			"year": 1987
		},
		{
			"name": "Center for Media Arts",
			"city": "New York, NY, USA",
			"mayor": ["Graphic Design", "Desktop Publishing"],
			"year": 1994
		},
		{
			"name": "Bergen Community College",
			"city": "Paramus, NJ, USA",
			"mayor": "Database Programing",
			"year": "2015"
		}
	],
	"onlineCourses": [
		{
			"title": "Java Programing",
			"School": "Bergen Community College",
			"dates": 2014,
			"url": "http://www.Bergen.edu"
		}
	]
}

var work = {
	"jobs": [
		{
			"employer": "CueProductions",
			"title": "Web Developer",
			"location": "Elizabeth, NJ",
			"dates": "2007 - Present",
			"description": "Design, develop, and maitain web sites, using XML, HTML, CSS, JavaScript",
		},
		{
			"employer": "Adecco Creative",
			"title": "Graphic Designer",
			"location": "New York, NY",
			"dates": "2008 - 2013",
			"description": "Worked as creative talent for various companies. Used Adobe CS6 software package to design for print and web.",
		},
		{
			"employer": "Bill Smith Studio",
			"title": "Print Production Specialist",
			"location": "New York, NY",
			"dates": "2002 - 2004",
			"description": "Worked producing printed educational material for k-12 schools, using Adobe CS6."
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description": "Created a project which involved setting and returning variables from classes"
		}
	]
}

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
};

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace 
			("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace 
			("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace
			("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace
			("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

console.log(locationizer(work));