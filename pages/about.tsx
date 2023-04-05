import React, { useState } from 'react';

interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 },
];

const About: React.FC = () => {
  const [sortBy, setSortBy] = useState<string>('name');

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const sortedPeople = [...people].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);  
    } else if (sortBy === 'age') {
      return a.age - b.age;
    }
    return 0;
  });

  return (
    <main className="main">
      <select value={sortBy} onChange={handleSortChange}>
        <option value="name">Sort by name</option>
        <option value="age">Sort by age</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {sortedPeople.map((person : Person) => (
            <tr key={person.name}>
              <td>{person.name}</td>
              <td>{person.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default About;