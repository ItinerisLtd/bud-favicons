<p align="center"><img src="https://cdn.roots.io/app/uploads/logo-bud.svg" height="100" alt="bud.js" /></p>

<p align="center">
  <img alt="MIT License" src="https://img.shields.io/github/license/itinerisltd/bud-favicons?color=%23525ddc&style=flat-square" />
  <img alt="npm" src="https://img.shields.io/npm/v/itinerisltd/bud-favicons.svg?color=%23525ddc&style=flat-square" />
</p>

<h1 align="center"><strong>Bud Favicons</strong></h1>

<p align="center">
  Bud.js extension to automatically generate favicons
</p>

---

## Installation

Install **bud-favicons** to your project.

Yarn:

```sh
yarn add bud-favicons --dev
```

npm:

```sh
npm install bud-favicons --save-dev
```

## Configuration

**bud-favicons** works with zero configuration. But there is a robust and developer friendly configuration API should you need to make a modification to the provided defaults.
You can see the full list of options in the [favicons documentation](https://github.com/itgalaxy/favicons#usage).

## Default configuration

```ts
const options = {
  logo: bud.path('resources/images/favicon.svg'),
  mode: 'webapp',
  devMode: 'webapp',
  outputPath: bud.path('public'),
  favicons: {
      icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          favicons: true,
          windows: true,
          yandex: false,
      },
  },
};
```

## Configuration with `bud.favicons.config`

You can configure `favicons` with the `bud.favicons` method:

```ts title=bud.config.ts
bud.favicons.setup({
  logo: bud.path('resources/images/favicon.svg'),
});
```

OR

```ts title=bud.config.ts
bud.favicons.setup({
  logo: bud.path('resources/images/favicon.svg'),
  mode: 'webapp',
  devMode: 'webapp',
  outputPath: bud.path('public'),
  favicons: {
      background: '#030321',
      theme_color: '#ffffff',
      icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          favicons: true,
          windows: true,
          yandex: false,
      },
  },
});
```

## Contributing

Contributions are welcome from everyone.

## Credits

[Bud Favicons](https://github.com/ItinerisLtd/bud-favicons) is a [Itineris Limited](https://www.itineris.co.uk/) project created by [Dan Lapteacru](https://github.com/danlapteacru).

Full list of contributors can be found [here](https://github.com/ItinerisLtd/bud-favicons/graphs/contributors).

## License

[Bud Favicons](https://github.com/ItinerisLtd/bud-favicons) is released under the [MIT License](https://opensource.org/licenses/MIT).