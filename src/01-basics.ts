import {Friend, Colleague, ColleagueHistory } from './myTypes'

// (Optional) Change the names below to your friends.

const friend1 : Friend = {
    name: "Paul Fleming",
    phone: "087-12345",
    age: 25,
    dob: new Date("1998-11-20") ,
  };
  
  const friend2 : Friend = {
    name: "Jane Costello",
    phone: "086--12345",
    age: 31,
    interests: ['Music', 'Sport']
  };

  const friend3 : Friend = {
    name: "Ralph Graham",
    phone: "089--48345",
    age: 37,
    interests: ['Singing', 'Dancing']
  };
  
  
  export const friends = [friend1, friend2, friend3];
  
  //   -------------------

  const colleague1 = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  const colleague2 = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  const colleague3 = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
      email: "dos@company.com",
      extension: 125,
    },
  };

  export const colleagues : ColleagueHistory = {
    current: [colleague1, colleague2, colleague3],
    former: [],
  };  