var bio = {
	"name" : "Nilton Munoz",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "(954)773-6704",
		"email" : "nmuno013@fiu.edu",
		"github": "nmuno013",
		"blog": "nilblog",
		"twitter" : "@nmuno013",
		"location" : "Fort Lauderdale"
		},
	"welcomeMessage" : "Welcome to my Online Resume",
	"skills" : ["awesomeness", "delivering projects on time", 
	"proactive work", "open to learn"],
	"bioPic" : "images/nil.jpg",
	display : function(){
				var formattedName = HTMLheaderName.replace("%data%", bio.name);
				var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
				$("#header").prepend(formattedRole);
				$("#header").prepend(formattedName);

				var formattedContact = HTMLcontactGeneric.replace("%data%", ":");
				var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
				var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
				var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
				var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
				var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
				var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
				
				$("#topContacts").append(formattedContact);
				$("#topContacts").append(formattedMobile);
				$("#topContacts").append(formattedEmail);
				$("#topContacts").append(formattedTwitter);
				$("#topContacts").append(formattedGithub);
				$("#topContacts").append(formattedBlog);
				$("#topContacts").append(formattedLocation);

				$("#footerContacts").append(formattedContact);
				$("#footerContacts").append(formattedMobile);
				$("#footerContacts").append(formattedEmail);
				$("#footerContacts").append(formattedTwitter);
				$("#footerContacts").append(formattedGithub);
				$("#footerContacts").append(formattedBlog);
				$("#footerContacts").append(formattedLocation);


				var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
				var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
				$("#header").append(formattedPic);
				$("#header").append(formattedWelcomeMsg);


				if (bio.skills.length > 0) {
					$("#header").append(HTMLskillsStart);

					var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
					$("#skills").append(formattedSkill);
					formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
					$("#skills").append(formattedSkill);
					formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
					$("#skills").append(formattedSkill);
					formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
					$("#skills").append(formattedSkill);
				}
			}
};

var education = {
	"schools":[
	{
		"name" : "Broward College",
		"location" : "Fort Lauderdale, FL, US",
		"degree" : "Associate of Arts",
		"major" : ["Computer Science"],
		"dates" : 2014,
	},
	{
		"name" : "FIU",
		"location" : "Miami, FL, US",
		"degree" : "Bachelor of Computer Science",
		"major" : ["Computer Science FIU"],
		"dates" : 2015,
	}
	],
	"onlineCourses":[
	{
		"title" : "Javascript Syntax",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "http://www.udacity.com/course/ud804"
	}
	],
	display : function() {
        for (ed in education.schools){
          $("#education").append(HTMLschoolStart);

          var formattedShoolName = HTMLschoolName.replace("%data%", education.schools[ed].name);
          var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[ed].degree);
          var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[ed].dates);
          var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[ed].location);
          var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[ed].major);
          var formattedSchoolTitle = formattedShoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor;
      	  $(".education-entry:last").append(formattedSchoolTitle);

        };

        for (online in education.onlineCourses){
          var formattedClasses = HTMLonlineClasses
          var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
          var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
          var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
          var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
          $(".education-entry:last").append(formattedClasses + formattedTitle + formattedSchool + formattedDates + formattedURL);
        };


    }
};

var work = {
	"jobs" : [
	{
		"employer" : "Softtek",
		"title" : "SD SAP Consultant",
		"location" : "Buenos Aires, BA, AR",
		"dates" : "April 1998 - April 1999",
		"description" : "SAP Sales and Distribution consultant"
		
	},
	{
		"employer" : "Zurvahn",
		"title" : "Stock Room Assistant",
		"location" : "Coconut Creek, FL, US",
		"dates" : "March 2011 - February 2012",
		"description" : "Assistant in the stock room operations"
	},
	{
		"employer" : "Target",
		"title" : 	"Team Member",
		"location" : "Sunrise, FL, US",
		"dates" : 	"July 2013 - February 2014",
		"description" : "Operations on the sales floor"
	}
	],
	display : function() {
				for (job in work.jobs){
					$("#workExperience").append(HTMLworkStart);

					var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
					var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
					var formattedEmployerTitle = formattedEmployer + formattedTitle;
					$(".work-entry:last").append(formattedEmployerTitle);

					var formattedDates = HTMLworkDates.replace ("%data%", work.jobs[job].dates);
					$(".work-entry:last").append(formattedDates);
					var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
					$(".work-entry:last").append(formattedLocation);
					var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
					$(".work-entry:last").append(formattedDescription);
				}
			}
};

var projects = {
	"projects" : [
	{
	"title" : "Project 1",
	"dates" : "2015",
	"description" : "This project start with the nanodegree front end web developer course",
	"images" : ["images/project1.jpg"]
	}
	],
	display : function(){
				for (project in projects.projects){
					$("#projects").append(HTMLprojectStart);

					var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
					$(".project-entry:last").append(formattedTitle);
					var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
					$(".project-entry:last").append(formattedDates);
					var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
					$(".project-entry:last").append(formattedDescription);
					
					if(projects.projects[project].images.length >0){
						for (image in projects.projects[project].images){
							var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
							$(".project-entry:last").append(formattedImage);
						}
					}
				}
			}

};



bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

function inName(name){
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] +" "+name[1];
}
$("#main").append(internationalizeButton);

