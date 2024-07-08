document.addEventListener('DOMContentLoaded', function () {
    const stateElements = document.querySelectorAll('.state');
    const stateNameDiv = document.getElementById('state-name');

    const stateNames = {
        'Andhra_Pradesh': 'Andhra Pradesh',
        'Arunachal_Pradesh': 'Arunachal Pradesh',
        'Assam': 'Assam',
        'Bihar': 'Bihar',
        'Chhattisgarh': 'Chhattisgarh',
        'Goa': 'Goa',
        'Gujarat': 'Gujarat',
        'Haryana': 'Haryana',
        'Himachal_Pradesh': 'Himachal Pradesh',
        // Add more state mappings here
    };

    stateElements.forEach(function (state) {
        state.addEventListener('mouseover', function (event) {
            const stateId = event.target.id;
            stateNameDiv.textContent = stateNames[stateId];
            stateNameDiv.style.display = 'block';
            const rect = event.target.getBoundingClientRect();
            stateNameDiv.style.left = `${rect.left + window.scrollX}px`;
            stateNameDiv.style.top = `${rect.top + window.scrollY - 30}px`;
        });

        state.addEventListener('mousemove', function (event) {
            const rect = event.target.getBoundingClientRect();
            stateNameDiv.style.left = `${rect.left + window.scrollX}px`;
            stateNameDiv.style.top = `${rect.top + window.scrollY - 30}px`;
        });

        state.addEventListener('mouseout', function () {
            stateNameDiv.style.display = 'none';
        });
    });
});
