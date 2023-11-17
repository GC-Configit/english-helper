<script>
	import WordLibrary from "../../components/word-library/word-library.svelte";
	import WordTest from "../../components/words-test/word-test.svelte";

    let isTestSelected = false;
    let isWordLibrarySelected = false;

    function selectTest(){
        isTestSelected = true;
        isWordLibrarySelected = false;
    }

    function selectLibrary(){
        isTestSelected = false;
        isWordLibrarySelected = true;
    }

</script>

<div class="container">
    <div class="local-nav-bar">
            <button on:click={selectTest}>słówka - test </button>
            <button on:click={selectLibrary}>Bibilioteka słówek</button>
    </div>
</div>
{#if isTestSelected}
    <WordTest/>
{/if}
{#if isWordLibrarySelected}
    <WordLibrary/>
{/if}
