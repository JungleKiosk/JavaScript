<script>
export default {
    data() {
        return {
            isSidebarOpen: false,
            neonEffect: false,
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
    },
    mounted() {
        setInterval(() => {
            this.neonEffect = !this.neonEffect;
        }, 3000);
    },
};
</script>



<template>
    <button class="toggle_sidebar_button btn_menu pulp" @click="toggleSidebar" :class="{ 'neon-effect': neonEffect }">menu
    </button>

    <a href="#" class="scroll-to-top upper_arrow" @click="scrollToTop">
        <i class="fas fa-arrow-up">Go up</i>
    </a>

    <nav class="sidebar" :class="{ 'sidebar-open': isSidebarOpen }">

        <div class="row align-items-center ">
            <div class="col-6 col-lg-8">
                <h1 class="p-3">menu</h1>
            </div>
            <div class="col-6 col-lg-4">
                <button class="btn btn-outline-light " @click="toggleSidebar">x</button>
            </div>
        </div>

        <ul class="p-3">
            <li><a href="#variabili">Variabili</a></li>
            <hr>
            <li><a href="#tipididati">Tipi di dati</a></li>
            <hr>
            <li><a href="#casting">Casting</a></li>
            <hr>
            <li><a href="#output">Output</a></li>
            <hr>
            <li><a href="#numbers">Numbers</a></li>
            <hr>
            <li><a href="#math">Math</a></li>
            <hr>
            <li><a href="#booleaner">Booleaner</a></li>
        </ul>

    </nav>
</template>

<style>
.sidebar,
.sidebar ul,
.sidebar a {
    list-style-type: none;
    font-family: monospace;
}

a {
    text-decoration: none;
    color: #ffbf00;
}

a:hover{
    color: rgb(0, 0, 0);
    background-color: #ffbf00;
    border-radius: 20px;
    padding: 3px;
}

.sidebar {
    width: auto;
    background-color: #020215ca;
    position: fixed;
    top: 0;
    bottom: 0;
    left: -100%;
    overflow-y: auto;
    transition: left 0.3s ease;
    z-index: 1000;
    /* Valore più alto di quello delle card */
}


.sidebar-open {
    left: 0;
    /* Mostra la sidebar quando è aperta */
}

.upper_arrow {
    font-weight: bold;
    font-size: large;
    cursor: pointer;
    position: fixed;
    top: 80px;
    right: 25px;
    z-index: 2;
    display: flex;
    align-items: center;
    color: #ffbf00;
    overflow-x: inherit;
}


.toggle_sidebar_button {
    font-weight: bold;
    cursor: pointer;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 2;
    display: flex;
    align-items: center;
    background-color: #27272a;
    color: #ffbf00;
    border: 1px solid #ffbf00;
    border-radius: 10px;
    overflow-x: inherit;
}

.toggle_sidebar_button:hover {
    background-color: #ffbf00;
    color: #27272a;
    border: white;
}


.pulp {
    padding: 10px 20px;
    cursor: pointer;
    animation: pulper 3s infinite ease-in-out;
    /*transition: background-color 0.3s ease, color 0.3s ease; */
}

@keyframes pulper {
    0% {
        transform: scale(1);
        /* Stato normale */
    }

    50% {
        transform: scale(1.1);
        /* Stato ingrandito */
    }

    100% {
        transform: scale(1);
        /* Ritorna allo stato normale */
    }
}
</style>
