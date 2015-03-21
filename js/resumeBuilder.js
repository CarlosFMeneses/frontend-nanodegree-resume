var name = "Carlos F. Meneses";
var role = "Programer";
var contacts = {
	"mobile": "(908)505-5097",
	"email": "carlos.f.meneses@gmail.com",
	"github": "CarlosFMeneses",
	"twitter": "@carlosfmeneses",
	"location": "NYC Metro Area"
};
var bioPic = "images/fry.jpg";
var welcomeMessage = "Greetings and Salutations";
var skills = ["programing", "designing", "photography", "JS"];

var bio = {
	"name" : name,
	"role" : role,
	"contact" : contacts,
	"picture" : bioPic,
	"welcome" : welcomeMessage,
	"skills" : skills
};

$("#main").append(bio.name);