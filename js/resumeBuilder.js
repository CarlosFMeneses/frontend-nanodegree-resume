var position = "Web Developer";
var employer = "CueProductions";
var workYears = 7;
var cityBusi = "New York";

var work = {};
work.position = position;
work.employer = employer;
work.workYears = workYears;
work.cityBusi = cityBusi;

var schoolLast = "BCC";
var schoolYears = 1;
var schoolCity = "Paramus"

var education = {};
education["name"] = schoolLast;
education["schoolYears"] = schoolYears;
education["schoolCity"] = schoolCity;

$("#main").append(work["position"]);
$("#main").append(education.name);