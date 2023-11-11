<script>
import DocVariables from "../components/DocVariables.vue"; // Sostituisci con il percorso corretto del tuo componente


export default {
    data() {

    },
    components: {
        DocVariables
    }
}


</script>


<template>
    <div class="documentation_container">
        <nav class="sidebar">

            <ul>
                <li><a href="#variabili">Le variabili e costanti</a></li>
            </ul>
        </nav>

        <main class="main-content">

            <header>

            </header>

            <section id="variabili">
                <DocVariables></DocVariables>
            </section>

        </main>
    </div>
</template>
  
<style scoped>
.documentation_container {
    display: flex;
}

.sidebar {
    width: auto;
    background-color: #27272a;
    position: fixed;
    height: 100%;
    overflow-y: auto;
    padding: 20px;
}

.main-content {
    flex: 1;
    padding-left: 220px;
    /* Larghezza della sidebar + margine */
}
</style>
  
  
