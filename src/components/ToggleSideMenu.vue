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
    },
    mounted() {
        setInterval(() => {
            this.neonEffect = !this.neonEffect;
        }, 3000);
    },
};

</script>


<template>
    <button class="toggle_sidebar_button btn btn-outline-light" @click="toggleSidebar"
        :class="{ 'neon-effect': neonEffect }">menu</button>

    <nav class="sidebar" :class="{ 'sidebar-open': isSidebarOpen }">
        <div class="row align-items-center">
            <div class="col-6 col-lg-8">
                <h1 class="p-3">menu</h1>
            </div>
            <div class="col-6 col-lg-4">
                <button class="btn btn-outline-light " @click="toggleSidebar">x</button>
            </div>
        </div>
        <ul class="p-3">
            <li><a href="#variabili">variabili e costanti</a></li>
            <hr>
            <li><a href="#">Lorem, ipsum dolor</a></li>
            <hr>
            <li><a href="#">Lorem, ipsum dolor</a></li>
        </ul>
    </nav>
</template>

<style>
.sidebar ul {
    list-style-type: none;
}

.sidebar {
    width: auto;
    background-color: #27272a;
    position: fixed;
    top: 0;
    bottom: 0;
    left: -100%;
    /* Nasconde la sidebar di default */
    overflow-y: auto;
    transition: left 0.3s ease;
}

.sidebar-open {
    left: 0;
    /* Mostra la sidebar quando è aperta */
}

.toggle_sidebar_button {
    font-size: 20px;
    cursor: pointer;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 2;
    display: flex;
    align-items: center;
    background-color: #27272a;
    padding: 10px;
    border-radius: 5px;
    overflow-x: inherit;
}

.neon-effect {
    animation: neon 1s ease-in-out infinite alternate;
}

@keyframes neon {
    0% {
        text-shadow: 0 0 10px #77ff00,
            0 0 20px #1aff00,
            0 0 30px #00ff4c;
    }

    100% {
        text-shadow: 0 0 10px #00ffcc,
            0 0 20px #00ffee,
            0 0 30px #00aaff,
            0 0 40px #00aeff,
            0 0 50px rgba(255, 0, 191, 0.555);
    }

}
</style>
