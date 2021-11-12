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


import { CatalogProductsModelDto } from './catalog-products-model-dto';
import { PictureModelDto } from './picture-model-dto';
import { ProductOverviewModelDto } from './product-overview-model-dto';

/**
 * 
 * @export
 * @interface ManufacturerModelDto
 */
export interface ManufacturerModelDto {
    /**
     * 
     * @type {string}
     * @memberof ManufacturerModelDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ManufacturerModelDto
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ManufacturerModelDto
     */
    meta_keywords?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ManufacturerModelDto
     */
    meta_description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ManufacturerModelDto
     */
    meta_title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ManufacturerModelDto
     */
    se_name?: string | null;
    /**
     * 
     * @type {PictureModelDto}
     * @memberof ManufacturerModelDto
     */
    picture_model?: PictureModelDto;
    /**
     * 
     * @type {Array<ProductOverviewModelDto>}
     * @memberof ManufacturerModelDto
     */
    featured_products?: Array<ProductOverviewModelDto> | null;
    /**
     * 
     * @type {CatalogProductsModelDto}
     * @memberof ManufacturerModelDto
     */
    catalog_products_model?: CatalogProductsModelDto;
    /**
     * 
     * @type {number}
     * @memberof ManufacturerModelDto
     */
    id?: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ManufacturerModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}

