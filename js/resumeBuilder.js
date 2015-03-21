var formattedName, formattedRole, name, role;

name = "Carlos F. Meneses";
role = "Java Programer";

formattedName = HTMLheaderName.replace("%data%", name);
formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);