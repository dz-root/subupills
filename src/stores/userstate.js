import { writable } from 'svelte/store';
/* is login state */
export const userState = writable(false);

/* User Profile*/
export const userProfil = writable({
    name: 'Guest',
    address :'0x',
    image: 'https://mysubupill.netlify.app/favicon.png'
});
