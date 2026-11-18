// Pathfinder: Web Creator. My Portfolio: your projects.
// This data is made up for this course. Amani is a made-up learner, and so are these projects.
// Day 6: you show these projects on your My work page. You may change them to things you have made.
// If you change them, keep the four field names and update the facts at the end of this list.
// Every record has the same four fields:
//   name          what you made or did, in quotes
//   type          one of "Art", "Sport", "Music", "Code", "Reading", in quotes
//   month         when you made it, such as "March 2026", in quotes
//   whatILearned  one thing you learned, in quotes
// Never put a surname, school, phone, email, home area or photo in this file.

const projects = [
  { name: "Comic: The Lost Goat",          type: "Art",     month: "November 2025", whatILearned: "Plan all six panels in pencil before inking" },
  { name: "Keepy-uppy practice chart",     type: "Sport",   month: "January 2026",  whatILearned: "Ten minutes a day took me from 12 to 40 keepy-uppies" },
  { name: "Maze game",                     type: "Code",    month: "March 2026",    whatILearned: "A loop can move a character one step at a time" },
  { name: "Review of a mystery novel",     type: "Reading", month: "October 2025",  whatILearned: "How to explain a story without giving away the ending" },
  { name: "Poster for a clean-up day",     type: "Art",     month: "September 2025", whatILearned: "Big letters and two colours are easier to read from far away" },
  { name: "Five-a-side team captain",      type: "Sport",   month: "April 2026",    whatILearned: "How to make sure everyone gets a turn in goal" },
  { name: "Times-table quiz game",         type: "Code",    month: "July 2025",     whatILearned: "A variable can keep the score" },
  { name: "Holiday reading log",           type: "Reading", month: "August 2025",   whatILearned: "Twenty minutes a day adds up to a lot of books" },
  { name: "Sketchbook of garden birds",    type: "Art",     month: "May 2026",      whatILearned: "Start every bird with three simple shapes" },
  { name: "This website",                  type: "Code",    month: "November 2026", whatILearned: "How to link three pages and build a list from data" }
];

// Facts that are true of this file (use them to check your conclusions):
// 10 projects. 3 are Art, 2 are Sport, 3 are Code, 2 are Reading. 5 are from 2026, so 5 get the "New" label.
// No project has the type "Music", so a filter for Music gives an empty list.

// Practice data for the labs on Days 6 to 8. Do not change it.
// Pathfinder: Web Creator practice data. MADE UP FOR THIS COURSE.
// These clubs, venues, days and prices are invented for practice.
// What this data cannot tell you: anything about real clubs, real prices or real places.

const clubs = [
  { name: "Chess Club",          day: "Monday",    ageGroup: "13-15", costKsh: 0,    spacesLeft: 6,  venue: "Library" },
  { name: "Robotics Lab",        day: "Monday",    ageGroup: "13-15", costKsh: 1500, spacesLeft: 2,  venue: "Science Room" },
  { name: "Junior Football",     day: "Tuesday",   ageGroup: "10-12", costKsh: 500,  spacesLeft: 10, venue: "Main Field" },
  { name: "Drama Group",         day: "Tuesday",   ageGroup: "13-15", costKsh: 0,    spacesLeft: 0,  venue: "Hall" },
  { name: "Coding Club",         day: "Wednesday", ageGroup: "13-15", costKsh: 1000, spacesLeft: 4,  venue: "Computer Room" },
  { name: "Art Studio",          day: "Wednesday", ageGroup: "10-12", costKsh: 800,  spacesLeft: 7,  venue: "Art Room" },
  { name: "Debate Society",      day: "Thursday",  ageGroup: "16-18", costKsh: 0,    spacesLeft: 12, venue: "Room 4" },
  { name: "Swimming",            day: "Thursday",  ageGroup: "10-12", costKsh: 1200, spacesLeft: 3,  venue: "Pool" },
  { name: "Music Band",          day: "Friday",    ageGroup: "13-15", costKsh: 600,  spacesLeft: 5,  venue: "Music Room" },
  { name: "Photography Walk",    day: "Friday",    ageGroup: "13-15", costKsh: 300,  spacesLeft: 8,  venue: "Meet at Gate" },
  { name: "Senior Basketball",   day: "Saturday",  ageGroup: "16-18", costKsh: 400,  spacesLeft: 1,  venue: "Court" },
  { name: "Maths Challenge",     day: "Saturday",  ageGroup: "10-12", costKsh: 0,    spacesLeft: 9,  venue: "Room 2" }
];

// Facts that are true of this file (use them to check your conclusions):
// 12 clubs. 4 are free (costKsh is 0). 6 are for ages 13-15. 1 club has no spaces left (Drama Group).
// No club for ages 16-18 runs on Friday, so a filter for that gives an empty list.
