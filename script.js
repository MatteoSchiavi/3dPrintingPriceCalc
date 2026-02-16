/** * BUSINESS CONFIGURATION
 * Edit these values to update your pricing instantly.
 */
const CONFIG = {
    PRICES: {
        PLA: 15,    // €/kg (Elegoo)
        PETG: 18,   // €/kg (eSUN)
    },
    RATES: {
        ENERGY_WEAR_HOUR: 0.18,  // €/hr (Piacenza Bill + Maintenance)
        OPPORTUNITY_HOUR: 0.50,  // €/hr (Machine Locking Fee)
        SETUP_FIXED: 2.50,       // € (Slicing/Handling)
        MARGIN: 1.5,             // 50% Profit Buffer
        WASTE_FACTOR: 1,        // +20% filament for supports/brims
    }
};

const matSelect = document.getElementById('mat');
const customGroup = document.getElementById('customGroup');

matSelect.addEventListener('change', () => {
    customGroup.classList.toggle('hidden', matSelect.value !== 'custom');
});

document.getElementById('mainBtn').addEventListener('click', () => {
    const hours = parseFloat(document.getElementById('h').value) || 0;
    const grams = parseFloat(document.getElementById('g').value) || 0;
    const rush = parseFloat(document.getElementById('rush').value);
    const difficulty = parseFloat(document.getElementById('diff').value);

    // 1. Material Math
    let priceKg, mName;
    if(matSelect.value === 'custom') {
        priceKg = parseFloat(document.getElementById('cPrice').value) || 30;
        mName = document.getElementById('cName').value || "Custom Mat";
    } else {
        priceKg = matSelect.value === 'pla' ? CONFIG.PRICES.PLA : CONFIG.PRICES.PETG;
        mName = matSelect.options[matSelect.selectedIndex].text.split(' (€')[0];
    }

    const materialCost = (grams / 1000) * priceKg * CONFIG.RATES.WASTE_FACTOR;

    // 2. Machine & Time Math
    const runningCost = hours * CONFIG.RATES.ENERGY_WEAR_HOUR;
    const lockingCost = hours * CONFIG.RATES.OPPORTUNITY_HOUR;
    const setup = CONFIG.RATES.SETUP_FIXED;

    // 3. Final Aggregation
    // (Material + Running) * Margin * Rush * Difficulty + Setup + Lock
    const techSubtotal = (materialCost + runningCost) * CONFIG.RATES.MARGIN;
    const total = (techSubtotal + setup + lockingCost) * rush * difficulty;

    // 4. Render
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('outTitle').innerText = document.getElementById('projName').value || "Print Quote";
    document.getElementById('outMeta').innerText = `${mName} • ${grams}g • ${hours}h`;
    document.getElementById('outTotal').innerText = `€${total.toFixed(2)}`;
    
    document.getElementById('outTech').innerText = `€${techSubtotal.toFixed(2)}`;
    document.getElementById('outFees').innerText = `x${(rush * difficulty).toFixed(2)}`;
    document.getElementById('outFix').innerText = `€${(setup + lockingCost).toFixed(2)}`;
});
