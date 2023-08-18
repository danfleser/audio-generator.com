const localStorageSubscribeKey = 'subscribed';
const formIds = [
    'leadForm1',
    'leadForm2',
];

function showElement(element) {
    element.style.display = 'block';
}

function hideElement(element) {
    element.style.display = 'none';
}

function onEmailSubmitSuccess() {
    formIds.forEach(formId => {
        // hide form and fail message
        hideElement(document.getElementById(formId));
        hideElement(document.getElementById(`${formId}fail`));
        // show success message
        showElement(document.getElementById(`${formId}success`));
    });

    localStorage.setItem(localStorageSubscribeKey, true);
}

formIds.forEach(formId => {
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
            onEmailSubmitSuccess();
        } catch {
            // show retry message
            showElement(document.getElementById(failMessageId));
        }
    });
})

if (localStorage.getItem(localStorageSubscribeKey)) {
    onEmailSubmitSuccess();
}