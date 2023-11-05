<script>
	import { englishWords } from '../stores';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each $englishWords as word}
	<div>
		<h2>{word.infinitive}</h2>
		<p>{word.past}</p>
		<p>{word.pastParticiple}</p>
		<p>{word.translation}</p>
	</div>
{/each}
