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


import { CustomerInfoModelDto } from './customer-info-model-dto';

/**
 * 
 * @export
 * @interface InfoResponse
 */
export interface InfoResponse {
    /**
     * 
     * @type {CustomerInfoModelDto}
     * @memberof InfoResponse
     */
    model?: CustomerInfoModelDto;
    /**
     * 
     * @type {Array<string>}
     * @memberof InfoResponse
     */
    errors?: Array<string> | null;
}

