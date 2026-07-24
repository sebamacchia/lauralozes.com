# Laura Lozes

Static website for `lauralozes.com`, built with plain HTML, CSS, and JavaScript
for easy GitHub-to-Hostinger deployment. The visual direction is a yellow/black
brutalist portfolio system inspired by the Variant shared reference.

## Site Positioning

Laura Lozes

Digital Strategy · Media Innovation · Distribution & Streaming

Building bridges between technology, content, and audiences across Latin America
and the U.S.

## Files

- `index.html` - page content, metadata, social tags, and section structure.
- `styles.css` - visual design and responsive layout.
- `script.js` - live local-time footer behavior.
- `assets/laura-headshot.jpg` - optimized professional headshot.
- `robots.txt` and `sitemap.xml` - basic search-engine files for
  `lauralozes.com`.

## Headshot

The page uses `assets/laura-headshot.jpg`, an optimized copy of Laura's
professional photo.

## Contact

The Contact buttons currently point to Laura's LinkedIn profile:

`https://www.linkedin.com/in/laura-lozes-9369363/`

If you create an email address for the domain, such as `contact@lauralozes.com`,
the Contact button can be changed to a `mailto:` link.

## GitHub and Hostinger

Suggested flow:

1. Create a GitHub repository, for example `lauralozes.com`.
2. Add all files from this folder to the repository root.
3. In Hostinger hPanel, open the website dashboard and go to Advanced > Git.
4. Connect GitHub, select the repository and the `main` branch.
5. Deploy to `public_html`.
6. Turn on auto-deployment if you want every GitHub push to publish the site.
