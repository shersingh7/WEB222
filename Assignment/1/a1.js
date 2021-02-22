//==============================================
// Name:           Davinder Verma
// Student Number: 121802201
// Email:          dverma22@myseneca.ca
// Section:        NEE
// Assignment:     1
// Date:           01/10/2020
//==============================================

//Feature 1
//Fake Database
const COURSES = 
{
  cCode: ["WEB222", "WEB322", "IPC244", "JAV745", "OOP244"],
  cTitle: 
  [
    "Web Programming Principles",
    "Web Programming Tools & Frameworks",
    "Introduction to Programming Using C",
    "Java Programming",
    "Introduction to Object Oriented Programming",
  ],
  courseCredit: [3, 3, 3, 3, 3],
}



//Feature 2
//User Interface



class COURSEINFO 
{
  constructor(cCode, cTitle, cCredits, marks) 
  {
    this.cCode = cCode;
    this.cTitle = cTitle;
    this.cCredits = cCredits;
    this.marks = marks;
  }
}

//Creating Object for the studentInfo
let studentInfo = 
{
  firstName: "",
  lastName: "",
  studentID: "",
  coursesTaken: "",
}

//Taking the student input and and storing in the the studentInfo object
function getStudentInfo() 
{
  sInfo.firstName = prompt("Enter your First Name: ");
  sInfo.lastName = prompt("Enter your Last Name: ");
  sInfo.studentID = prompt("Enter your student ID number: ");
  sInfo.coursesTaken = prompt("\nEnter the number of courses you did in above semester: ");
}

//Creating Object for the courseInfo
let courseInfo = 
{
  cCode: "",
  cTitle: "",
  cCredits: "",
  marks: "",
}

//Just shortening the name
let cInfo = courseInfo;
let sInfo = studentInfo;

//Taking the course input and storing in the object cInfo
function askCourseInfo() 
{
  let finalInfo = [];

  do 
  {
    cInfo.cCode = prompt("\nEnter Course Code: ");
  } while (!searchCourse(cInfo.cCode));

  cInfo.cTitle = searchInfo(findIndexNo(cInfo.cCode))[0];
  cInfo.cCredits = searchInfo(findIndexNo(cInfo.cCode))[1];
  cInfo.marks = prompt("Enter Mark received in course: ");

  finalInfo.push(cInfo);
  return finalInfo;
}

//This is the main function for getting and sorting all the details
function getInfo() 
{
  getStudentInfo();

  if (sInfo.coursesTaken) 
  {
    let input = [];
    cDetails = new COURSEINFO();
    for (let i = 0; i < sInfo.coursesTaken; i++) 
    {
      input = askCourseInfo();

      cDetails[i] = new COURSEINFO
      (
        input[0].cCode,
        input[0].cTitle,
        input[0].cCredits,
        input[0].marks
      )
    }
    displayInfo(cDetails);
  }
}

//DATA VALLIDATION
//Searching the input in the fake Database
function searchCourse(courseID) 
{
  let idFound;

  if (COURSES.cCode.includes(courseID)) 
  {
    idFound = true;
    return idFound;
  } else 
  {
    idFound = false;
    return idFound;
  }
}

//Copying all the data related to input
function searchInfo(index) 
{
  let infoFound = [];

  const titleFound = COURSES.cTitle[index];
  const creditsFound = COURSES.courseCredit[index];

  infoFound.push(titleFound, creditsFound);

  return infoFound;
}

//Searchin the index number
function findIndexNo(cCode) 
{
  return COURSES.cCode.indexOf(cCode);
}



//Feature 3



//Grade and GPA calculation
function getGrade(marks) 
{
  let semesterResult = []; // Storing the result in the array
  let grade = "";
  let gpa = 0;

    if (marks >= 90)
    {
      grade = "A";
      gpa = 4;
    }
    else if(marks >= 80) 
    {
      grade = "B";
      gpa = 3;
    }
    else if(marks >= 70) 
    {
      grade = "C";
      gpa = 2;
    }
    else if(marks >= 60) 
    {
      grade = "D";
      gpa = 1;
    }
    else if(marks < 60) 
    {
      grade = "F";
      gpa = 0;
    }

  semesterResult.push(grade, gpa);
  return semesterResult;
}

//Calculating the GPA
function getGPA(totalPoints, totalCredit) 
{
  let gpa=0;
  gpa = totalPoints / totalCredit;
  return gpa;
}

//Calculating the total sum
function totalPoints(Marks) 
{
  let sum = 0;

  for (let i = 0; i < sInfo.coursesTaken; i++) 
  {
    sum += getGrade(Marks[i].marks)[1];
  }

  return sum;
}



//Feature 4



//DISPLAYING ALL THE INFORMATION IN CONSOLE.
function displayInfo(details) 
{
  console.log("\nThanks, displaying student transcript:");
  console.log("\nSTUDENT TRANSCRIPT");
  console.log(`\nName: ${sInfo.firstName} ${sInfo.lastName}`);
  console.log(`ID: ${sInfo.studentID}`);
  console.log("Semester Code:", Math.floor(Math.random() * 200000) + 10000);
  console.log("Semester No:", Math.floor(Math.random() * 8) + 1);
  console.log("\n");

  for (let i = 0; i < sInfo.coursesTaken; i++) 
  {
    console.log("Course Code:", details[i].cCode);
    console.log("Course Title:", details[i].cTitle);
    console.log("Mark:", details[i].marks);
    console.log("Grade:", getGrade(details[i].marks)[0]);
  }

  console.log("\n");
  console.log("Student GPA:", getGPA(totalPoints(details), sInfo.coursesTaken));
}

//Main Program
getInfo();
