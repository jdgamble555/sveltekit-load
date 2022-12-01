import { browser } from '$app/environment';
import { posts } from '$lib/post-store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {

    const p = get(posts);

    if (Object.keys(p).length) {
        console.log(p);
    } else {
        console.log("test load function ran..." + params.slug);

        const _posts = await (await fetch('/posts?fall=true')).json();

        if (browser) {
            posts.set(_posts);
        }        
    }
};
