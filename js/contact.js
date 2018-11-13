
const submitContactForm = (form) => {
    const username = form.username.value
    const email = form.email.value
    const message = form.message.value

    console.log('username ', username, 'email ', email, ' message ', message)

    const url = 'https://us-central1-youclap-prod.cloudfunctions.net/api/website/contact'

    const data = {
        'username': username,
        'email': email,
        'message': message
    }

    const formData = Object.keys(data)
        .reduce((previous, current) => {
            return previous.concat([current + '=' + data[current]])
        }, [])
        .join('&')

    let htmlRequest = new XMLHttpRequest()

    htmlRequest.onreadystatechange = (_event) => {
        switch (htmlRequest.readyState) {
            case htmlRequest.OPENED:
                showLoader()
                break
            case htmlRequest.LOADING:
                break
            case htmlRequest.DONE:
                hideLoader()
                showSuccessFeedbackMessage()

                form.reset()
                break
            case htmlRequest.UNSENT:
                hideLoader()
                showFailedFeedbackMessage()
        }
        console.log('html request ', htmlRequest.readyState)
    }

    htmlRequest.open('POST', url, true)
    htmlRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
    htmlRequest.withCredentials = true
    htmlRequest.send(formData)
}

const showSuccessFeedbackMessage = () => {
    const element = document.getElementById('contact-form-feedback')
    element.innerText = 'Thank you for your message. It has been sent.'
    element.classList.add('form-mail-sent-ok')
}

const showFailedFeedbackMessage = () => {
    const element = document.getElementById('contact-form-feedback')
    element.innerText = 'Something went wrong while sending information'
    element.classList.add('form-mail-sent-ok')
}

const showWarningFeedbackMessage = () => {
    const element = document.getElementById('contact-form-feedback')
    element.innerText = 'Please check if the fields in the form are filled'
    element.classList.add('form-mail-sent-ok')
}

const showLoader = () => {
    document.getElementById('contact-form-submit-loader').classList.add('loading')
}

const hideLoader = () => {
    document.getElementById('contact-form-submit-loader').classList.remove('loading')
}

$(document).ready(() => {
    $('#contact-form').validate({
        rules: {
            username: 'required',
            message: 'required',
            terms: 'required',
            email: {
                required: true,
                email: true
            }    
        },
        message: {
            username: 'This field is required',
            email: 'Enter a valid email',
            message: 'This field is required',
            terms: 'You have to accept the terms and conditions'
        },
        submitHandler: submitContactForm
    })
})
