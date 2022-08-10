import React from 'react'
import "./ContactForm.css"
import HubspotForm from 'react-hubspot-form'

function ContactForm() {
    return (
        <div>
            <span class="anchor" id="contact"></span>
            <section class="container">
            <div class="form">
            <h1 class="form-header">Contact Us</h1>
                <HubspotForm
                portalId='25985231'
                formId='10991c25-09c6-4cc0-ad5f-2dc433d141c6'
                onSubmit={() => console.log('Submit!')}
                onReady={(form) => console.log('Form ready!')}
                loading={<div>Loading...</div>}
                />
            </div>
            </section>
        </div>
    )
}

export default ContactForm