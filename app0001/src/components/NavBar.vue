<template>
    <nav class="blue accent-4">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Книга контактов</router-link>
      <ul class="right hide-on-med-and-down">
        <router-link
            tag="li"
            to="/"
            exact
            active-class="active"
        >
            <a href="#">Список</a>
        </router-link>
        <router-link
            tag="li"
            to="/create"
            active-class="active"
        >
            <a href="#">Создать конакт</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
</style>