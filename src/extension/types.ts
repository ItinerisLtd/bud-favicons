import type {FaviconWebpackPlugionOptions} from "favicons-webpack-plugin/src/options.js";
import BudFavicons from "./index.js";
import type {Rule} from "@roots/bud-framework";

declare module '@roots/bud-framework' {
    interface Bud {
        favicons: BudFavicons,
    }

    interface Modules {
        'bud-favicons': BudFavicons,
    }

    interface Rules {
        js: Rule,
        ts: Rule,
    }
}

interface BudFaviconsPublicOptions extends FaviconWebpackPlugionOptions {}

export {type BudFaviconsPublicOptions}