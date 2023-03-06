import React from 'react'
import { useFormik } from 'formik'

function YoutubeForm() {
    const initialValues = {
        name: 'Vishwas',
        email: '',
        channel: ''
    }
    const onSubmit = values => {
        console.log('form data', formik.values)
    }

        const validate = values => {
            let errors = {}
            if (!values.name) {
                errors.name = "Required"
            }
            if (!values.emai1) {
                errors.emai1 = "Required"
            }
            if (!values.channel) {
                errors.channel = "Required"
            }
            return errors
        }
    const formik = useFormik({
        initialValues, 
        onSubmit,
        validate
    }) // basically returns fromik object in whch there are form fields in it; should must match name attribute property:-
    // console.log('Form Values', formik.values)
    return (
        <div className='my-3 container'>
            <form className='border' onSubmit={formik.handleSubmit}>
                <div className="mb-3 container">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </div>
                <div className="mb-3 container">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        aria-describedby="emailHelp"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>

                <div className="mb-3 container">
                    <label htmlFor="channel" className="form-label">
                        Channel
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="channel"
                        name="channel"
                        onChange={formik.handleChange}
                        value={formik.values.channel}
                    />
                </div>

                <button type="submit" className="btn btn-primary mb-2">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default YoutubeForm