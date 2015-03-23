var bio = {
	"name": "Carlos Meneses",
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
			"description": "Design, develop, and maitain web sites, using XML, HTML, CSS, JavaScript"
		},
		{
			"employer": "Adecco Creative",
			"title": "Graphic Designer",
			"location": "New York, NY",
			"dates": "2008 - 2013",
			"description": "Worked as creative talent for various companies. Used Adobe CS6 software package to design for print and web."
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
			"title": "Hello World",
			"dates": "2014",
			"description": "Created my first Java program. It brought a gracious salutation into the world."
		},
		{
			"title": "Bank and Branches",
			"dates": "2014",
			"description": "Develop a program which keeps track of bank accounts of various branches."
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

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend([formattedName]);

$('#main').append(internationalizeButton);

function inName() {
	origName = bio.name;
	newName = origName.trim().split(" ");
	newName[1] = newName[1].toUpperCase();
	newName[0] = newName[0].slice(0,1).toUpperCase() + 
		newName[0].slice(1).toLowerCase();

	return newName[0] + " " + newName[1];
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();