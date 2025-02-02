import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async() => {
    const response = await axios.get(baseUrl);
    return response.data
}

const createNew = async(content) => {
    const anecdoteObj = { content, votes:0 }
    const response = await axios.post(baseUrl, anecdoteObj)
    return response.data
}

const voteAnecdote = async (id, votes) => {
    const requestObject = { votes }
    const response = await axios.patch(`${baseUrl}/${id}`, requestObject)
    return response.data
}

export default {
    getAll,
    createNew,
    voteAnecdote
}