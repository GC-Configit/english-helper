<script>
	import { englishWords, englishWord } from '../../stores';
	export let input = {
		infinitive: '',
		past: '',
		pastParticiple: '',
		translation: ''
	};

	/**
	 * @type {(englishWord & {correct: boolean})[]}}
	 */
	let testData = [];
	/**
	 * @type {englishWord & {correct: boolean}}
	 */
	let currentExample;
	let isPlaying = false;

	function start() {
		testData = $englishWords.map((x) => ({ ...x, correct: false }));
		isPlaying = true;
		generateExample();
	}

	function stop() {
		testData = [];
		isPlaying = false;
	}

	function generateExample() {
		let nextExample = testData.pop();

		if (!nextExample) {
			alert('Koniec przykładów');
			stop();
			return;
		}

		currentExample = nextExample;

		input = {
			infinitive: '',
			past: '',
			pastParticiple: '',
			translation: ''
		};

		const randomNumber = Math.floor(Math.random() * 2);
		if (randomNumber === 0) {
			input.translation = currentExample.translation;
		} else {
			input.infinitive = currentExample.infinitive;
		}
	}

	function check() {
		if (
			input.infinitive === currentExample.infinitive &&
			input.past === currentExample.past &&
			input.pastParticiple === currentExample.pastParticiple &&
			input.translation === currentExample.translation
		) {
			currentExample.correct = true;
		}
	}
</script>

<div>
	<h1>Test</h1>
	<button on:click={start}>Rozpocznij test</button>
	<button on:click={stop}>Stop</button>
</div>

{#if isPlaying}
	<table>
		<tbody>
			<tr>
				<td>infinitive</td>
				<td>past</td>
				<td>past participle</td>
				<td>translation</td>
				<td>action</td>
			</tr>
			<tr>
				<td
					><input
						on:change={check}
						bind:value={input.infinitive}
						class={input.infinitive == currentExample.infinitive ? 'correct' : 'error'}
					/></td
				>
				<td
					><input
						on:change={check}
						bind:value={input.past}
						class={input.past == currentExample.past ? 'correct' : 'error'}
					/></td
				>
				<td
					><input
						on:change={check}
						bind:value={input.pastParticiple}
						class={input.pastParticiple == currentExample.pastParticiple ? 'correct' : 'error'}
					/></td
				>
				<td
					><input
						on:change={check}
						bind:value={input.translation}
						class={input.translation == currentExample.translation ? 'correct' : 'error'}
					/></td
				>
			</tr>
		</tbody>
	</table>

	<button on:click={generateExample} disabled={!currentExample.correct}>Nastepny</button>
	Pozostało {testData.length} pytań;
{/if}

<style>
	.correct {
		border: 1px solid green;
	}

	.error {
		border: 1px solid red;
	}
</style>
