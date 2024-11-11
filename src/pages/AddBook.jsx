import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaPen } from 'react-icons/fa'
import TextField from '../components/form_components/TextField'
import FormButtonComponent from '../components/form_components/FormButtonComponent'
import TokenManager from '../managers/TokenManager'

const AddBook = () => {
    const {updateHerobar} = useHerobar()
    useEffect(() => {
       updateHerobar('Add New Book')
       return () =>  updateHerobar("","",null)
    }, [])

    const initialBookState = {
        title: '',
        yearsOfPublication: '',
        authors: '',
        language: ''
    }
    const [book, setBook] = useState(initialBookState)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(
            "http://localhost:8080/books/addBook",
            book,
            { headers: { 'Authorization': ("Bearer " + TokenManager.getAccessToken)  } })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.statusCode)
                } else {
                    console.log(error)
                }
            })
    }

    return (
        <section className="section main-section">
            <div className="card mb-6">
                <header className="card-header">
                    <p className="card-header-title">
                        <span className="icon">
                            <FaPen />
                        </span>
                        Add New Book
                    </p>
                </header>
                <div className="card-content">
                    <form
                        method='post'
                        onSubmit={handleSubmit}>
                        <TextField
                            title='Title'
                            value={book.title}
                            name='title'
                            onChange={handleChange} />

                        <TextField
                            title='Publication Year'
                            value={book.yearsOfPublication}
                            name='yearsOfPublication'
                            onChange={handleChange} />

                        <TextField
                            title='Authors'
                            value={book.authors}
                            name='authors'
                            onChange={handleChange} />

                        <TextField
                            title='Language'
                            value={book.language}
                            name='language'
                            onChange={handleChange} />
                        <FormButtonComponent />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AddBook