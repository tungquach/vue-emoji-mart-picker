# vue-emoji-mart-picker

[![npm](https://img.shields.io/npm/v/vue-emoji-mart-picker.svg?style=flat-square)](https://www.npmjs.com/package/vue-emoji-mart-picker) [![npm](https://img.shields.io/npm/dt/vue-emoji-mart-picker.svg)](https://www.npmjs.com/package/vue-emoji-mart-picker)

**Vue Emoji Mart Picker** is a simple WYSIWYG editor component with emoji picker for VueJS that based on [jm-david/emoji-mart-vue](https://github.com/jm-david/emoji-mart-vue)

**[View Demo](https://tungquach.github.io/vue-emoji-mart-picker/)**

## Installation

`npm install --save vue-emoji-mart-picker`

## Usage

```js
import PickerArea from 'vue-emoji-mart-picker'
```

```html
<picker-area v-model="myValue" set="messenger" />
<picker-area v-model="myOtherValue" :inline="true" />
<picker-area title="Pick your emoji…" emoji="point_up" />
<picker-area :i18n="{ search: 'Recherche', categories: { search: 'Résultats de recherche', recent: 'Récents' } }" />
```

| Prop | Required | Default | Description |
| ---- | :------: | ------- | ----------- |
| **inline** | | `false` | Display editor as single line input |
| **pickerPosition** | | `bottom` | The position of the emoji picker |
| **placeholder** | | `""` | The placeholder of the editor |
| **emoji** | | `point_up` | The emoji shown when no emojis are hovered, set to an empty string to show nothing |
| **include** | | `[]` | Only load included categories. Accepts [I18n categories keys](#i18n). Order will be respected, except for the `recent` category which will always be the first. |
| **exclude** | | `[]` | Don't load excluded categories. Accepts [I18n categories keys](#i18n). |
| **emojiSize** | | `24` | The emoji width and height |
| **perLine** | | `9` | Number of emojis per line. While there’s no minimum or maximum, this will affect the picker’s width. This will set *Frequently Used* length as well (`perLine * 4`) |
| **i18n** | | [`{…}`](#i18n) | [An object](#i18n) containing localized strings |
| **set** | | `apple` | The emoji set: `'apple', 'google', 'twitter', 'emojione', 'messenger', 'facebook'` |
| **sheetSize** | | `64` | The emoji [sheet size](#sheet-sizes): `16, 20, 32, 64` |
| **backgroundImageFn** | | ```((set, sheetSize) => …)``` | A Fn that returns that image sheet to use for emojis. Useful for avoiding a request if you have the sheet locally. |
| **showPreview** | | `true` | Display preview section |
| **showCategories** | | `true` | Display categories |
| **showSkinTones** | | `true` | Display skin tones picker |
| **emojiTooltip** | | `false` | Show emojis short name when hovering (title) |
| **title** | | `Pick your emoji...` | The title shown when no emojis are hovered |
| **infiniteScroll** | | `true` | Scroll continuously through the categories |

### I18n

```js
search: 'Search',
notfound: 'No Emoji Found',
categories: {
  search: 'Search Results',
  recent: 'Frequently Used',
  people: 'Smileys & People',
  nature: 'Animals & Nature',
  foods: 'Food & Drink',
  activity: 'Activity',
  places: 'Travel & Places',
  objects: 'Objects',
  symbols: 'Symbols',
  flags: 'Flags',
  custom: 'Custom',
}
```

#### Sheet sizes

Sheets are served from [jsdelivr](https://cdn.jsdelivr.net).

| Set       | Size (`sheetSize: 16`) | Size (`sheetSize: 20`) | Size (`sheetSize: 32`) | Size (`sheetSize: 64`) |
| --------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| apple     | 334 KB                 | 459 KB                 | 1.08 MB                | 2.94 MB                |
| emojione  | 315 KB                 | 435 KB                 | 1020 KB                | 2.33 MB                |
| facebook  | 322 KB                 | 439 KB                 | 1020 KB                | 2.50 MB                |
| google    | 301 KB                 | 409 KB                 |  907 KB                | 2.17 MB                |
| messenger | 325 KB                 | 449 KB                 | 1.05 MB                | 2.69 MB                |
| twitter   | 288 KB                 | 389 KB                 |  839 KB                | 1.82 MB                |

## Development

```bash
npm install
npm run dev
```

## 🎩 Hat tips

Powered by [iamcal/emoji-data](https://github.com/iamcal/emoji-data) and inspired by [iamcal/js-emoji](https://github.com/iamcal/js-emoji).\
🙌🏼  [Cal Henderson](https://github.com/iamcal).
