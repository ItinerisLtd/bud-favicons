import {type Bud, type WebpackPluginInstance} from '@roots/bud-framework'
import {Extension} from '@roots/bud-framework/extension'
import {
    bind,
    dependsOn,
    expose,
    label,
} from '@roots/bud-framework/extension/decorators'

import {type BudFaviconsPublicOptions} from './types.js'
import FaviconsWebpackPlugin from "favicons-webpack-plugin";

/**
 * Favicons extension
 */
@label(`bud-favicons`)
@dependsOn(['favicons-webpack-plugin'])
@expose(`favicons`)
export default class BudFavicons extends Extension<
    BudFaviconsPublicOptions,
    WebpackPluginInstance
> {
    /**
     * {@link Extension.register}
     */
    @bind
    public override async configAfter(bud : Bud) : Promise<void> {
        new FaviconsWebpackPlugin(this.options);
    }
}

export type * from './types.js'