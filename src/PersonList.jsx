import React from "react";

export class PersonList extends React.Component {
  /**
   * Renders a list of persons.
   * @note Using array indices as keys is generally not recommended because:
   * 1. It can cause performance issues when the list order changes (additions/removals)
   * 2. It may lead to unexpected behavior or bugs with component state
   * 3. React specifically warns against this practice in its documentation
   * 4. If the list is re-ordered, indices will change, causing unnecessary re-renders
   *
   * Ideally, use a unique and stable identifier from each item as the key instead.
   * Like here we could use person.name as the key.
   */
  render() {
    const persons = [
      { name: "John Doe" },
      { name: "Georges Abitbol" },
      { name: "Kevin McGregor" },
    ];

    return (
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    );
  }
}
