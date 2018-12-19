import { getMetadataArgsStorage } from "../index";
import { isArray } from "util";

/**
 * Defines a class as a controller.
 * Each decorated controller method is served as a controller action.
 * Controller actions are executed when request come.
 *
 * @param baseRoute Extra path you can apply as a base route to all controller actions
 */
export function Controller(baseRoute?: string | string[]): Function {
    return function (object: Function) {
        const baseRoutes = !isArray(baseRoute) ? [baseRoute] : baseRoute;

        baseRoutes.forEach(entry => {
            getMetadataArgsStorage().controllers.push({
                type: "default",
                target: object,
                route: entry
            });
        });
    };
}