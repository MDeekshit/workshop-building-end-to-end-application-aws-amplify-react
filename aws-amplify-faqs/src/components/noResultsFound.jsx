import React from "react"

export default function NoResultsFound({ filteredValue }) {
  return (
    <div className="d-flex flex-column align-items-center">
      <div>
        <i className="bi bi-search text-info" style={{ fontSize: "148px" }}></i>
      </div>
      <h1>No items found!</h1>
      <p>
        Sorry mate... no matches found for{" "}
        <span className="text-danger">{filteredValue}</span>!
      </p>
    </div>
  )
}
