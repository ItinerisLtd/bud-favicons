import {Bud} from "@roots/bud-framework";
import {Extension} from '@roots/bud-framework/extension'
import {bind, label, expose} from '@roots/bud-framework/extension/decorators'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import merge from '@roots/bud-support/merge'
import type {WebpackPluginInstance} from '@roots/bud-framework/config'
import type {BudFaviconsPublicOptions} from "./types.js";

/**
 * BudFavicons extension for handling favicons in the Bud framework.
 *
 * @label `bud-favicons`
 * @expose `favicons`
 */
@label(`bud-favicons`)
@expose(`favicons`)
export default class BudFavicons extends Extension<
    BudFaviconsPublicOptions,
    WebpackPluginInstance
> {
    /**
     * Options for the favicons.
     * @private
     */
    private faviconOptions: {}|BudFaviconsPublicOptions = {};

    /**
     * Creates an instance of FaviconsWebpackPlugin with merged options.
     *
     * @param {Bud} app - The Bud application instance.
     * @returns {Promise<WebpackPluginInstance>} - The FaviconsWebpackPlugin instance.
     */
    @bind
    public override async make(app: Bud): Promise<WebpackPluginInstance> {
        return new FaviconsWebpackPlugin(merge({}, this.defaultOptions(app), this.faviconOptions));
    }

    /**
     * Sets up the favicon options.
     *
     * @param {BudFaviconsPublicOptions} options - The options for the favicons.
     */
    @bind
    public setup(options: BudFaviconsPublicOptions): void {
        this.faviconOptions = options;
    }

    /**
     * Provides the default options for the favicons.
     *
     * @param {Bud} app - The Bud application instance.
     * @returns {BudFaviconsPublicOptions} - The default options for the favicons.
     * @private
     */
    private defaultOptions(app: Bud): BudFaviconsPublicOptions {
        return {
            logo: app.path('resources/images/favicon.svg'),
            mode: 'webapp',
            devMode: 'webapp',
            outputPath: app.path('public'),
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
    }
}