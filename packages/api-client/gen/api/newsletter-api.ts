/* tslint:disable */
/* eslint-disable */
/**
 * nopCommerce Web API Frontend
 * Official nopCommerce Web API for public store
 *
 * The version of the OpenAPI document: v1.05
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { SubscriptionActivationModelDto } from '../model';
/**
 * NewsletterApi - axios parameter creator
 * @export
 */
export const NewsletterApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} email 
         * @param {boolean} subscribe 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendNewsletterSubscribeNewsletterGet: async (email: string, subscribe: boolean, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'email' is not null or undefined
            assertParamExists('apiFrontendNewsletterSubscribeNewsletterGet', 'email', email)
            // verify required parameter 'subscribe' is not null or undefined
            assertParamExists('apiFrontendNewsletterSubscribeNewsletterGet', 'subscribe', subscribe)
            const localVarPath = `/api-frontend/Newsletter/SubscribeNewsletter`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (email !== undefined) {
                localVarQueryParameter['email'] = email;
            }

            if (subscribe !== undefined) {
                localVarQueryParameter['subscribe'] = subscribe;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} token 
         * @param {boolean} active 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendNewsletterSubscriptionActivationGet: async (token: string, active: boolean, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('apiFrontendNewsletterSubscriptionActivationGet', 'token', token)
            // verify required parameter 'active' is not null or undefined
            assertParamExists('apiFrontendNewsletterSubscriptionActivationGet', 'active', active)
            const localVarPath = `/api-frontend/Newsletter/SubscriptionActivation`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
            }

            if (active !== undefined) {
                localVarQueryParameter['active'] = active;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NewsletterApi - functional programming interface
 * @export
 */
export const NewsletterApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = NewsletterApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} email 
         * @param {boolean} subscribe 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFrontendNewsletterSubscribeNewsletterGet(email: string, subscribe: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFrontendNewsletterSubscribeNewsletterGet(email, subscribe, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} token 
         * @param {boolean} active 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFrontendNewsletterSubscriptionActivationGet(token: string, active: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscriptionActivationModelDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiFrontendNewsletterSubscriptionActivationGet(token, active, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * NewsletterApi - factory interface
 * @export
 */
export const NewsletterApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = NewsletterApiFp(configuration)
    return {
        /**
         * 
         * @param {string} email 
         * @param {boolean} subscribe 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendNewsletterSubscribeNewsletterGet(email: string, subscribe: boolean, options?: any): AxiosPromise<string> {
            return localVarFp.apiFrontendNewsletterSubscribeNewsletterGet(email, subscribe, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} token 
         * @param {boolean} active 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFrontendNewsletterSubscriptionActivationGet(token: string, active: boolean, options?: any): AxiosPromise<SubscriptionActivationModelDto> {
            return localVarFp.apiFrontendNewsletterSubscriptionActivationGet(token, active, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * NewsletterApi - object-oriented interface
 * @export
 * @class NewsletterApi
 * @extends {BaseAPI}
 */
export class NewsletterApi extends BaseAPI {
    /**
     * 
     * @param {string} email 
     * @param {boolean} subscribe 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NewsletterApi
     */
    public apiFrontendNewsletterSubscribeNewsletterGet(email: string, subscribe: boolean, options?: any) {
        return NewsletterApiFp(this.configuration).apiFrontendNewsletterSubscribeNewsletterGet(email, subscribe, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} token 
     * @param {boolean} active 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NewsletterApi
     */
    public apiFrontendNewsletterSubscriptionActivationGet(token: string, active: boolean, options?: any) {
        return NewsletterApiFp(this.configuration).apiFrontendNewsletterSubscriptionActivationGet(token, active, options).then((request) => request(this.axios, this.basePath));
    }
}