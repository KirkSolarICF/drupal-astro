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
                    <div class="stat"><h3>Presupuesto total para incentivos:</h3> <p>${item.amountReserved}</p></div>
                    <div class="stat"><h3>Cantidad distribuida:</h3> <p>${item.amountDispersed}</p></div>
                    <div class="stat"><h3>Cantidad por aprobar:</h3> <p>${item.amountPendingApporoval}</p></div>
                    <div class="stat"><h3>Cantidad disponible:</h3> <p>${item.amountRemaining}</p></div>
                `;
            }
            if (type === 'participation') {
                listItem.innerHTML = `
                   <div class="stat"><h3>Número de viviendas reconstruidas:</h3> <p>${item.numberofReconstructedResidences}</p></div>
                    <div class="stat"><h3>Número de solicitudes recibidas y aprobadas:</h3> <p>${item.numberofApplicationsReceivedandApproved}</p></div>
                    <div class="stat"><h3>Número de residencias en lista de espera de ayuda tras un desastre natural:</h3> <p>${item.numberofResidencesonDisasterReliefWaitlist}</p></div>
                    <div class="stat"><h3>Número de solicitudes para incentivos de capital:</h3> <p>${item.numberofEquityIncentiveApplications}</p></div>
                    <div class="stat"><h3>Número de solicitudes aprobadas para incentivos de capital:</h3> <p>${item.numberofApprovedEquityIncentiveApplications}</p></div>
                    <div class="stat"><h3>Número de solicitudes de reducción de emisiones por encima del código:</h3> <p>${item.numberofAboveCodeEmissionReductionApplications}</p></div>
                    <div class="stat"><h3>Número de solicitudes aprobadas de reducción de emisiones por encima del código:</h3> <p>${item.numberofApprovedAboveCodeEmissionReductionApplications}</p></div>
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
                    
                    <div class="item primary"><span>Presupuesto total para incentivos</span> ${item.amountReserved}</div>
                    <div class="item secondary"><span>Cantidad distribuida</span> ${item.amountDispersed}</div>
                    <div class="item primary"><span>Cantidad por aprobar</span> ${item.amountPendingApporoval}</div>
                    <div class="item secondary"><span>Cantidad disponible</span> ${item.amountRemaining}</div>
                   
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
                   <div class="item secondary"><div class="text-section"><p>Número de viviendas reconstruidas</p> <p> ${item.numberofReconstructedResidences}</p></div></div>
                   <div class="item accent"><div class="text-section"><p>Número de solicitudes recibidas y aprobadas</p> <p> ${item.numberofApplicationsReceivedandApproved}</p></div></div>
                   <div class="item secondary"><div class="text-section"><p>Número de residencias en lista de espera de ayuda tras un desastre natural</p> <p> ${item.numberofResidencesonDisasterReliefWaitlist}</p></div></div>

                   <div class="item accent"><div class="text-section"><p>Número de solicitudes para incentivos de capital</p> <p> ${item.numberofEquityIncentiveApplications}</p></div></div>
                   <div class="item secondary"><div class="text-section"><p>Número de solicitudes aprobadas para incentivos de capital </p> <p> ${item.numberofApprovedEquityIncentiveApplications}</p></div></div>
                   <div class="item accent"><div class="text-section"><p>Número de solicitudes de reducción de emisiones por encima del código</p> <p> ${item.numberofAboveCodeEmissionReductionApplications}</p></div></div>
                   <div class="item secondary"><div class="text-section"><p>Número de solicitudes aprobadas de reducción de emisiones por encima del código</p> <p> ${item.numberofApprovedAboveCodeEmissionReductionApplications}</p></div></div>
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