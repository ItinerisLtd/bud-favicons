import type BudFavicons from './index.js'

import type {FaviconWebpackPlugionOptions} from "favicons-webpack-plugin/src/options.js";

interface BudFaviconsPublicOptions extends FaviconWebpackPlugionOptions {}

export {type BudFaviconsPublicOptions}

declare module '@roots/bud-framework' {
    interface Modules {
        'bud-favicons': BudFavicons
    }

    interface Bud {
        favicons: BudFavicons
    }
}