<template>
    <div id="app">
        <Header></Header>
        <div class="main"></div>
        <router-view class="main" />

    </div>
</template>

<script>
import Header from './components/common/HeaderNav'
    export default {
        name: 'app',
        components: {
            Header
        }
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }

</style>
