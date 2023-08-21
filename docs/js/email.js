const localStorageSubscribeKey = 'subscribed';
const formIds = [
    'leadForm1',
    'leadForm2',
];

function showElement(element, flex) {
    setTimeout(() => {
        element.style.display = flex ? 'flex' : 'block';
    })
}

function hideElement(element) {
    setTimeout(() => {
        element.style.display = 'none';
    })
}

function onEmailSubmitSuccess() {
    formIds.forEach(formId => {
        // hide form, loading and fail message
        hideElement(document.getElementById(formId));
        hideElement(document.getElementById(`${formId}fail`));
        hideElement(document.getElementById(`${formId}loading`));
        // show success message
        showElement(document.getElementById(`${formId}success`));
    });

    localStorage.setItem(localStorageSubscribeKey, true);
}

formIds.forEach(formId => {
    const form = document.getElementById(formId);

    form.addEventListener("submit", async (event) => {
        const inputId = `${formId}email`;
        const loadingMessageId = `${formId}loading`;
        const failMessageId = `${formId}fail`;

        event.preventDefault();
        try {
            showElement(document.getElementById(loadingMessageId));
            hideElement(document.getElementById(formId));
            await axios.post('https://vast-erin-kangaroo-toga.cyclic.cloud/api/register',
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
            // show form and retry message, hide loading
            showElement(document.getElementById(formId), true);
            showElement(document.getElementById(failMessageId));
            hideElement(document.getElementById(loadingMessageId));
        }
    });
})

if (localStorage.getItem(localStorageSubscribeKey)) {
    onEmailSubmitSuccess();
}