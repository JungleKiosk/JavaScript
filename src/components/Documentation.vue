<script>
import DocVariables from "../components/DocVariables.vue"; // Sostituisci con il percorso corretto del tuo componente
import ToggleSideMenu from "../components/ToggleSideMenu.vue"
import DocTipiDati from "../components/DocTipiDati.vue"
import DocCasting from "./DocCasting.vue";
import DocOutput from "./DocOutput.vue";


export default {
    data() {

    },
    components: {
    DocVariables,
    ToggleSideMenu,
    DocTipiDati,
    DocCasting,
    DocOutput
}
}


</script>


<template>
    <div class="documentation_container">

        <main class="main-content">

            <header>

            </header>

            <section>
                <ToggleSideMenu></ToggleSideMenu>
                <DocVariables></DocVariables>
                <DocTipiDati></DocTipiDati>
                <DocCasting></DocCasting>
                <DocOutput></DocOutput>
                
            </section>

        </main>
    </div>
</template>
  
<style>
</style>
  
  
