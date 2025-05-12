"use client";
import React from "react";

const LectureSchedule = () => {
  const schedule = [
    { week: "1", topic: "Introduction to Programming and C++", location: "Masjid Khadija Khuwailid", mapLink:  "", timing: ""},
    { week: "2", topic: "Basic Structure, Data Types, Input/Output" ,location: "Masjid Khadija Khuwailid", mapLink:  "", timing: ""},
    { week: "3", topic: "Operators, Expressions, and Control Statements" ,location: "Masjid Khadija Khuwailid", mapLink:  "", timing: ""},
    { week: "4", topic: "Loops (for, while, do-while)" ,location: "Masjid Khadija Khuwailid", mapLink:  "", timing: ""},
    { week: "5", topic: "Functions and Recursion" ,location: "Masjid Khadija Khuwailid", mapLink:  "", timing: ""},
    { week: "6", topic: "Arrays and Strings" ,location: "Masjid Khadija Khuwailid", mapLink:  "", timing: ""},
    { week: "7", topic: "Pointers and References" ,location: "Masjid Khadija Khuwailid", mapLink:  "", timing: ""},
    { week: "8", topic: "Structures and Unions" ,location: "Masjid Khadija Khuwailid", mapLink:  "", timing: ""},
    { week: "9", topic: "File Handling" ,location: "Masjid Khadija Khuwailid", mapLink:  "", timing: ""},
    { week: "10", topic: "Object-Oriented Programming Concepts" ,location: "Masjid Khadija Khuwailid", mapLink:  "", timing: ""},
    { week: "11", topic: "Classes and Objects" ,location: "Masjid Khadija Khuwailid", mapLink:  "", timing: ""},
    { week: "12", topic: "Constructors and Destructors" ,location: "Masjid Khadija Khuwailid", mapLink:  "", timing: ""},
    { week: "13", topic: "Inheritance and Polymorphism" ,location: "Masjid Khadija Khuwailid", mapLink:  "", timing: ""},
    { week: "14", topic: "Templates and Exception Handling" ,location: "Masjid Khadija Khuwailid", mapLink:  "", timing: ""},
    { week: "15", topic: "Revision & Project Submission" ,location: "Masjid Khadija Khuwailid", mapLink:  "", timing: ""},
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Lecture Schedule</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
          <thead>
            <tr className="bg-gray-100 text-gray-800">
              <th className="py-3 px-4 border-b text-left">Week</th>
              <th className="py-3 px-4 border-b text-left">Topic</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{item.week}</td>
                <td className="py-2 px-4 border-b">{item.topic}</td>
                <td className="py-2 px-4 border-b">{item.location}</td>
                <td className="py-2 px-4 border-b">{item.timing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LectureSchedule;
