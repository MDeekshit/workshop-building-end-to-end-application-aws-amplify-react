import React from "react"

export default function Search({ SetFilteredValue }) {
  const [value, setValue] = React.useState("")

  return (
    <form className="form-inline">
      <div className="input-group">
        <input
          value={value}
          type="text"
          className="form-control form-control-xl"
          placeholder="Filter FAQs, start typing at least 3 characters"
          aria-label="Example input"
          aria-describedby="button-addon1"
          onChange={(e) => {
            const { value } = e.target
            setValue(value)
            SetFilteredValue(value.length >= 3 ? value : "")
          }}
        />
        {/* <i class="bi bi-funnel-fill h4 "></i> */}
      </div>
    </form>
  )
}
