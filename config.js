// DEFAULT VALUES (Used if no custom settings exist)
const DEFAULTS = {
    // BUSINESS
    VAT_RATE: 0.22, 
    MARGIN: 0.50, // 50%

    // MATERIALS (€/kg)
    MATERIALS: {
        PLA: { price: 15.00, risk: 1.0, waste: 1.15 }, 
        PETG: { price: 18.00, risk: 1.2, waste: 1.15 }, 
        TPU:  { price: 32.00, risk: 1.5, waste: 1.20 }, 
        ABS:  { price: 22.00, risk: 1.4, waste: 1.10 }  
    },

    // MACHINE (Piacenza 2026)
    ENERGY: {
        COST_KWH: 0.27,      
        PRINTER_WATTS: 150,  
        WEAR_HOUR: 0.20,     
        BUSY_TAX_HOUR: 0.80  
    },

    // LABOR
    LABOR: {
        SETUP_FEE: 5.00,     
        HOURLY_RATE: 20.00,  
        POST_PRO_MIN: 5      
    },

    // MULTIPLIERS
    MULTIPLIERS: {
        DIFFICULTY: { "1": 1.0, "2": 1.25, "3": 1.50 },
        RUSH: { "1": 1.0, "2": 1.50 }
    }
};

// LOAD CONFIG (From LocalStorage or Defaults)
function loadConfig() {
    const saved = localStorage.getItem('piacenza_config_v1');
    return saved ? JSON.parse(saved) : DEFAULTS;
}

// SAVE CONFIG
function saveConfig(newConfig) {
    localStorage.setItem('piacenza_config_v1', JSON.stringify(newConfig));
    alert("Settings Saved! Updates apply immediately.");
    location.reload(); // Refresh to apply changes
}

// RESET TO DEFAULTS
function resetConfig() {
    if(confirm("Reset all prices to default?")) {
        localStorage.removeItem('piacenza_config_v1');
        location.reload();
    }
}

// Initialize Global Config
const CONFIG = loadConfig();
