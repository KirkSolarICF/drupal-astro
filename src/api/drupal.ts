import {Jsona} from "jsona";
import {DrupalJsonApiParams} from "drupal-jsonapi-params";
import type {DrupalNode} from "../types.ts";
import type {TJsonApiBody} from "jsona/lib/JsonaTypes";

// NOTE, required for localhost to connect to Drupal. node default connection is IPv6, this forces IPv4
// import dns from 'node:dns';
// dns.setDefaultResultOrder('ipv4first');

// Get the Drupal Base Url.
export const baseUrl: string = import.meta.env.DRUPAL_BASE_URL;

/**
 * Fetch url from Drupal.
 *
 * @param url
 *
 * @return Promise<TJsonaModel | TJsonaModel[]> as Promise<any>
 */
export const fetchUrl = async (url: string): Promise<any> => {
    const request: Response = await fetch(url);
    const json: string | TJsonApiBody = await request.json();
    const dataFormatter: Jsona = new Jsona();
    return dataFormatter.deserialize(json);
}

/**
 * Get all published articles.
 *
 * @return Promise<DrupalNode[]>
 */
export const getArticles = async (): Promise<DrupalNode[]> => {
    // builds the query string parameters for an article
    const params: DrupalJsonApiParams = new DrupalJsonApiParams();
    // include any field you need to retrieve from the database within the "article" content type
    params
        .addFields("node--article", [
            "title",
            "path",
            "field_media_image",
            "body",
            "created",
        ])
        .addInclude(['field_media_image.field_media_image'])
        .addFields('media--image', ['field_media_image'])
        .addFields('file--file', ['uri', 'image_style_uri', 'resourceIdObjMedia'])
        .addFilter("status", "1");
    // convert the params into a query string
    const path: string = params.getQueryString();
    // append the params to build the database fetch, export the result to the article page template
    return await fetchUrl(baseUrl + '/jsonapi/node/article?' + path);
}

// NOTE, the addInclude() query function might be the way we get flex content. It looks like that is our reference proxy to "JOIN" our database query
