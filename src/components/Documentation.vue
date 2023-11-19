<script>
import DocVariables from "../components/DocVariables.vue"; // Sostituisci con il percorso corretto del tuo componente
import ToggleSideMenu from "../components/ToggleSideMenu.vue"
import DocTipiDati from "../components/DocTipiDati.vue"
import DocCasting from "./DocCasting.vue";
import DocOutput from "./DocOutput.vue";
import DocNumbers from "./DocNumbers.vue";
import DocMath from "./DocMath.vue";
import DocBoolean from "./DocBoolean.vue";
import DocString from "./DocString.vue";

export default {
    data() {

    },
    components: {
    DocVariables,
    ToggleSideMenu,
    DocTipiDati,
    DocCasting,
    DocOutput,
    DocNumbers,
    DocMath,
    DocBoolean,
    DocString
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
                <DocNumbers></DocNumbers>
                <DocMath></DocMath>
                <DocBoolean></DocBoolean>
                <DocString></DocString>
            </section>

        </main>
    </div>
</template>
  
<style>
</style>
  
  
