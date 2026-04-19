document.addEventListener('DOMContentLoaded', async () => {
    // Initialize i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const msg = chrome.i18n.getMessage(el.getAttribute('data-i18n'));
        if (msg) el.textContent = msg;
    });

    document.getElementById('close-settings').addEventListener('click', () => {
        chrome.tabs.getCurrent((tab) => {
            if (tab && tab.id) {
                chrome.tabs.remove(tab.id);
            } else {
                window.close();
            }
        });
    });

    const providerSelect = document.getElementById('ai-provider');
    const groqApiKeyInput = document.getElementById('groq-api-key');
    const groqModelInput = document.getElementById('groq-model');
    const openRouterApiKeyInput = document.getElementById('openrouter-api-key');
    const openRouterModelInput = document.getElementById('openrouter-model');
    const summaryLanguageInput = document.getElementById('summary-language');
    const summaryMaxLengthInput = document.getElementById('summary-max-length');
    const saveBtn = document.getElementById('save-settings');
    const status = document.getElementById('status');
    const toggleAi = document.getElementById('toggle-ai');
    const toggleQr = document.getElementById('toggle-qr');
    const themeSelect = document.getElementById('theme-select');

    // Theme: apply immediately on change (live preview), persist via setTheme
    themeSelect.addEventListener('change', () => {
        window.setTheme(themeSelect.value);
    });

    // Load saved settings
    chrome.storage.sync.get([
        'aiProvider',
        'groqApiKey', 'groqModel',
        'openrouterApiKey', 'openrouterModel',
        'summaryLanguage', 'summaryMaxLength',
        'showAi', 'showQr', 'theme'
    ], (items) => {
        if (items.aiProvider) {
            providerSelect.value = items.aiProvider;
        }
        if (items.groqApiKey) groqApiKeyInput.value = items.groqApiKey;
        if (items.groqModel) groqModelInput.value = items.groqModel;
        if (items.openrouterApiKey) openRouterApiKeyInput.value = items.openrouterApiKey;
        if (items.openrouterModel) openRouterModelInput.value = items.openrouterModel;
        if (items.summaryLanguage) summaryLanguageInput.value = items.summaryLanguage;
        if (items.summaryMaxLength) summaryMaxLengthInput.value = items.summaryMaxLength;

        toggleAi.checked = items.showAi !== false;
        toggleQr.checked = items.showQr !== false;
        themeSelect.value = items.theme || 'dark';
    });

    // Save settings
    saveBtn.addEventListener('click', () => {
        const aiProvider = providerSelect.value;
        const groqApiKey = groqApiKeyInput.value;
        const groqModel = groqModelInput.value;
        const openrouterApiKey = openRouterApiKeyInput.value;
        const openrouterModel = openRouterModelInput.value;
        const summaryLanguage = summaryLanguageInput.value;
        const summaryMaxLength = summaryMaxLengthInput.value;
        const showAi = toggleAi.checked;
        const showQr = toggleQr.checked;

        chrome.storage.sync.set({
            aiProvider,
            groqApiKey,
            groqModel,
            openrouterApiKey,
            openrouterModel,
            summaryLanguage,
            summaryMaxLength,
            showAi,
            showQr
        }, () => {
            status.style.display = 'block';
            setTimeout(() => {
                status.style.display = 'none';
            }, 2000);
        });
    });
});
