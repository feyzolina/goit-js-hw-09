import"./assets/styles-BkBDO4mP.js";const e=document.querySelector(".feedback-form"),s="feedback-form-data";function r(m){m.preventDefault();const t={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};console.log(t);const o=JSON.stringify(t);localStorage.setItem(s,o),e.reset()}e.addEventListener("submit",r);
//# sourceMappingURL=02-form.js.map
