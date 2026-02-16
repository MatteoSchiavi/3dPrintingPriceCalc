const CONFIG = {
    // BUSINESS INFO
    VAT_RATE: 0.22, 

    // MATERIAL COSTS (€/kg)
    MATERIALS: {
        PLA: { price: 15.00, risk: 1.0, waste: 1.15 }, 
        PETG: { price: 18.00, risk: 1.2, waste: 1.15 }, 
        TPU:  { price: 32.00, risk: 1.5, waste: 1.20 }, 
        ABS:  { price: 22.00, risk: 1.4, waste: 1.10 }  
    },

    // MACHINE COSTS (Piacenza 2026)
    ENERGY: {
        COST_KWH: 0.27,      // Real Piacenza cost (Bill / kWh)
        PRINTER_WATTS: 150,  // Avg consumption (Watts)
        WEAR_HOUR: 0.20,     // Nozzle/Belt depreciation per hour
        BUSY_TAX_HOUR: 0.80  // Opportunity Cost (Machine locking fee)
    },

    // LABOR COSTS
    LABOR: {
        SETUP_FEE: 5.00,     // Fixed fee per BATCH (Slicing/Prep)
        HOURLY_RATE: 20.00,  // Your manual labor value
        POST_PRO_MIN: 5      // Minutes of cleaning per UNIT
    },

    // MULTIPLIERS
    MULTIPLIERS: {
        DIFFICULTY: {
            "1": 1.0,  // Standard
            "2": 1.25, // Complex (Supports)
            "3": 1.50  // Risk (Thin walls / Mechanical)
        },
        RUSH: {
            "1": 1.0,  // Normal Queue
            "2": 1.50  // Priority (Skip queue)
        }
    },

    // PROFIT
    MARGIN: 0.50 // 50% Profit Margin on top of costs
};
