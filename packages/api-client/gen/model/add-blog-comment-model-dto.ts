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
 * @interface AddBlogCommentModelDto
 */
export interface AddBlogCommentModelDto {
    /**
     * 
     * @type {string}
     * @memberof AddBlogCommentModelDto
     */
    comment_text?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AddBlogCommentModelDto
     */
    display_captcha?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AddBlogCommentModelDto
     */
    id?: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AddBlogCommentModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}

