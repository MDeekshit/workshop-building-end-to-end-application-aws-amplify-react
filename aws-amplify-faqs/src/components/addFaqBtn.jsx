import React from "react"

export default function AddFaqBtn({ setShowForm }) {
  return (
    <button
      className="ml-auto btn btn-primary cursor-pointer"
      data-bs-toggle="collapse"
      data-bs-target="#collapseOne"
      aria-expanded="true"
      aria-controls="collapseOne"
      onClick={(e) => {
        setShowForm(true)
      }}
    >
      Add FAQ
    </button>
  )
}
