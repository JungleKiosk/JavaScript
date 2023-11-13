<script>
import DocVariables from "../components/DocVariables.vue"; // Sostituisci con il percorso corretto del tuo componente
import ToggleSideMenu from "../components/ToggleSideMenu.vue"

export default {
    data() {

    },
    components: {
        DocVariables,
        ToggleSideMenu
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
            </section>

        </main>
    </div>
</template>
  
<style>
</style>
  
  
