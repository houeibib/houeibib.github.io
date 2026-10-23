# Site web : mode d'emploi

## Où se trouve quoi

| Je veux modifier…                         | Fichier                                              |
|-------------------------------------------|------------------------------------------------------|
| la page d'accueil                         | `index.html`                                         |
| la page Recherche (les deux cartes)       | `recherche/index.html`                               |
| la page « comprendre » d'un sujet         | `recherche/cme/index.md`, `recherche/lwfa/index.md`  |
| la page « toute la physique » d'un sujet  | `recherche/cme/physique/index.md`, `recherche/lwfa/physique/index.md` |
| la liste des publications                 | `_data/publications.yml`                             |
| le parcours et les compétences            | `parcours/index.html`                                |
| le contact (bas de chaque page)           | `_includes/footer.html`                              |
| le menu                                   | `_includes/nav.html`                                 |

Les fichiers `.md` s'écrivent en Markdown : `## Titre`, `**gras**`, `[lien](https://…)`,
listes avec `-`. Les équations s'écrivent comme en LaTeX : `$n_e$` dans le texte,
`$$ … $$` seules sur leur ligne pour une équation centrée (pages « physique », qui ont `math: true`).

## Deux langues

Chaque texte existe en français et en anglais :

```
<div class="fr" markdown="1">
Texte en français.
</div>
<div class="en" markdown="1">
English text.
</div>
```

Dans le HTML : `<span class="fr">…</span><span class="en">…</span>`.

## Ajouter une publication

Copier un bloc dans `_data/publications.yml` et l'adapter. `topic: cme` ou `topic: lwfa`
la fait aussi apparaître en bas de la page « physique » du sujet.

## Carnet (désactivé pour l'instant)

Les fichiers sont gardés (`carnet/`, `_posts/`). Pour le réactiver : retirer `carnet` et `_posts`
de la ligne `exclude:` de `_config.yml`, et remettre le lien dans `_includes/nav.html`.

## Aperçu sur ma machine

```
../apercu.sh
```
puis ouvrir http://127.0.0.1:8765 (Ctrl+C pour arrêter).

## Mise en ligne (GitHub Pages, gratuit)

1. Sur GitHub, créer un dépôt public nommé `houeibib.github.io`.
2. Y envoyer le contenu de ce dossier (`website/`).
3. Dans le dépôt : Settings → Pages → Source : « Deploy from a branch », branche `main`, dossier `/ (root)`.
4. Le site est en ligne quelques minutes plus tard sur https://houeibib.github.io.
   Chaque modification envoyée sur GitHub (y compris directement depuis le site de GitHub) le met à jour.

## Vidéos des simulations

`media/` contient les vidéos (version sombre `cme.*`, version claire `cme_light.*`, idem pour `lwfa`)
et les pistes d'étiquettes, produites par les scripts de rendu de `web_animation/` :
`python3 render.py --theme dark` puis `--theme light` (dans `cme/`), même chose avec
`render_interp.py` (dans `lwfa_interp/`). La page choisit seule la version du thème actif.
