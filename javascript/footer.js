const footerSlot = document.querySelector("#footer");

if (!footerSlot) {
  throw new Error("#footer was not found.");
}

fetch("html/footer.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Could not load footer.html: ${response.status}`);
    }
    return response.text();
  })
  .then((html) => {
    footerSlot.innerHTML = html;
    const footerLink = footerSlot.querySelector("#linkki");
    const kieli = document.documentElement.lang ? document.documentElement.lang : "en";
    switch(kieli) {
      case "fi":
        footerLink.setAttribute("href", "lomake.html");
        break;
      case "en":
      default:
        footerLink.setAttribute("href", "form.html");
        break;
    }
  })
  .catch((error) => console.error(error));