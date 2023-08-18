function showElement(element) {
    element.style.display = 'block';
}

function hideElement(element) {
    element.style.display = 'none';
}
[
    'leadForm1',
    'leadForm2',
    'leadForm3',
].forEach(formId => {
    const form = document.getElementById(formId);

    form.addEventListener("submit", async (event) => {
        const inputId = `${formId}email`;
        const successMessageId = `${formId}success`;
        const failMessageId = `${formId}fail`;

        event.preventDefault();
        try {
            await axios.post('https://audio-generator-api.onrender.com/api/register',
                {
                    'email': document.getElementById(inputId).value,
                },
                {
                    'headers': {
                        'Content-Type': 'application/json'
                    }
                });
            hideElement(form);
            showElement(document.getElementById(successMessageId));
            hideElement(document.getElementById(failMessageId));
        } catch {
            showElement(document.getElementById(failMessageId));
        }
    });
})
