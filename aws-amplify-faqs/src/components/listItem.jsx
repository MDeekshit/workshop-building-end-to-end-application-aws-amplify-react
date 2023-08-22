import React from "react"
import { API, graphqlOperation } from "aws-amplify"
import { deleteFAQ } from "../graphql/mutations"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function ListItem({ faq, id, setFaqs, faqs }) {
  const deleteItem = async (itemId) => {
    try {
      const input = {
        input: {
          id: itemId,
        },
      }

      let delFAQ = await API.graphql(graphqlOperation(deleteFAQ, input))
      const deletedItem = delFAQ?.data?.deleteFAQ
      const { id, question } = deletedItem

      const filteredItems = faqs.filter((faq) => faq.id !== id)
      setFaqs(filteredItems)

      toast.info(`Deleted: "${question}"`, {
        theme: "colored",
      })
    } catch (error) {
      toast.error(error.message, {
        theme: "colored",
      })
    }
  }

  return (
    <div className={faq.id === id ? "text-success" : ""}>
      <div
        key={faq.id}
        className="d-flex justify-content-between align-items-center"
      >
        <h3 id={`${faq.id}`} className="">
          {faq.question}
        </h3>
        <button
          title={`Delete ${faq.question}`}
          className="btn btn-link btn-lg m-0 p-0"
          type="button"
          onClick={(e) => {
            const itemId = faq.id
            deleteItem(itemId)
          }}
        >
          <i className="bi bi-trash text-danger h5"></i>
        </button>
      </div>
      <p className="mb-5" style={{ textAlign: "justify" }}>
        {faq.answer}
      </p>
    </div>
  )
}
