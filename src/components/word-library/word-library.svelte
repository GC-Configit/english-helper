<script>
	import { onMount } from "svelte";
	import { translation, translations } from "../../stores";

    export let input = {
        english: '',
        local: ''
    }

    onMount(() => {
        const data = localStorage.getItem('translations');
        if(data){
            translations.set(JSON.parse(data));
        }
    });

    function handleAdd(){
        translations.update((el) => [...el, input]);
        localStorage.setItem('translations', JSON.stringify($translations));
        input = {
            english: '',
            local: ''
        };
    }
    /**
     * @param {input} element
     */
    function handleRemove(element){
        translations.update((el) => el.filter((el) => el !== element));
        localStorage.setItem('translations', JSON.stringify($translations));
    }
</script>

<div class="container">
    <h1>Baza słówek</h1>
    <table>
        <tbody>
            <tr>
                <td>Angielski</td>
                <td>Polski</td>
                <td></td> <!-- action -->
            </tr>
            <tr>
                <td><input bind:value={input.english} /></td>
                <td><input bind:value={input.local} /></td>
                <td><button on:click={handleAdd}>Dodaj</button></td>
            </tr>
            {#each $translations as element}
            <tr>
                <td>{element.english}</td>
                <td>{element.local}</td>
                <td><button on:click={()=> handleRemove(element)}>❌Usuń</button></td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>











