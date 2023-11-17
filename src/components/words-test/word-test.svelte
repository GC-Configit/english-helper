<script>
    import {translation, translations } from "../../stores";
    /**
	 * @type {(translation & {correct: boolean})}
	 */
    let currentExample
    let isPlaying = false

    let input = {
        english: '',
        local: ''
    };


    /**
     * @type {(translation & {correct: boolean})[]}}
    */
    let testData = [];

    function start(){
        testData = $translations.map((x) => ({ ...x, correct: false }));
        isPlaying = true;
        generateExample();
    }

    function generateExample(){
        const nextExample = testData.pop();
        if(!nextExample){
            alert('Koniec przykładów');
            stop();
            return;
        }
        currentExample = nextExample;
        input = {
            english: '',
            local: ''
        };

        const randomNumber = Math.floor(Math.random() * 2);
        if(randomNumber == 0){
            input.local = currentExample.local;
        } else {
            input.english = currentExample.english;
        }
    }

    function check(){
        if(
            input.english === currentExample.english &&
            input.local === currentExample.local
        ){
            currentExample.correct = true;
        }
    }

    function stop(){
        testData = [];
        isPlaying = false;
    }
</script>






<div class="container">
    <h1>Test</h1>
    <div>
        <button on:click={start}>Rozpocznij test</button>
        <button on:click={stop}>stop</button>
    </div>


    {#if isPlaying}
    <form>
    <table>
        <tbody>
            <tr>
                <td>Angielski</td>
                <td>Polski</td>
                <td></td> <!-- action -->
            </tr>
            <tr>
                <td>
                    <input 
                    bind:value={input.english} 
                    on:change={check}
                    class={input.english == currentExample.english ? 'correct' : 'error'}/></td>
                <td>
                    <input 
                    bind:value={input.local} 
                    on:change={check}
                    class={input.local == currentExample.local ? 'correct' : 'error'}/></td>
            </tr>
        </tbody>
    </table>
	<button on:click={generateExample} disabled={!currentExample.correct}>Nastepny</button>
	Pozostało {testData.length} pytań;
    </form>
    {/if}
</div>

<style>
	.correct {
		border: 1px solid green;
	}

	.error {
		border: 1px solid red;
	}
</style>