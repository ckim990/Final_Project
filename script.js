"use strict";

var create = document.createElement("h1");
var node = document.createTextNode("Bro Code");
create.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(create);

var create = document.createElement("p");
var node1 = document.createTextNode("We are two bros that have been cooling it since the beginning of freshman year. We have done things from party together fight together, laugh together, work together, volunteer together, etc. We are proud to say that we have been bros for 4 years. We have grown as people and we have seen the highs and lows of each others lives making us close than regular friends.");
create.appendChild(node1);
var element = document.getElementById("div1");
element.appendChild(create);

var create = document.createElement("h2");
var node = document.createTextNode("Victor");
create.appendChild(node);
var element = document.getElementById("sec1");
element.appendChild(create);

var create = document.createElement("p");
var node1 = document.createTextNode("Hi I am Victor I am a 2nd year coding student at Wets-Mec and a senior at Paradise Honors High School.");
create.appendChild(node1);
var element = document.getElementById("sec1");
element.appendChild(create);

var create = document.createElement("h2");
var node = document.createTextNode("Chris");
create.appendChild(node);
var element = document.getElementById("sec2");
element.appendChild(create);

var create = document.createElement("p");
var node1 = document.createTextNode("Hi I am Chris I am a 2nd year coding student at Wets-Mec and a senior at Paradise Honors High School.");
create.appendChild(node1);
var element = document.getElementById("sec2");
element.appendChild(create);

const resume = {
   "basics": {
     "name": "Victor Akanbi & Christopher Kim",
     "label": "Programmer",
     "picture": "",
     "email": "",
     "phone": "",
     "website": "",
     "summary": "We are the bros",
     "location": {
       "address": "",
       "postalCode": "",
       "city": "",
       "countryCode": "",
       "region": ""
     },
   },
   "volunteer": [{
     "organization": "Saint Mary's Food Bank",
     "position": "Volunteer",
     "website": "https://www.firstfoodbank.org/",
     "startDate": "07-01-2016",
     "endDate": "07-21-2019",
     "summary": "We sorted food, we helped to pack food for little kids and we put together packages for food stamps.",
     "highlights": [
       ""
     ]
   }],
   "education": [{
     "institution": "HighSchool",
     "area": "General Eduction",
     "studyType": "",
     "startDate": "08-01-2016",
     "endDate": "present",
     "gpa": "",
     "courses": [
       "All core classes:",
       "Math",
       "English",
       "Science",
       "Social Studies"
     ]
   }],
   "certifications": [
     {
       "title": "MTA HTML",
       "date": "2019-1-01",
       "awarder": "Microsoft",
       "summary": "Proof someone paid to prove you know something about something..."
     }
   ],
   "skills": [
     {
     "name": "HTML",
     "level": 90
     },
     {
     "name": "CSS",
     "level": 80
     },
     {
     "name": "JS",
     "level": 20
     }
   ],
 };

 const {name} = resume.basics;

 var skills = resume.skills;
 var certs = resume.certifications;

 document.getElementById("div2").innerHTML = `<h3>Certifications</h3>
 <p>At this time we have no certifications but plan on getting the MTA HTML certification As well as a few others!</p>`;

 document.getElementById("sec1div").innerHTML = `
 <ul>
 <li>17 years old</li>
 <li>6'1 Athlete</li>
 <li>Very Involved with helping the community</li>
 </ul>`;

 document.getElementById("sec2div").innerHTML = `
 <ul>
 <li>17 years old</li>
 <li>5'7 </li>
 <li>Honest Academic</li>
 </ul>`;

 document.getElementById("div3").innerHTML = `<h3>Work Experience</h3>
 <p>At this time we have no work experience</p>`;

