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
 * @interface ShipmentStatusEventModelDto
 */
export interface ShipmentStatusEventModelDto {
    /**
     * 
     * @type {string}
     * @memberof ShipmentStatusEventModelDto
     */
    event_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentStatusEventModelDto
     */
    location?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentStatusEventModelDto
     */
    country?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ShipmentStatusEventModelDto
     */
    date?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ShipmentStatusEventModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}

