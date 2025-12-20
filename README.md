
  # Build Hariom Chemicals Website

  This is a code bundle for Build Hariom Chemicals Website. The original project is available at https://www.figma.com/design/oNcLIO4pn8I7oDgCUnz1gf/Build-Hariom-Chemicals-Website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
  ## Deploying to GitHub Pages ✅

  This repository is configured with a GitHub Actions workflow that builds the site with Vite and deploys the built files to the `gh-pages` branch on every push to `main`.

  - To use the workflow: push your code to the `main` branch on GitHub. The action will run automatically and publish the `dist` directory to GitHub Pages.
  - Alternatively, you can deploy from your machine using the included script:

  ```bash
  npm install
  npm run predeploy   # runs build
  npm run deploy     # publishes ./dist via gh-pages package
  ```

  If your default branch is not `main`, edit `.github/workflows/deploy.yml` to use the branch you push to.

  