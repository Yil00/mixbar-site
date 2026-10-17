# MixBar — site public (GitHub Pages)

Présentation, **téléchargement de l'extension navigateur** (Chrome, Firefox) avec tutoriels,
**confidentialité** et **assistance**, en français et en anglais, thème clair / sombre.

La source de vérité est le dossier `site/` du dépôt privé `MixBar`. Ce dépôt public n'en est
qu'une copie publiée : modifier là-bas, puis republier.

## Mettre à jour l'extension proposée

Depuis le dépôt `MixBar` :

```bash
scripts/package-extensions.sh   # régénère site/downloads/*.zip et version.json
```

puis recopier `site/` ici et pousser.

## Page « Nouveautés »

`releases.html` affiche `releases.json` (français + anglais). À chaque version de l'app ou de
l'extension, ajouter une entrée **en haut** de la liste (`kind` : `security`, `fixed`, `new`, `improved`)
avant de lancer `scripts/publish-release.sh` ou `scripts/publish-site.sh`.

## Personnaliser

Tout le texte vit dans `app.js` : `SUPPORT_URL`, `CONTACT_EMAIL`, et les dictionnaires `fr` / `en`.
Les pages HTML ne sont que des gabarits.

## URLs utiles

- Extension : `https://yil00.github.io/mixbar-site/extension.html`
- Confidentialité (boutiques d'extensions, App Store) : `https://yil00.github.io/mixbar-site/privacy.html`
- Assistance : `https://yil00.github.io/mixbar-site/support.html`
- Nouveautés : `https://yil00.github.io/mixbar-site/releases.html`
