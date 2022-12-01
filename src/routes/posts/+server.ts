import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {

    const params = Object.fromEntries(url.searchParams);

    console.log("posts/server running..." + JSON.stringify(params));

    const data = params.fall
        ? {
            "fall": 'something'
        }
        : {
            "fall": 'something',
            "butter": "others",
            "mister": "eeee"
        };

    return json(data);
};
