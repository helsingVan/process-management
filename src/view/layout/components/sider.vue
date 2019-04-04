<template lang="pug">
.layout-sider 
    Menu(
        theme="dark"
    )
        MenuItem(v-for="item in menu", :name="item.name", :to="item.name", :key="item.name") {{item.meta.name}}
</template>

<script>
import routes from '@/router/routes';
export default {
    data () {
        return {
            menu: routes
        };
    },
    computed: {
        
    },
    methods: {
        
    },
    created () {
        
    }
};
</script>

<style lang="sass">

</style>