function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    const templateSelect = document.getElementById('templateSelect').value;
    let resumeHtml = '';

    if (templateSelect === 'template1') {
        resumeHtml = `
            <h2>${name}</h2>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;
    } else if (templateSelect === 'template2') {
        resumeHtml = `
            <h2>${name}</h2>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <h3>Education</h3>
            <ul>
                ${education.split('\n').map(line => `<li>${line}</li>`).join('')}
            </ul>
            <h3>Experience</h3>
            <ul>
                ${experience.split('\n').map(line => `<li>${line}</li>`).join('')}
            </ul>
            <h3>Skills</h3>
            <ul>
                ${skills.split('\n').map(line => `<li>${line}</li>`).join('')}
            </ul>
        `;
    }

    document.getElementById('resumePreview').innerHTML = resumeHtml;
}

function downloadResume() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const resumeContent = document.getElementById('resumePreview').innerHTML;

    doc.fromHTML(resumeContent, 10, 10);
    doc.save('resume.pdf');
}