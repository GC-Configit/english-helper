<script>
	import { onMount } from 'svelte';
	import { englishWords } from '../../stores';

	export let input = {
		infinitive: '',
		past: '',
		pastParticiple: '',
		translation: ''
	};

	onMount(() => {
		const data = localStorage.getItem('data');
		if (data) {
			englishWords.set(JSON.parse(data));
		}
	});

	function handleAdd() {
		englishWords.update((el) => [...el, input]);
		localStorage.setItem('data', JSON.stringify($englishWords));
		input = {
			infinitive: '',
			past: '',
			pastParticiple: '',
			translation: ''
		};
	}

	/**
	 * @param {input} element
	 */
	function handleRemove(element) {
		englishWords.update((el) => el.filter((el) => el !== element));
		localStorage.setItem('data', JSON.stringify($englishWords));
	}
</script>

<div class="container">
	<h1>Zarządzanie danymi</h1>
	<table>
		<thead>
			<tr>
				<th colspan="2">The table header</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>infinitive</td>
				<td>past</td>
				<td>past participle</td>
				<td>translation</td>
				<td>action</td>
			</tr>
			<tr>
				<td><input bind:value={input.infinitive} /></td>
				<td><input bind:value={input.past} /></td>
				<td><input bind:value={input.pastParticiple} /></td>
				<td><input bind:value={input.translation} /></td>
				<td><button on:click={handleAdd}>Dodaj</button></td>
			</tr>
			{#each $englishWords as element}
				<tr>
					<td>{element.infinitive}</td>
					<td>{element.past}</td>
					<td>{element.pastParticiple}</td>
					<td>{element.translation}</td>
					<td><button on:click={() => handleRemove(element)}>Usuń</button></td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
