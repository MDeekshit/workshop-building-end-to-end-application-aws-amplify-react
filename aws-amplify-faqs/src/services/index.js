import { API, graphqlOperation } from "aws-amplify"
import { createFAQ } from "../graphql/mutations"
import { listFAQS } from "../graphql/queries"

const fetchFaqs = async () => {
    try {
        const faqsData = await API.graphql(graphqlOperation(listFAQS))
        const faqs = faqsData.data.listFAQS.items
        return faqs
    } catch (error) {
        console.log("error fetching FAQs")
        return error
    }
}

const addFAQ = async (question, answer) => {
    try {
        const input = {
            input: {
                question,
                answer,
            },
        }

        const url = API.graphql(graphqlOperation(createFAQ, input))
        const addFAQ = await url
        const faq = addFAQ?.data?.createFAQ
        return faq
    } catch (error) {
        console.error(error)
        return error
    }
}

export { fetchFaqs, addFAQ }
