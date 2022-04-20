inspiration: https://divrhino.com/articles/add-tailwindcss-to-hugo/

## Crea Hugo project

using the command below

```
hugo new site hugotails
```

## Add new Hugo theme

using the command below

```
hugo new theme themeName
```

## NPM init

using the command below

```
npm init
```

## NPM install

- autoprefixer
- postcss
- postcss-cli
- postcss-import
- tailwindcss
- prettier
- prettier-plugin-tailwindcss

### Add Tailwind plugins

- @tailwindcss/custom-forms
- @tailwindcss/forms
- @tailwindcss/typography

```
npm install --save-dev autoprefixer postcss postcss-cli postcss-import tailwindcss
```

## Setting up config files

1. make a new folder themes/themeName/assets/css/
1. make a new file themes/windytheme/assets/css/postcss.config.js
1. make a new file themes/windytheme/assets/css/tailwind.config.js
1. make a new file themes/windytheme/assets/css/styles.scss

### postcss.config.js

```
const themeDir = __dirname + '/../../';

module.exports = {
    plugins: [
        require('postcss-import')({
            path: [themeDir]
            }),
        require('tailwindcss')(themeDir + 'assets/css/tailwind.config.js'),
        require('autoprefixer')({
            path: [themeDir]
        }),
    ]
}
```

### tailwind.config.js

```
module.exports = {
  content: [
    "./**/content/**/*.md", "./**/content/**/*.html", "./**/layouts/**/*.html"
  ],

  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ]
}
```

### styles.scss

```
@import "node_modules/tailwindcss/base";
@import "node_modules/tailwindcss/components";
@import "node_modules/tailwindcss/utilities";

@layer components {
  @import "mixins";
  @import "components/btn/components";
  @import "components/form-switch/components";
  @import "components/offcanvas/components";
}
```

## Importing CSS in head tag

```
{{ $styles := resources.Get "css/styles.scss" | toCSS | postCSS (dict "config" "./assets/css/postcss.config.js") }}
{{ if .Site.IsServer }}
  <link rel="stylesheet" href="{{ $styles.RelPermalink }}">
{{ else }}
  {{ $styles := $styles | minify | fingerprint | resources.PostProcess }}
  <link rel="stylesheet" href="{{ $styles.Permalink }}" integrity="{{ $styles.Data.Integrity }}">
{{ end }}
```

## Start server

```
hugo server
```
