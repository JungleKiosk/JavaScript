<script>

</script>

<template>
  <h1 class="text-center" style="color: yellow;">JavaScript</h1>

  <div class="container-fluid my-4 px-5">
    <div class="row">
      <div class="col-12 col-lg-12">


        <div class="links">
          <!-- use <RouterLink></RouterLink> instead <a></a> to save for each pagand not refreshe -->
          <RouterLink active-class=" active" class="page_link p-2 rounded-pill" to="/">Home</RouterLink>
          <RouterLink active-class=" active" class="page_link p-2 rounded-pill" to="/documentation">Documentation</RouterLink>
          <RouterLink active-class=" active" class="page_link p-2 rounded-pill" to="/projects">Projects</RouterLink>
        </div>

      </div>

    </div>


    <RouterView />


  </div>
</template>

<style></style>
