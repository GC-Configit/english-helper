import { writable } from 'svelte/store';

export const englishWord = {
	infinitive: '',
	past: '',
	pastParticiple: '',
	translation: ''
};

export const translation = {
	english: '',
	local: ''
}

/**
 * @type {import("svelte/store").Writable<englishWord[]>}
 */
export const englishWords = writable([]);

/**
 * @type {import("svelte/store").Writable<translation[]>}
 */
export const translations = writable([]);
