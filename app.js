/* MixBar — site public : en-tête commun, bascule FR/EN, thème clair/sombre, version de l'extension.
   Tout le texte vit ici : les pages HTML ne sont que des gabarits (data-i18n / data-i18n-html). */

// Où les utilisateurs signalent un problème (Issues du dépôt public).
const SUPPORT_URL = "https://github.com/Yil00/mixbar-site/issues";
// E-mail de contact. Vide : le bouton « Nous écrire » disparaît.
const CONTACT_EMAIL = "";
const UPDATED = "2026-10-18";


const I18N = {
  fr: {
    "brand.tagline": "Mixeur de volume par app",
    "nav.home": "Accueil",
    "nav.extension": "Extension navigateur",
    "nav.privacy": "Confidentialité",
    "nav.releases": "Nouveautés",
    "nav.support": "Assistance",
    "theme.toggle": "Changer de thème",
    "footer.note": "MixBar — le son ne quitte jamais votre Mac.",
    "updated": "Dernière mise à jour : 18 octobre 2026",

    "home.title": "MixBar",
    "home.subtitle": "Le mélangeur de volume que macOS n'a jamais eu : réglez chaque app — et chaque onglet de votre navigateur — depuis la barre de menus.",
    "home.cta.extension": "Installer l'extension navigateur",
    "home.cta.privacy": "Confidentialité",
    "home.f1.title": "Chaque app à son niveau",
    "home.f1.body": "De 0 à 200 %, muet, solo, lecture / pause pour Spotify et Musique. Discord bas, jeu fort, musique en fond.",
    "home.f2.title": "Chaque onglet aussi",
    "home.f2.body": "Avec l'extension pour Chrome, Firefox ou Safari : volume, muet et lecture / pause de chaque onglet qui joue du son.",
    "home.f3.title": "La bonne sortie",
    "home.f3.body": "Envoyez une app vers le casque et le reste vers les enceintes. Casque débranché : les haut-parleurs restent muets.",
    "home.f4.title": "Privé par conception",
    "home.f4.body": "Sans driver, sans compte, sans mesure d'audience. Seuls vos réglages se synchronisent, via votre iCloud privé.",
    "home.availability": "MixBar fonctionne sur macOS 15 et ultérieur, gratuitement, notarisé par Apple. L'extension navigateur ne fonctionne qu'avec l'app MixBar installée et ouverte.",

    "ext.title": "Extension navigateur",
    "ext.lead": "L'extension affiche dans MixBar chaque onglet qui joue du son, avec son volume, son muet et un bouton lecture / pause.",
    "ext.requires": "<strong>Avant de commencer :</strong> l'app MixBar doit être installée et ouverte au moins une fois — c'est elle qui permet à votre navigateur de lui parler. L'extension seule ne fait rien.",
    "ext.version": "Version proposée :",
    "ext.dl.chrome": "Télécharger pour Chrome",
    "ext.dl.firefox": "Télécharger pour Firefox",
    "ext.dl.safari": "Safari : rien à télécharger",
    "ext.safari.body": "L'extension Safari est incluse dans l'app. Ouvrez Safari › Réglages › Extensions et cochez MixBar, puis autorisez-la sur tous les sites web.",
    "ext.temporary": "En attendant la publication dans les boutiques officielles, l'installation passe par le mode développeur du navigateur. C'est sans risque et réversible : l'extension ne contacte aucun serveur, et son code est lisible tel quel dans le zip.",
    "ext.tab.chrome": "Chrome, Brave, Edge, Arc",
    "ext.tab.firefox": "Firefox",

    "chrome.title": "Installer dans Chrome (et Brave, Edge, Arc, Opera, Vivaldi)",
    "chrome.s1": "<strong>Téléchargez et décompressez</strong> <code>mixbar-extension-chrome.zip</code>. Un dossier <code>MixBar-Chrome</code> apparaît. Rangez-le à un endroit stable (par exemple dans Documents) : Chrome le lit à chaque démarrage, ne le supprimez pas.",
    "chrome.s2": "<strong>Ouvrez la page des extensions</strong> : tapez <code>chrome://extensions</code> dans la barre d'adresse (Brave : <code>brave://extensions</code>, Edge : <code>edge://extensions</code>).",
    "chrome.s3": "<strong>Activez le « Mode développeur »</strong> avec l'interrupteur en haut à droite de la page.",
    "chrome.s4": "<strong>Cliquez « Charger l'extension non empaquetée »</strong> et choisissez le dossier <code>MixBar-Chrome</code> (le dossier lui-même, pas un fichier). Astuce : <kbd>⇧⌘G</kbd> permet de coller un chemin.",
    "chrome.s5": "<strong>Navigation privée (facultatif)</strong> : sur la carte MixBar, cliquez <em>Détails</em> puis activez « Autoriser en mode navigation privée ».",
    "chrome.s6": "<strong>Vérifiez</strong> : lancez une vidéo, ouvrez MixBar. Sous la ligne de votre navigateur, l'onglet apparaît avec son curseur. Si une petite icône ⓘ reste à côté du nom du navigateur, voir l'assistance ci-dessous.",
    "chrome.update": "<strong>Mettre à jour :</strong> téléchargez le nouveau zip, remplacez le contenu du dossier <code>MixBar-Chrome</code>, puis cliquez la flèche ⟳ sur la carte MixBar dans <code>chrome://extensions</code>.",
    "chrome.alt": "<strong>Plus simple si l'app MixBar est installée :</strong> dans MixBar › Réglages › Navigateurs, « Afficher le dossier chromium » ouvre la copie que l'app tient à jour. Chargez ce dossier à l'étape 4 : l'extension se mettra alors à jour toute seule avec l'app.",

    "firefox.title": "Installer dans Firefox",
    "firefox.s1": "<strong>Téléchargez</strong> <code>mixbar-extension-firefox.zip</code>. Inutile de le décompresser.",
    "firefox.s2": "<strong>Ouvrez</strong> <code>about:debugging#/runtime/this-firefox</code> dans la barre d'adresse.",
    "firefox.s3": "<strong>Cliquez « Charger un module complémentaire temporaire… »</strong> et choisissez le fichier <code>mixbar-extension-firefox.zip</code>.",
    "firefox.s4": "<strong>Autorisez l'accès aux sites</strong> : ouvrez <code>about:addons</code> › Extensions › MixBar › onglet <em>Autorisations et données</em>, et activez « Accéder à vos données pour tous les sites web ». Sans cela, le volume et la lecture / pause par onglet ne fonctionnent pas.",
    "firefox.s5": "<strong>Navigation privée (facultatif)</strong> : onglet <em>Détails</em> › « Exécution dans les fenêtres privées » › Autoriser.",
    "firefox.s6": "<strong>Vérifiez</strong> : lancez une vidéo, ouvrez MixBar : l'onglet apparaît sous « Firefox ».",
    "firefox.limit": "<strong>Limite temporaire :</strong> Firefox oublie un module chargé ainsi à chaque redémarrage — il faut refaire les étapes 2 et 3. Une version signée par Mozilla, qui s'installe en un clic et reste installée, est en préparation.",

    "help.title": "En cas de souci",
    "help.q1": "Une icône ⓘ reste à côté du nom du navigateur dans MixBar",
    "help.a1": "L'extension n'a pas encore joint MixBar. Vérifiez que MixBar est ouvert, puis attendez 30 secondes : l'extension réessaie toute seule. Si l'app MixBar a été installée après le navigateur, quittez et rouvrez le navigateur.",
    "help.q2": "L'onglet apparaît, mais le curseur de volume n'a aucun effet",
    "help.a2": "Rechargez l'onglet (<kbd>⌘R</kbd>) : les pages ouvertes avant l'installation n'ont pas encore le script de l'extension. Sous Firefox, vérifiez l'accès à tous les sites (étape 4).",
    "help.q3": "Le volume ne dépasse pas 100 % sur une page (⚠︎ orange)",
    "help.a3": "Le boost exige d'avoir cliqué une fois dans le lecteur de la page, et ne s'applique pas aux médias hébergés sur un autre site. Le volume de 0 à 100 % fonctionne toujours.",
    "help.q4": "Mon navigateur affiche un avertissement sur les extensions en mode développeur",
    "help.a4": "C'est normal tant que l'extension n'est pas publiée dans la boutique officielle. Vous pouvez fermer l'avertissement.",

    "privacy.title": "Politique de confidentialité",
    "privacy.lead": "MixBar et son extension ne collectent aucune donnée personnelle.",
    "privacy.s1.title": "Aucune collecte",
    "privacy.s1.body": "Ni compte, ni publicité, ni mesure d'audience, ni composant tiers. L'éditeur ne reçoit aucune information sur vous ni sur votre usage : il ne voit que les compteurs globaux et anonymes de GitHub (nombre de téléchargements, nombre de vérifications de mise à jour).",
    "privacy.s2.title": "Le son reste sur votre Mac",
    "privacy.s2.body": "Pour régler le volume de chaque app, MixBar intercepte le son localement grâce aux fonctions audio de macOS (autorisation « Enregistrement audio du système »). Le son n'est jamais enregistré, stocké ni transmis.",
    "privacy.s3.title": "L'extension navigateur",
    "privacy.s3.body": "L'extension lit le titre et l'adresse des onglets qui jouent du son, ainsi que l'état de leurs lecteurs, pour les afficher dans MixBar. Ces informations restent sur votre Mac : elles ne transitent que de votre navigateur vers l'app MixBar, par un canal local. L'extension ne contacte aucun serveur et n'accède pas au contenu des pages au-delà de leurs lecteurs audio et vidéo.",
    "privacy.s4.title": "iCloud",
    "privacy.s4.body": "Si vous laissez la synchronisation active, vos réglages (volumes par app, sorties audio, profils) sont copiés dans votre espace iCloud privé, lié à votre compte Apple. L'éditeur n'y a pas accès. La synchronisation se désactive dans les réglages de MixBar.",
    "privacy.s5.title": "Autorisations demandées",
    "privacy.s5.body": "Enregistrement audio du système (régler le son des apps), Automatisation (lecture / pause de Spotify, Musique, VLC, seulement quand vous cliquez). Extension : onglets, accès aux sites (lecteurs des pages), messagerie native (parler à MixBar).",
    "privacy.s6.title": "Contact",
    "privacy.s6.body": "Pour toute question, ouvrez une demande depuis la page Assistance.",
    "privacy.s7.title": "Mises à jour",
    "privacy.s7.body": "Une fois par jour, MixBar lit un petit fichier public, hébergé sur GitHub avec ce site, pour savoir si une nouvelle version existe. Rien n'est envoyé : ni identifiant, ni réglage, ni information sur votre Mac. GitHub compte le nombre total de lectures de ce fichier, comme pour tout téléchargement : l'éditeur n'en voit que le total, qui lui donne une idée du nombre de Mac équipés. La vérification se désactive dans MixBar › Réglages › À propos.",
    "home.cta.download": "Télécharger MixBar",
    "home.download.soon": "Bientôt disponible",
    "home.download.meta": "Version {version} · macOS 15 ou ultérieur",

    "releases.title": "Nouveautés",
    "releases.lead": "Ce qui change à chaque version de MixBar et de son extension navigateur : nouveautés, améliorations, corrections.",
    "releases.app": "MixBar",
    "releases.extension": "Extension navigateur",
    "releases.download": "Télécharger",
    "releases.install": "Installer",
    "releases.empty": "Impossible de charger la liste des versions.",
    "kind.security": "Sécurité",
    "kind.fixed": "Corrigé",
    "kind.new": "Nouveau",
    "kind.improved": "Amélioré",

    "support.title": "Assistance",
    "support.lead": "Une question, un bug, une idée ? Écrivez-nous — chaque retour est lu.",
    "support.cta": "Signaler un problème",
    "support.mail": "Nous écrire",
    "support.q1": "Quelles versions de macOS sont prises en charge ?",
    "support.a1": "macOS 15 Sequoia et ultérieur, sur Mac Apple silicon et Intel.",
    "support.q2": "Faut-il installer un driver audio ?",
    "support.a2": "Non. MixBar utilise les fonctions de capture audio intégrées à macOS : rien à installer, rien à redémarrer.",
    "support.q3": "Le son de toutes les apps a disparu",
    "support.a3": "Quittez MixBar : tout le son revient immédiatement à 100 %. Puis vérifiez dans Réglages Système › Confidentialité et sécurité › Enregistrement audio que MixBar est autorisé.",
    "support.q4": "L'extension navigateur ne voit pas mes onglets",
    "support.a4": "Consultez la section « En cas de souci » de la page Extension navigateur."
  },

  en: {
    "brand.tagline": "Per-app volume mixer",
    "nav.home": "Home",
    "nav.extension": "Browser extension",
    "nav.privacy": "Privacy",
    "nav.releases": "What's new",
    "nav.support": "Support",
    "theme.toggle": "Toggle theme",
    "footer.note": "MixBar — your audio never leaves your Mac.",
    "updated": "Last updated: October 18, 2026",

    "home.title": "MixBar",
    "home.subtitle": "The volume mixer macOS never had: set every app — and every browser tab — right from the menu bar.",
    "home.cta.extension": "Install the browser extension",
    "home.cta.privacy": "Privacy",
    "home.f1.title": "Every app at its own level",
    "home.f1.body": "From 0 to 200%, mute, solo, play / pause for Spotify and Music. Discord low, game loud, music in the background.",
    "home.f2.title": "Every tab too",
    "home.f2.body": "With the extension for Chrome, Firefox or Safari: volume, mute and play / pause for each tab playing sound.",
    "home.f3.title": "The right output",
    "home.f3.body": "Send one app to your headset and the rest to your speakers. Headset unplugged: the speakers stay silent.",
    "home.f4.title": "Private by design",
    "home.f4.body": "No driver, no account, no analytics. Only your settings sync, through your private iCloud.",
    "home.availability": "MixBar runs on macOS 15 and later, free and notarized by Apple. The browser extension only works with the MixBar app installed and running.",

    "ext.title": "Browser extension",
    "ext.lead": "The extension shows every tab playing sound in MixBar, with its own volume, mute and play / pause button.",
    "ext.requires": "<strong>Before you start:</strong> the MixBar app must be installed and opened at least once — it's what lets your browser talk to it. The extension does nothing on its own.",
    "ext.version": "Current version:",
    "ext.dl.chrome": "Download for Chrome",
    "ext.dl.firefox": "Download for Firefox",
    "ext.dl.safari": "Safari: nothing to download",
    "ext.safari.body": "The Safari extension ships inside the app. Open Safari › Settings › Extensions, check MixBar, then allow it on all websites.",
    "ext.temporary": "Until it's published in the official stores, installing goes through the browser's developer mode. It's safe and reversible: the extension contacts no server, and its code is readable as-is in the zip.",
    "ext.tab.chrome": "Chrome, Brave, Edge, Arc",
    "ext.tab.firefox": "Firefox",

    "chrome.title": "Install in Chrome (and Brave, Edge, Arc, Opera, Vivaldi)",
    "chrome.s1": "<strong>Download and unzip</strong> <code>mixbar-extension-chrome.zip</code>. A <code>MixBar-Chrome</code> folder appears. Keep it somewhere stable (Documents, for example): Chrome reads it at every launch, so don't delete it.",
    "chrome.s2": "<strong>Open the extensions page</strong>: type <code>chrome://extensions</code> in the address bar (Brave: <code>brave://extensions</code>, Edge: <code>edge://extensions</code>).",
    "chrome.s3": "<strong>Turn on “Developer mode”</strong> with the switch at the top right of the page.",
    "chrome.s4": "<strong>Click “Load unpacked”</strong> and choose the <code>MixBar-Chrome</code> folder (the folder itself, not a file). Tip: <kbd>⇧⌘G</kbd> lets you paste a path.",
    "chrome.s5": "<strong>Incognito (optional)</strong>: on the MixBar card, click <em>Details</em> and turn on “Allow in Incognito”.",
    "chrome.s6": "<strong>Check</strong>: play a video and open MixBar. The tab shows up under your browser with its own slider. If a small ⓘ icon stays next to the browser's name, see troubleshooting below.",
    "chrome.update": "<strong>To update:</strong> download the new zip, replace the contents of the <code>MixBar-Chrome</code> folder, then click the ⟳ arrow on the MixBar card in <code>chrome://extensions</code>.",
    "chrome.alt": "<strong>Easier if the MixBar app is installed:</strong> in MixBar › Settings › Browsers, “Show the chromium folder” opens the copy the app keeps up to date. Load that folder in step 4 and the extension will update along with the app.",

    "firefox.title": "Install in Firefox",
    "firefox.s1": "<strong>Download</strong> <code>mixbar-extension-firefox.zip</code>. No need to unzip it.",
    "firefox.s2": "<strong>Open</strong> <code>about:debugging#/runtime/this-firefox</code> in the address bar.",
    "firefox.s3": "<strong>Click “Load Temporary Add-on…”</strong> and choose the <code>mixbar-extension-firefox.zip</code> file.",
    "firefox.s4": "<strong>Allow site access</strong>: open <code>about:addons</code> › Extensions › MixBar › <em>Permissions and data</em>, and turn on “Access your data for all websites”. Without it, per-tab volume and play / pause won't work.",
    "firefox.s5": "<strong>Private windows (optional)</strong>: <em>Details</em> tab › “Run in Private Windows” › Allow.",
    "firefox.s6": "<strong>Check</strong>: play a video and open MixBar: the tab shows up under “Firefox”.",
    "firefox.limit": "<strong>Temporary limitation:</strong> Firefox forgets add-ons loaded this way every time it restarts — repeat steps 2 and 3. A Mozilla-signed version that installs in one click and stays installed is on its way.",

    "help.title": "Troubleshooting",
    "help.q1": "A ⓘ icon stays next to the browser's name in MixBar",
    "help.a1": "The extension hasn't reached MixBar yet. Make sure MixBar is open, then wait 30 seconds: the extension retries on its own. If the MixBar app was installed after the browser was opened, quit and reopen the browser.",
    "help.q2": "The tab shows up but the volume slider does nothing",
    "help.a2": "Reload the tab (<kbd>⌘R</kbd>): pages opened before the install don't have the extension's script yet. In Firefox, check site access (step 4).",
    "help.q3": "Volume won't go above 100% on a page (orange ⚠︎)",
    "help.a3": "Boost requires having clicked once in the page's player, and doesn't apply to media hosted on another site. 0–100% volume always works.",
    "help.q4": "My browser warns about developer-mode extensions",
    "help.a4": "That's expected until the extension is published in the official store. You can dismiss the warning.",

    "privacy.title": "Privacy Policy",
    "privacy.lead": "MixBar and its extension collect no personal data.",
    "privacy.s1.title": "No collection",
    "privacy.s1.body": "No account, no ads, no analytics, no third-party components. The publisher receives no information about you or how you use the app: only GitHub's global, anonymous counters (number of downloads, number of update checks).",
    "privacy.s2.title": "Audio stays on your Mac",
    "privacy.s2.body": "To set each app's volume, MixBar intercepts audio locally using macOS audio features (“System Audio Recording” permission). Audio is never recorded, stored or transmitted.",
    "privacy.s3.title": "The browser extension",
    "privacy.s3.body": "The extension reads the title and address of tabs playing sound, and the state of their players, to show them in MixBar. This information stays on your Mac: it only travels from your browser to the MixBar app over a local channel. The extension contacts no server and doesn't access page content beyond its audio and video players.",
    "privacy.s4.title": "iCloud",
    "privacy.s4.body": "If you keep sync on, your settings (per-app volumes, audio outputs, profiles) are copied to your private iCloud storage, tied to your Apple Account. The publisher has no access to it. Sync can be turned off in MixBar's settings.",
    "privacy.s5.title": "Permissions requested",
    "privacy.s5.body": "System Audio Recording (to control app audio), Automation (play / pause for Spotify, Music, VLC, only when you click). Extension: tabs, site access (page players), native messaging (to talk to MixBar).",
    "privacy.s6.title": "Contact",
    "privacy.s6.body": "For any question, open a request from the Support page.",
    "privacy.s7.title": "Updates",
    "privacy.s7.body": "Once a day, MixBar reads a small public file, hosted on GitHub alongside this website, to know whether a new version exists. Nothing is sent: no identifier, no setting, no information about your Mac. GitHub counts the total number of times this file is read, as it does for any download: the publisher only sees that total, which gives a rough idea of how many Macs use MixBar. The check can be turned off in MixBar › Settings › About.",
    "home.cta.download": "Download MixBar",
    "home.download.soon": "Coming soon",
    "home.download.meta": "Version {version} · macOS 15 or later",

    "releases.title": "What's new",
    "releases.lead": "What changes in each version of MixBar and its browser extension: new features, improvements, fixes.",
    "releases.app": "MixBar",
    "releases.extension": "Browser extension",
    "releases.download": "Download",
    "releases.install": "Install",
    "releases.empty": "The version list could not be loaded.",
    "kind.security": "Security",
    "kind.fixed": "Fixed",
    "kind.new": "New",
    "kind.improved": "Improved",

    "support.title": "Support",
    "support.lead": "A question, a bug, an idea? Write to us — every message is read.",
    "support.cta": "Report an issue",
    "support.mail": "Email us",
    "support.q1": "Which macOS versions are supported?",
    "support.a1": "macOS 15 Sequoia and later, on Apple silicon and Intel Macs.",
    "support.q2": "Do I need to install an audio driver?",
    "support.a2": "No. MixBar uses the audio capture features built into macOS: nothing to install, nothing to restart.",
    "support.q3": "All app audio is gone",
    "support.a3": "Quit MixBar: all audio comes back at 100% immediately. Then check that MixBar is allowed in System Settings › Privacy & Security › Audio Recording.",
    "support.q4": "The browser extension doesn't see my tabs",
    "support.a4": "See the “Troubleshooting” section of the Browser extension page."
  }
};

function language() {
  try {
    const saved = localStorage.getItem("mixbar-lang");
    if (saved && I18N[saved]) return saved;
  } catch {}
  return (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
}

function renderHeader(lang) {
  const header = document.getElementById("site-header");
  if (!header) return;
  const page = document.body.dataset.page;
  const t = I18N[lang];
  const link = (href, key, name) =>
    `<a href="${href}" ${page === name ? 'aria-current="page"' : ""}>${t[key]}</a>`;
  header.innerHTML = `
    <a class="brand" href="index.html" aria-label="MixBar">
      <img class="brand-icon" src="icon.png" alt="" aria-hidden="true">
      <span><strong>MixBar</strong><small>${t["brand.tagline"]}</small></span>
    </a>
    <nav class="site-nav" aria-label="Navigation">
      ${link("index.html", "nav.home", "home")}
      ${link("extension.html", "nav.extension", "extension")}
      ${link("releases.html", "nav.releases", "releases")}
      ${link("privacy.html", "nav.privacy", "privacy")}
      ${link("support.html", "nav.support", "support")}
    </nav>
    <div class="header-actions">
      <select id="languageSelect" aria-label="Language">
        <option value="fr">FR</option><option value="en">EN</option>
      </select>
      <button class="icon-button" type="button" id="themeToggle" aria-label="${t["theme.toggle"]}">☾</button>
    </div>`;
  const select = document.getElementById("languageSelect");
  select.value = lang;
  select.addEventListener("change", () => {
    try { localStorage.setItem("mixbar-lang", select.value); } catch {}
    apply(select.value);
    loadAppRelease();
loadReleases();
    loadReleases();
  });
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
}

function apply(lang) {
  const t = I18N[lang];
  document.documentElement.lang = lang;
  renderHeader(lang);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t[el.dataset.i18n];
    if (value !== undefined) el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const value = t[el.dataset.i18nHtml];
    if (value !== undefined) el.innerHTML = value;
  });
  const titleKey = document.body.dataset.titleKey;
  document.title = titleKey && titleKey !== "home.title" ? `${t[titleKey]} — MixBar` : "MixBar";
  const footer = document.getElementById("site-footer");
  if (footer) footer.innerHTML = `<p>${t["footer.note"]}</p><p>${t["updated"]}</p>`;
  document.querySelectorAll("[data-support-link]").forEach((el) => (el.href = SUPPORT_URL));
  document.querySelectorAll("[data-contact]").forEach((el) => {
    el.hidden = !CONTACT_EMAIL;
    if (CONTACT_EMAIL) el.href = `mailto:${CONTACT_EMAIL}`;
  });
}

function toggleTheme() {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("mixbar-theme", next); } catch {}
}

function initTheme() {
  let theme = null;
  try { theme = localStorage.getItem("mixbar-theme"); } catch {}
  if (!theme) theme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.documentElement.dataset.theme = theme;
}

// Onglets Chrome / Firefox de la page Extension.
function initTabs() {
  const buttons = document.querySelectorAll(".tabs button");
  buttons.forEach((button) => button.addEventListener("click", () => {
    buttons.forEach((other) => {
      const selected = other === button;
      other.setAttribute("aria-selected", String(selected));
      document.getElementById(other.dataset.panel).hidden = !selected;
    });
  }));
  if (location.hash === "#firefox") document.querySelector('[data-panel="panel-firefox"]')?.click();
}

// Bouton « Télécharger MixBar » : n'apparaît qu'une fois une version notarisée publiée
// (downloads/app.json, écrit par scripts/release.sh et publié par scripts/publish-release.sh).
function loadAppRelease() {
  const button = document.getElementById("appDownload");
  if (!button) return;
  const t = I18N[document.documentElement.lang] ?? I18N.fr;
  button.textContent = t["home.download.soon"];
  button.classList.add("secondary");
  fetch("downloads/app.json", { cache: "no-store" })
    .then((response) => (response.ok ? response.json() : null))
    .then((release) => {
      if (!release?.notarized) return;
      button.textContent = t["home.cta.download"];
      button.href = release.url;
      button.classList.remove("secondary");
      const meta = document.getElementById("appDownloadMeta");
      if (meta) meta.textContent = t["home.download.meta"].replace("{version}", release.version);
    })
    .catch(() => {});
}

// Version de l'extension, écrite par scripts/package-extensions.sh. Les boutons pointent vers la
// version GitHub (compteur de téléchargements) ; à défaut, ils gardent la copie du site.
function loadVersion() {
  const target = document.getElementById("extensionVersion");
  if (!target) return;
  fetch("downloads/version.json", { cache: "no-store" })
    .then((response) => response.json())
    .then((info) => {
      target.textContent = `${info.version} (${info.date})`;
      const github = /^https:\/\/github\.com\/Yil00\/mixbar-site\/releases\/download\//;
      for (const [id, url] of [["downloadChrome", info.chrome], ["downloadFirefox", info.firefox]]) {
        const button = document.getElementById(id);
        if (button && github.test(url ?? "")) button.href = url;
      }
    })
    .catch(() => {});
}

// Page Nouveautés : journal des versions (releases.json), rendu dans la langue choisie.
let releasesData = null;
function loadReleases() {
  const list = document.getElementById("releaseList");
  if (!list) return;
  const render = (data) => {
    const lang = document.documentElement.lang in I18N ? document.documentElement.lang : "fr";
    const t = I18N[lang];
    const date = (iso) => new Date(`${iso}T12:00:00`).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US",
      { day: "numeric", month: "long", year: "numeric" });
    list.replaceChildren(...data.releases.map((release) => {
      const card = document.createElement("article");
      card.className = "card release";
      const head = document.createElement("header");
      const title = document.createElement("h2");
      title.textContent = `${t[`releases.${release.product}`] ?? release.product} ${release.version}`;
      const time = document.createElement("time");
      time.dateTime = release.date;
      time.textContent = date(release.date);
      head.append(title, time);
      if (release.url) {
        const link = document.createElement("a");
        link.href = release.url;
        link.textContent = t[release.product === "app" ? "releases.download" : "releases.install"];
        head.append(link);
      }
      const changes = document.createElement("ul");
      for (const change of release.changes) {
        const item = document.createElement("li");
        const tag = document.createElement("span");
        tag.className = `tag ${change.kind}`;
        tag.textContent = t[`kind.${change.kind}`] ?? change.kind;
        item.append(tag, document.createTextNode(change[lang] ?? change.fr));
        changes.append(item);
      }
      card.append(head, changes);
      return card;
    }));
  };
  if (releasesData) return render(releasesData);
  fetch("releases.json", { cache: "no-store" })
    .then((response) => response.json())
    .then((data) => { releasesData = data; render(data); })
    .catch(() => { list.textContent = I18N[document.documentElement.lang]?.["releases.empty"] ?? ""; });
}

initTheme();
apply(language());
initTabs();
loadVersion();
loadAppRelease();
loadReleases();
