import React from "react";
import PropTypes from "prop-types";

export default function Results({ data }) {
  const getResults = () => {
    return data.reduce((acc, cur) => {
      if (cur.type === "answer") {
        let s = "word to be placed" + "`word [${cur.text}] `";
        if (cur.text === '') {
          s = 'wrong'
        }
        else if ((cur.text === cur.displayed) && (cur.text=='brown')) {
          s = 'correct'
        }
        console.log(cur.text + cur.displayed)

          s.concat(
            cur.text === cur.displayed
              ? "correct!"
              : "has not been place correctly"
          );
        
        return acc.concat(s);
      }
      return acc;
    }, []);
  };

  const results = getResults();

  return (
    <div>
      {results.map((s, i) => (
        <p key={i}>{s}</p>
      ))}
    </div>
  );
}

Results.propTypes = {
  data: PropTypes.array.isRequired
};
