import React, { useEffect } from "react"
import ListItem from "./listItem"
import Search from "./search"
import NoResultsFound from "./noResultsFound"

export default function ListFaqs({ faqs, id, setFaqs }) {
  const [filteredValue, SetFilteredValue] = React.useState("")
  const [noFilteredMatches, SetNoFilteredMatches] = React.useState(false)
  const [totalMatches, SetTotalMatches] = React.useState(0)

  useEffect(() => {
    const items = faqs.filter((faq) => {
      return faq.question.toLowerCase().includes(filteredValue.toLowerCase())
    })

    SetNoFilteredMatches(!items.length ? true : false)
    SetTotalMatches(items.length)

    return () => {}
  }, [faqs, filteredValue])

  return (
    <>
      <div className=" p-4 bg-dark bg-opacity-10 mt-4">
        <Search SetFilteredValue={SetFilteredValue} />
      </div>
      {totalMatches !== 0 && filteredValue !== "" && (
        <h6 className="text-secondary m-0 p-0 mt-4">
          {totalMatches} {totalMatches === 1 ? "faq" : "faqs"} found for{" "}
          <span className="text-dark">{filteredValue}.</span>
        </h6>
      )}
      {filteredValue !== "" && noFilteredMatches && (
        <NoResultsFound filteredValue={filteredValue} />
      )}
      <div className="mt-4 mb-4">
        {faqs.length ? (
          <>
            {faqs.map((faq) => {
              return (
                faq.question
                  .toLowerCase()
                  .includes(filteredValue.toLowerCase()) && (
                  <ListItem
                    key={faq.id}
                    faq={faq}
                    id={id}
                    setFaqs={setFaqs}
                    faqs={faqs}
                  />
                )
              )
            })}
          </>
        ) : (
          <>
            {!filteredValue.length && (
              <h6>No FAQs found, Get started by adding a FAQs!</h6>
            )}
          </>
        )}
      </div>
    </>
  )
}
