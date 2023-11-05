import { writable } from 'svelte/store';

export const englishWord = {
	infinitive: '',
	past: '',
	pastParticiple: '',
	translation: ''
};

/**
 * @type {import("svelte/store").Writable<englishWord[]>}
 */
export const englishWords = writable([]);
