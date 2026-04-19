// Apply theme ASAP to avoid flash.
// Reads from localStorage (synchronous) then syncs with chrome.storage.sync.
(function () {
    const VALID = ['light', 'dark', 'neon'];
    const DEFAULT = 'dark';

    function apply(theme) {
        if (!VALID.includes(theme)) theme = DEFAULT;
        const root = document.documentElement;
        VALID.forEach(t => root.classList.remove('theme-' + t));
        root.classList.add('theme-' + theme);
    }

    // Synchronous: apply cached theme immediately
    let cached;
    try { cached = localStorage.getItem('theme'); } catch (e) { }
    apply(cached || DEFAULT);

    // Asynchronous: sync with chrome.storage in case settings were changed elsewhere
    try {
        chrome.storage.sync.get('theme', (data) => {
            if (data.theme && data.theme !== cached) {
                try { localStorage.setItem('theme', data.theme); } catch (e) { }
                apply(data.theme);
            }
        });
    } catch (e) { }

    // Expose a setter for settings page to persist theme
    window.setTheme = function (theme) {
        if (!VALID.includes(theme)) theme = DEFAULT;
        try { localStorage.setItem('theme', theme); } catch (e) { }
        chrome.storage.sync.set({ theme });
        apply(theme);
    };
})();
