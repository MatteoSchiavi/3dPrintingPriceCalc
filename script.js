document.getElementById('calcBtn').addEventListener('click', function() {
    const name = document.getElementById('client').value || "Project Quote";
    const hours = parseFloat(document.getElementById('hours').value) || 0;
    const grams = parseFloat(document.getElementById('grams').value) || 0;
    const spool = parseFloat(document.getElementById('mat').value) || 20;

    // Logic: 
    // - Setup: €5.00
    // - Piacenza Energy/Wear: €0.15/hr
    // - Profit margin: 1.5x
    const setupFee = 5.00;
    const matCost = (grams / 1000) * spool;
    const runningCost = hours * 0.15;
    
    const total = setupFee + ((matCost + runningCost) * 1.5);

    const output = document.getElementById('output');
    output.classList.remove('hidden');
    
    document.getElementById('res-name').innerText = name;
    document.getElementById('res-total').innerText = `€${total.toFixed(2)}`;
    document.getElementById('res-details').innerText = `${grams}g • ${hours}h print time`;
});
