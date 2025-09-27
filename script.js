function toggleRole() {
   const roleSwitch = document.getElementById('roleSwitch');
   const formTitle = document.getElementById('formTitle');
   if (roleSwitch.checked) {
        formTitle.textContent = 'प्राधिकरण लॉगिन';
    }else {
       formTitle.textContent = 'लॉगिन / पंजीकरण';
    }
    }
 function showSignup() {
    alert('Redirect to Sign Up page (to be implemented)');
}