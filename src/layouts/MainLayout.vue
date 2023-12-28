<template>
  <div class="layout-base">
    <CustomBanner></CustomBanner>
    <CustomNavbar></CustomNavbar>
    <main class="layout-content-grow">
      <slot />
    </main>
    <footer>footer</footer>
  </div>
</template>
