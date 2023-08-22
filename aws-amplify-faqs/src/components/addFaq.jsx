import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { addFAQ } from "../services"
import "react-toastify/dist/ReactToastify.css"

export default function AddFaq({ setFaqs, faqs, setShowForm, setId }) {
  const [question, setQValue] = useState("")
  const [answer, setAValue] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)

  const resetForm = () => {
    setQValue("")
    setAValue("")
    setIsFormValid(false)
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    if (question && answer) {
      const isExist = faqs.filter((faq) => faq.question === question)

      if (isExist.length) {
        toast.error(`The "${isExist[0].question}" already exists!!!`, {
          theme: "colored",
        })
        return
      }

      const faq = await addFAQ(question, answer)
      setFaqs([faq, ...faqs])
      setId(faq.id)
      resetForm()
    }
  }

  useEffect(() => {
    if (question && answer) {
      setIsFormValid(true)
    }

    return () => {}
  }, [question, answer])

  return (
    <div
      id="collapseOne"
      className="accordion-collapse collapse bg-dark bg-opacity-10  p-4 mt-4 mb-4"
      data-bs-parent="#accordionExample"
    >
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="InputQuestion">Question</label>
          <input
            value={question}
            type="text"
            className="form-control"
            id="InputQuestion"
            aria-describedby="questionHelp"
            placeholder="Ex: What is AWS Amplify?"
            onChange={(e) => {
              setQValue(e.target.value)
            }}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="InputAnswer">Answer</label>
          <textarea
            value={answer}
            rows={6}
            type="password"
            className="form-control"
            id="InputAnswer"
            placeholder="Ex: AWS Amplify consists of a set of tools (open source framework, visual development environment, console) and services (web app and static website hosting) to accelerate the development of mobile and web applications on AWS."
            onChange={(e) => {
              setAValue(e.target.value)
            }}
          />
        </div>
        <div className="mt-3 d-flex justify-content-end align-items-center">
          <button
            className="btn btn-none m-2"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            onClick={() => {
              setShowForm(false)
            }}
          >
            Done
          </button>
          <button
            disabled={!question && !answer}
            type="submit"
            className="btn btn-primary cursor-pointer"
          >
            Add FAQ
          </button>
        </div>
      </form>
    </div>
  )
}
