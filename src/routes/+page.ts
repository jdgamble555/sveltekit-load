import { browser } from '$app/environment';
import { posts } from '$lib/post-store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {

    const p = get(posts);

    if (Object.keys(p).length) {
        console.log(p);
    } else {
        console.log("load function ran...", JSON.stringify(posts));

        const _posts = await (await fetch('/posts')).json();

        if (browser) {
            posts.set(_posts);
        }        
    }
};
