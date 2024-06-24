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
