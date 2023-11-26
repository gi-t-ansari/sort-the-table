import React, { useState } from "react";

const data = [
  {
    date: "2023-09-02",
    views: 150,
    article: "Article 2",
  },
  {
    date: "2023-09-02",
    views: 120,
    article: "Article 3",
  },
  {
    date: "2023-09-01",
    views: 100,
    article: "Article 1",
  },
  {
    date: "2023-09-04",
    views: 100,
    article: "Article 1",
  },
  {
    date: "2023-09-03",
    views: 200,
    article: "Article 4",
  },
];

export default function App() {
  const [sortedData, setSortedData] = useState(data);

  const sortDates = () => {
    const sortedByDate = [...sortedData].sort(
      (a, b) => new Date(a.date) - new Date(b.date),
    );
    setSortedData(sortedByDate);
  };

  const sortViews = () => {
    const sortedByViews = [...sortedData].sort((a, b) => a.views - b.views);
    setSortedData(sortedByViews);
  };

  return (
    <div className="App">
      <h1>Date & Views Table</h1>
      <button className="button" onClick={sortDates}>
        Sort by Date
      </button>
      <button className="button" onClick={sortViews}>
        Sort by Views
      </button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((ele) => {
            return (
              <tr>
                <td>{ele.date}</td>
                <td>{ele.views}</td>
                <td>{ele.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
