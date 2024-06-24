document.getElementById('courseForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const totalCourses = document.getElementById('totalCourses').value;
    const dynamicInputs = document.getElementById('dynamicInputs');
    dynamicInputs.innerHTML = '';  // Clear previous inputs

    for (let i = 1; i <= totalCourses; i++) {
        const courseGroup = document.createElement('div');
        courseGroup.className = 'form-group';

        const courseLabel = document.createElement('label');
        courseLabel.textContent = `Course ${i} Code:`;
        courseGroup.appendChild(courseLabel);

        const courseInput = document.createElement('input');
        courseInput.type = 'text';
        courseInput.name = `courseCode${i}`;
        courseInput.required = true;
        courseGroup.appendChild(courseInput);

        const gradeLabel = document.createElement('label');
        gradeLabel.textContent = ` Grade:`;
        courseGroup.appendChild(gradeLabel);

        const gradeInput = document.createElement('input');
        gradeInput.type = 'number';
        gradeInput.name = `grade${i}`;
        gradeInput.min = 0;
        gradeInput.max = 10;
        gradeInput.required = true;
        courseGroup.appendChild(gradeInput);

        dynamicInputs.appendChild(courseGroup);
    }

    document.getElementById('calculateCgpa').style.display = 'block';
});
// Sample data sheet with course codes and their corresponding credit values
const courseDataSheet = {
    'CS101': 4,
    'MA101': 3,
    'PH101': 4,
    'EE101': 3,
    'HS101': 2,
    // Add more courses and their credit values as needed
};

document.getElementById('calculateCgpa').addEventListener('click', function() {
    const totalCourses = document.getElementById('totalCourses').value;
    let totalCredits = 0;
    let weightedSum = 0;

    for (let i = 1; i <= totalCourses; i++) {
        const courseCode = document.querySelector(`input[name="courseCode${i}"]`).value.toUpperCase();
        const grade = parseFloat(document.querySelector(`input[name="grade${i}"]`).value);

        if (courseDataSheet[courseCode]) {
            const credits = courseDataSheet[courseCode];
            weightedSum += credits * grade;
            totalCredits += credits;
        } else {
            alert(`Course code ${courseCode} not found in data sheet.`);
            return;
        }
    }

    const cgpa = weightedSum / totalCredits;
    document.getElementById('cgpaResult').textContent = `Your CGPA is: ${cgpa.toFixed(2)}`;
});
