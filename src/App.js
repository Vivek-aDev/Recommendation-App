import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  poetry: [
    { name: "Poems About Birds", rating: "4/5" },
    { name: "Days like these", rating: "3.5/5" },
    { name: "The stone Age", rating: "3.9/5" }
  ],

  fiction: [
    { name: "life's amazing secret", rating: "5/5" },
    { name: "Think like a monk", rating: "4.5/5" },
    { name: "Now i am here", rating: "3.5/5" }
  ],
  biography: [
    { name: "Autobiography of a Yogi", rating: "5/5" },
    { name: "Wings of Fire", rating: "5/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("biography");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 goodBooks </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid blue",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid blue",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
