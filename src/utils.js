function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
}


function getInTouch(){
    window.location.href = "https://calendly.com/beod-outsourced-coder/30min";
}



export { scrollToSection, getInTouch }