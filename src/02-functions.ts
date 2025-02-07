import {Friend, Colleague } from './myTypes'
import { friends } from './01-basics'
import { colleagues } from './01-basics'

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(f1: Friend[]) {
    const result: string[] = []
    f1.forEach(f => {
        f.age += 1
        result.push(`${f.name} is now ${f.age}`)
    });
    return result
}

console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }

  console.log(highestExtension(colleagues.current));

  function addColleague(cs:  Colleague[], name: string, department: string, email: string) {
    const highest = highestExtension(cs).contact.extension
    cs.push({name, department, contact: {email, extension: highest +1}})
  }

  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");   
  console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
