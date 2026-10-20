# Casa Espina

A sunny cactus garden website to explore and make your own with [Piny](https://getpiny.com).
Browse the gardens, open the photo gallery and try a pretend ticket booking.

Choose **Use this template** to make your own repository, or **Code → Download ZIP**
to get a copy. Open the folder in your AI editor.

## Open with your AI agent

Copy this prompt into your agent:

```text
Open this Casa Espina demo in Piny.

Work in this repository. Inspect package.json, the Node version, Vite config
and any existing lockfile. Use Node ^20.19.0 || >=22.12.0. Run npm install
to install the pinned dependencies, including @pinegrow/piny@1.0.0-beta.1.
Keep any generated package-lock.json for repeatable future installs.
Do not upgrade dependencies, replace this project or change its design.
If a required version is unavailable, report the error instead of substituting.

Read node_modules/@pinegrow/piny/AGENT_SETUP.md and follow its setup guidance.
Piny is already configured in vite.config.ts before the React and Tailwind
plugins. Keep the HTTP loopback host 127.0.0.1; this is a trusted local project,
and the editor and app share an origin.

Start npm run dev, reusing a running server for this folder if possible.
Do not start a duplicate. Warn before restarting a server with active Piny
Undo history. The dev command opens Piny automatically and can choose another
port when the default is occupied. Run the installed commands
npx --no-install piny doctor --json and npx --no-install piny status --json.
Use the actual server.editorUrl from status; do not guess the port.
Open it in a local desktop Chromium browser, or give me the URL if you cannot.

Leave existing license settings unchanged; do not activate a license or start
a trial for me. The first edits work in Free. Keep piny.project.json,
.piny/library.json, .piny/application.json and the static component previews.
Keep .piny/metadata-reviews.json: it records the reviewed Project Guide baseline
and detects when its exact source, descriptions or preview inputs change.
Do not commit .piny/local.json, .piny/cache, node_modules or dist.
If components change, npm run previews updates their static samples; inspect
the changes and samples before recording and committing a new Project Guide review.

Tell me when the demo is ready and explain any setup problem plainly.
```

## Try three edits

1. Change the “Not your usual zoo” text on the home page.
2. Give the “Come explore” button a different color in Properties.
3. Change the spacing around a garden card, then use Undo to put it back.

These edits work in Piny Free. Hold Alt/Option or turn on **Test clicks** to
follow links and try the booking form.

Casa Espina is fictional. Bookings stay in your browser and take no payment.
The garden photographs are AI-generated.

## Make it yours

You can modify and reuse the demo under its [MIT license](LICENSE).
Piny and the other dependencies keep their own licenses.
For help with Piny, [contact support](mailto:support@pinegrow.com).
