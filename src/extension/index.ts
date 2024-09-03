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
import {bud} from "@roots/bud";
import merge from '@roots/bud-support/merge'

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
        new FaviconsWebpackPlugin(merge({}, this.defaultOptions, this.options));
    }

    @bind
    public setup(options: BudFaviconsPublicOptions) : void {
        this.options = options
    }

    public defaultOptions: BudFaviconsPublicOptions = {
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
    }
}

export type * from './types.js'