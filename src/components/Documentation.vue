<script>
import DocVariables from "../components/DocVariables.vue"; // Sostituisci con il percorso corretto del tuo componente
import ToggleSideMenu from "../components/ToggleSideMenu.vue"
import DocTipiDati from "../components/DocTipiDati.vue"


export default {
    data() {

    },
    components: {
        DocVariables,
        ToggleSideMenu,
        DocTipiDati
    }
}


</script>


<template>
    <div class="documentation_container">

        <main class="main-content">

            <header>

            </header>

            <section id="variabili">
                <ToggleSideMenu></ToggleSideMenu>
                <DocVariables></DocVariables>
                <DocTipiDati></DocTipiDati>
            </section>

        </main>
    </div>
</template>
  
<style>
</style>
  
  
