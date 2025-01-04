
const form = document.querySelector('.feedback-form');
const FORM_DATA = "feedback-form-data";

function saveFormItem(event) {
    event.preventDefault();
    const formList = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
    };
    console.log(formList);
    const transformedFormList = JSON.stringify(formList);
    localStorage.setItem(FORM_DATA, transformedFormList);
    form.reset();
}
form.addEventListener("submit", saveFormItem);