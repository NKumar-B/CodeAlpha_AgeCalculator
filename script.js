// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.innerText = 'Light Mode';
    } else {
        themeToggleBtn.innerText = 'Dark Mode';
    }
});

// Logic to reveal the hidden calculator section
const showCalculatorBtn = document.getElementById('show-calculator-btn');
const calculatorSection = document.getElementById('calculator');

showCalculatorBtn.addEventListener('click', () => {
    // Remove the hidden class
    calculatorSection.classList.remove('hidden');
    
    // Smoothly scroll down to the calculator
    setTimeout(() => {
        calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }, 50);
});

// Age Calculator Logic
function calculateAge() {
    const nameInput = document.getElementById('userName').value.trim();
    const dobInput = document.getElementById('dob').value;
    const errorElement = document.getElementById('error-message');

    // Reset error message
    errorElement.innerText = '';

    // Validation
    if (!nameInput || !dobInput) {
        errorElement.innerText = 'Please enter both your name and Date of Birth.';
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    if (dob > today) {
        errorElement.innerText = 'Date of birth cannot be in the future.';
        return;
    }

    // Calculate Age
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Show Popup Modal
    const modalText = document.getElementById('modal-text');
    const modal = document.getElementById('result-modal');

    modalText.innerHTML = `Hello <strong>${nameInput}</strong>!<br><br>You are exactly <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old.`;
    
    // Display the modal
    modal.style.display = 'flex';
}

// Modal OK Button Logic
function closeModal() {
    const modal = document.getElementById('result-modal');
    
    // Hide the modal
    modal.style.display = 'none';
    
    // Clear inputs
    document.getElementById('userName').value = '';
    document.getElementById('dob').value = '';
    
    // Hide the calculator section again and redirect to home section smoothly
    calculatorSection.classList.add('hidden');
    window.location.hash = '#home';
}