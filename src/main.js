const aboutBtn = document.getElementById('about-btn')
const resumeBtn = document.getElementById('resume-btn')
const aboutSection = document.getElementById('about-me')
const resumeSection = document.getElementById('resume')

aboutBtn.addEventListener('click', () => {
  aboutSection.classList.remove('hidden');
  resumeSection.classList.add('hidden');
})

resumeBtn.addEventListener('click', () => {
  resumeSection.classList.remove('hidden');
  aboutSection.classList.add('hidden');
})

