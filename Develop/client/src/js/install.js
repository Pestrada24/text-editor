const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.removeAttribute('hidden');
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    if (result.outcome === 'accepted') {
        console.log('App Installed');
    } else {
        console.log('App not installed');
    }
    window.deferredPrompt = null;
    butInstall.setAttribute('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    console.log('App Installed');
    window.deferredPrompt = null;
});
