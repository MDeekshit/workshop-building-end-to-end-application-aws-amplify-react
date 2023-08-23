import React, { useEffect, useState } from "react"
import { withAuthenticator } from "@aws-amplify/ui-react"
import { ToastContainer } from "react-toastify"


import AddFaq from "./components/addFaq"
import AddFaqBtn from "./components/addFaqBtn"
import Header from "./components/header"
import ListFaqs from "./components/list"
import Spinner from "./components/spinner"

import { fetchFaqs } from "./services"

import "@aws-amplify/ui-react/styles.css"

function App({ user, signOut }) {
  const [showForm, setShowForm] = useState(false)
  const [faqs, setFaqs] = useState([])
  const [id, setId] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const faqsData = await fetchFaqs()

      if (!faqs.length) setLoading(false)

      const compareCreatedAt = (a, b) =>
        new Date(a.createdAt) - new Date(b.createdAt)
      faqsData.sort(compareCreatedAt)
      setFaqs(faqsData)
    }

    fetchItems()
    return () => { }
  }, [])


  useEffect(() => {
    setId(id)
    return () => { }
  }, [id])

  return (
    <>
      <Header user={user} signOut={signOut} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <h1 className="m-0 p-0">Frequently Asked Questions (FAQs)</h1>
              {!showForm && <AddFaqBtn setShowForm={setShowForm} />}
            </div>
            <hr className="mb-0" />
          </div>
        </div>
        <div className="row">
          <div className=" col-12 col-md-8 order-1 order-md-0">
            <AddFaq
              faqs={faqs}
              setId={setId}
              setFaqs={setFaqs}
              setShowForm={setShowForm}
            />
            {loading ? (
              <Spinner />
            ) : (
              <ListFaqs faqs={faqs} id={id} setFaqs={setFaqs} />
            )}
          </div>
          <div className="col-12 col-md-4 order-0 order-md-1">
            <div className="bg-dark bg-opacity-10 py-4 px-4 mt-4 nav sticky-top">
              <h5 className="d-block w-100 m-0 mb-2">Quick Links</h5>
              {faqs.length !== 0 &&
                <ol className="m-0 p-0" style={{ listStyle: 'none' }}>
                  {faqs.map(faq => {
                    return <li key={faq.id}><a href={`#${faq.id}`} className="d-inline-block mb-2 text-decoration-none">{faq.question}</a></li>
                  })}
                </ol>
              }
            </div>
          </div>
        </div>
      </div >
      <ToastContainer />
    </>
  )
}

export default withAuthenticator(App)
