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



/**
 * 
 * @export
 * @interface ChangePasswordModelDto
 */
export interface ChangePasswordModelDto {
    /**
     * 
     * @type {string}
     * @memberof ChangePasswordModelDto
     */
    old_password?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChangePasswordModelDto
     */
    new_password?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChangePasswordModelDto
     */
    confirm_new_password?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ChangePasswordModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}

