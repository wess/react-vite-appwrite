# Your Name Here
> This is the template i use when creating web apps using: React, Vite, ChakraUI and Appwrite.
> This template uses file/folder based routing from the `pages/` folder, each folder will need an `index.tsx` file
> for inspiration/example of this you can look at things like nextjs.

## Getting Started
To start using install everything using:
```bash

$ yarn install --check-files
$ yarn dev

```

Then open your browser and go to: [http://localhost:5173](http://localhost:5173)

## Appwrite
Head over to [appwrite.io](https://appwrite.io) to get started, then update
the `src/providers/api.tsx` file with your project id and endpoint.

## Libs/Tools
- [Vite](https://vitejs.dev/) for development and bundling. This template was created using `$ yarn create vite react-vite-appwrite --template react-ts`

- [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) for file/folder based routing.

- [ChakraUI](https://chakra-ui.com/) has a nice set of components for the UI

- [Formik](https://formik.org/) for handling forms in a nice way.

- [Yup](https://github.com/jquense/yup) for dead simple Object schema based validation.

- [React-Icons](https://react-icons.github.io/react-icons/) for icons.

## Breaking down `src`
- app
  - index.scss : The main styles for the app.
  - index.tsx : Where the app kicks off.
  - layout.tsx : The general layout of the application, could be expanded to allow for dynamic layouts.
- assets : All the images and such you want to use in your app.
- components
  - dialog.tsx : Wrapper component for presenting a dialog (modal) to the user.
  - empty.tsx : Display an empty view with an icon and short cut link for adding something
  - numberfield.tsx : Field dedicated to the magic of numbers.
  - selectfield.tsx : Select something, and do it well and easy.
  - switchfield.tsx : Switch back and forth, skipping the boilerplate
  - textfield.tsx : Textfield, but better.
- data
  - settings.ts : Settings for the user, add to this for a settings page or something.
  - index.ts : Re-exports Settings as well as providing a Key/Value store for memory and fallback to localStorage.
- locale
  - en.ts : English translations.
  - index.ts : Exports translation based on location (if you were to code it that way, good switch-statements to ya)
- pages
  - index.tsx : Root index page
  - index.scss : Root styles
- providers
  - api.tsx: Provider for interacting with the Appwrite api
  - flash.tsx : Provider for displaying notifications
  - form.tsx : Provider for handling form, useful for group of forms, like a wizard (harry).
  - settings.tsx : Provider for accessing and working with browser-side settings.
  - index.tsx : Re-exports of providers.
- theme
  - color.ts : Nord based colors
  - theme.ts : ChakraUI theme definitions.
  - index.tsx : Provides a theme mode switcher component as well as reexporting theme and color.
- hooks.tsx : useHooks from this file.
- main.tsx : Entry point for the application
- index.d.ts : App types
- vite-env.d.ts : Vite types

### Reach out
> Im always open to suggestions and such, so feel free to make an `issue` or `PR` if you have something you want to add or change. 

### Social Media
- [Twitter](https://twitter.com/wesscope)
- [Github](https://github.com/wess)
- [Website](https://wess.io)
- [Email](mailto:opensource@wess.io)

### License
> See [LICENSE](LICENSE) for more information.
