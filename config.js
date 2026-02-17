// VALORI DI DEFAULT (Usati se non ci sono salvataggi)
const DEFAULTS = {
    // BUSINESS
    VAT_RATE: 0.22, // IVA 22%
    MARGIN: 0.50,   // Margine 50%

    // MATERIALI (€/kg) - TPU RIMOSSO
    MATERIALS: {
        PLA: { price: 15.00, risk: 1.0, waste: 1.15 }, 
        PETG: { price: 18.00, risk: 1.2, waste: 1.15 }, 
        ABS:  { price: 22.00, risk: 1.4, waste: 1.10 }  
    },

    // MACCHINA (Costi Piacenza 2026)
    ENERGY: {
        COST_KWH: 0.27,      // Costo reale energia
        PRINTER_WATTS: 150,  // Consumo medio
        WEAR_HOUR: 0.20,     // Usura oraria
        BUSY_TAX_HOUR: 0.80  // Tassa di occupazione macchina
    },

    // MANODOPERA
    LABOR: {
        SETUP_FEE: 5.00,     // Costo fisso avvio stampa
        HOURLY_RATE: 20.00,  // Tariffa oraria lavoro manuale
        POST_PRO_MIN: 5      // Minuti finitura per pezzo
    },

    // MOLTIPLICATORI
    MULTIPLIERS: {
        DIFFICULTY: { "1": 1.0, "2": 1.25, "3": 1.50 },
        RUSH: { "1": 1.0, "2": 1.50 } // Urgenza +50%
    }
};

// CARICA CONFIGURAZIONE (Da LocalStorage o Default)
function loadConfig() {
    const saved = localStorage.getItem('pc3d_config_v1');
    return saved ? JSON.parse(saved) : DEFAULTS;
}

// SALVA CONFIGURAZIONE
function saveConfig(newConfig) {
    localStorage.setItem('pc3d_config_v1', JSON.stringify(newConfig));
    alert("Impostazioni Salvate! Aggiorna la pagina per applicarle.");
    location.reload(); 
}

// RESETTA AI DEFAULT
function resetConfig() {
    if(confirm("Vuoi resettare tutti i prezzi ai valori originali?")) {
        localStorage.removeItem('pc3d_config_v1');
        location.reload();
    }
}

// Inizializza Configurazione Globale
const CONFIG = loadConfig();
