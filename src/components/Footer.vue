<template>
    <footer>
        <p>&copy; {{year}} | <a href="https://github.com/blaiseAI/vue-router-boilerplate" target="_blank"><i class="fab fa-github"></i></a></p>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data: function(){
        return{
            year: new Date().getFullYear()
        }
    }
}
</script>

<style>
    p {
        padding-bottom: 10px;
    }
    .fa-github {
        font-size: 14px;
    }
    footer {
        bottom: 0;
        font-size: 12px;
        margin: 0 auto;
        position: absolute;
        text-align: center;
        width: 100%;
    }
</style>