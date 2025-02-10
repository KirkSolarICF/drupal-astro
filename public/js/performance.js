document.addEventListener("DOMContentLoaded", function() {
    const homeDropdown = document.getElementById('homeDropdown');
    const performanceList = document.getElementById('performanceList');
    const byTheNumbers = document.getElementById('byTheNumbers');
    const byTheNumbersParticipation = document.getElementById('byTheNumbersParticpation');

    if(homeDropdown) {
    // Function to display performances
    // Fetch JSON data from funds.json
    fetch('./js/funds.json')
        .then(response => response.json())
        .then(performances => {
            // Function to display performances
            function displayperformances(data, type) {
                performanceList.innerHTML = '';
                data.forEach(item => {
        
            const listItem = document.createElement('div');
            listItem.classList.add('statistics');
             if (type === 'program') {
                listItem.innerHTML = `
                    <div class="stat"><h3>Total Incentive Budget:</h3> <p>${item.amountReserved}</p></div>
                    <div class="stat"><h3>Amount disbursed:</h3> <p>${item.amountDispersed}</p></div>
                    <div class="stat"><h3>Amount pending approval:</h3> <p>${item.amountPendingApporoval}</p></div>
                    <div class="stat"><h3>Amount remaining:</h3> <p>${item.amountRemaining}</p></div>
                `;
            }
            if (type === 'participation') {
                listItem.innerHTML = `
                   <div class="stat"><h3>Number of reconstructed residences:</h3> <p>${item.numberofReconstructedResidences}</p></div>
                    <div class="stat"><h3>Number of applications received and approved:</h3> <p>${item.numberofApplicationsReceivedandApproved}</p></div>
                    <div class="stat"><h3>Number of residences on disaster relief waitlist:</h3> <p>${item.numberofResidencesonDisasterReliefWaitlist}</p></div>
                    <div class="stat"><h3>Number of equity incentive applications:</h3> <p>${item.numberofEquityIncentiveApplications}</p></div>
                    <div class="stat"><h3>Number of approved equity incentive applications:</h3> <p>${item.numberofApprovedEquityIncentiveApplications}</p></div>
                    <div class="stat"><h3>Number of above-code emission reduction applications:</h3> <p>${item.numberofAboveCodeEmissionReductionApplications}</p></div>
                    <div class="stat"><h3>Number of approved above-code emission reduction applications:</h3> <p>${item.numberofApprovedAboveCodeEmissionReductionApplications}</p></div>
                `;
            }
            performanceList.appendChild(listItem);
            gsap.fromTo('#performanceList .stat', {opacity:0}, {opacity:1, stagger:0.1, ease:'back'} )
            gsap.fromTo('#performanceList .stat p', {scaleY:0}, {scaleY:1, stagger:0.1, ease:'power4.in'}  )
        })
    }
    // Initial display
    displayperformances(performances.program, 'program');

    // Event listener for sorting
    homeDropdown.addEventListener('change', function() {
        const sortBy = homeDropdown.value;
        displayperformances(performances[sortBy], sortBy);
    });
    }).catch(error => console.error('Error fetching the JSON data:', error));
}
// end if

    // if on By the Numbers
    if(byTheNumbers) {
    // Function to display performances
    // Fetch JSON data from funds.json
    fetch('./js/funds.json')
        .then(response => response.json())
        .then(performances => {
            // Function to display performances
            function displayperformances(data, type) {
                byTheNumbers.innerHTML = '';
                data.forEach(item => {
        
            const listItem = document.createElement('div');
            
             if (type === 'program') {
                listItem.innerHTML = `
                    
                    <div class="item primary"><span>Total Incentive Budget</span> ${item.amountReserved}</div>
                    <div class="item secondary"><span>Amount disbursed</span> ${item.amountDispersed}</div>
                    <div class="item primary"><span>Amount pending approval</span> ${item.amountPendingApporoval}</div>
                    <div class="item secondary"><span>Amount remaining</span> ${item.amountRemaining}</div>
                   
                `;
                byTheNumbers.appendChild(listItem);
            }
        })
    }
    // Initial display
    displayperformances(performances.program, 'program');
    }).catch(error => console.error('Error fetching the JSON data:', error));
}

    // if on By the Numbers
    if(byTheNumbersParticipation) {
    // Function to display performances
    // Fetch JSON data from funds.json
    fetch('./js/funds.json')
        .then(response => response.json())
        .then(performances => {
            // Function to display performances
            function displayperformances(data, type) {
                byTheNumbersParticipation.innerHTML = '';
                data.forEach(item => {
        
            const listItem = document.createElement('div');
            listItem.classList.add('thumb-section');
            if (type === 'participation') {
                listItem.innerHTML = `
                   <div class="item secondary"><div class="text-section"><p>Number of reconstructed residences</p> <p> ${item.numberofReconstructedResidences}</p></div></div>
                   <div class="item accent"><div class="text-section"><p>Number of applications received and approved</p> <p> ${item.numberofApplicationsReceivedandApproved}</p></div></div>
                   <div class="item secondary"><div class="text-section"><p>Number of residences on disaster relief waitlist</p> <p> ${item.numberofResidencesonDisasterReliefWaitlist}</p></div></div>

                   <div class="item accent"><div class="text-section"><p>Number of equity incentive applications</p> <p> ${item.numberofEquityIncentiveApplications}</p></div></div>
                   <div class="item secondary"><div class="text-section"><p>Number of approved equity incentive applications</p> <p> ${item.numberofApprovedEquityIncentiveApplications}</p></div></div>
                   <div class="item accent"><div class="text-section"><p>Number of above-code emission reduction applications</p> <p> ${item.numberofAboveCodeEmissionReductionApplications}</p></div></div>
                   <div class="item secondary"><div class="text-section"><p>Number of approved above-code emission reduction applications</p> <p> ${item.numberofApprovedAboveCodeEmissionReductionApplications}</p></div></div>
                `;
                byTheNumbersParticipation.appendChild(listItem);
            }
        })
    }
    // Initial display
    displayperformances(performances.participation, 'participation');
    }).catch(error => console.error('Error fetching the JSON data:', error));
}

});