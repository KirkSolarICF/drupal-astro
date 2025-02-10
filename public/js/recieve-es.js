document.addEventListener("DOMContentLoaded", function() {
    const sortDropdown = document.getElementById('sortDropdown');
    const incentiveList = document.getElementById('incentiveList');

    // Sample JSON data
    const incentives = {
        single: [
            {
                rebuildStandard: "Totalmente eléctrico - Título 24",
                base: "$10,000",
                programRange: "$8,000 - $10,000",
                equity2024: "$15,000",
                programRangeEquity: "$12,000 - $18,000"
            },
        ],
        modular: [
            {
                rebuildStandard: "Totalmente eléctrico - Título 24",
                base: "$8,000",
                programRange: "$6,000 - $10,000",
                equity2024: "$12,000",
                programRangeEquity: "$9,000 - $15,000"
            },
        ],
        man: [
            {
                rebuildStandard: "Totalmente eléctrico - Energy Star 2.0",
                base: "$7,000",
                programRange: "$5,000 - $9,000",
                equity2024: "$10,500",
                programRangeEquity: "$7,500 - $13,500"
            },
        ],
        adu: [
            {
                rebuildStandard: "Totalmente eléctrico - Título 24",
                base: "$7,000",
                programRange: "$5,000 - $9,000",
                equity2024: "$10,500",
                programRangeEquity: "$7,500 - $13,500"
            },
        ],
        multi: [
            {
                rebuildStandard: "Totalmente eléctrico - Título 24",
                base: "$5,000",
                programRange: "$3,000 - $7,000",
                equity2024: "$7,500",
                programRangeEquity: "$4,500 - $10,500"
            },
        ],
        whole: [
            {
                technology: "Batería para toda la vivienda",
                baseAmount: "$5,000",
                equityAmount: "$7,500"
            },
           
        ],
        ultralow: [
            {
                technology: "Calentador de agua con bomba de calor refrigerante de GWP ultrabajo",
                baseAmount: "$3,000",
                equityAmount: "$4,500"
            },
           
        ],
        passive: [
            {
                technology: "Medidas de la casa pasiva",
                baseAmount: "$20,000",
                equityAmount: "$30,000"
            },
           
        ]
    };

    // Function to display incentives
    function displayIncentives(data, type) {
        incentiveList.innerHTML = '';
        data.forEach(item => {
            const listItem = document.createElement('div');

             if (type === 'single' || type === 'modular' || type === 'man' || type === 'adu' || type === 'multi') {
                listItem.innerHTML = `
                    
                    <div class="item primary"><span>Incentivo estándar para reconstrucción</span> ${item.rebuildStandard}</div>
                    <div class="item secondary"><span>Base en 2024</span> ${item.base}</div>
                    <div class="item primary"><span>Rango permitido del programa - Base</span> ${item.programRange}</div>
                    <div class="item secondary"><span>Capital 2024</span> ${item.equity2024}</div>
                    <div class="item primary"><span>Rango permitido del programa - Capital</span> ${item.programRangeEquity}</div>
                `;
            }
            if (type === 'whole' || type === 'ultralow' || type === 'passive') {
                listItem.innerHTML = `
                    <div class="item primary"><span>Cantidad base del incentivo</span>  ${item.baseAmount}</div>
                    <div class="item secondary"><span>Cantidad del incentivo según capital</span>  ${item.equityAmount}</div>
                `;
            }
            incentiveList.appendChild(listItem);
            gsap.fromTo('#incentiveList .item', {opacity:0}, {opacity:1, stagger:0.1, ease:'back'} )
            gsap.fromTo('#incentiveList .item span', {scale:0}, {scale:1, stagger:0.1, ease:'power4.in'}  )
        });
    }

    // Initial display
    displayIncentives(incentives.single, 'single');

    // Event listener for sorting
    sortDropdown.addEventListener('change', function() {
        const sortBy = sortDropdown.value;
        displayIncentives(incentives[sortBy], sortBy);
    });
});