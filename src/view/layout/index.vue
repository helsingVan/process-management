<template lang="pug">
Layout.main(style="height: 100%")
    Sider.left-sider(
        hide-tiggerm,
        collapsible,
        :width="240",
        :collapsed-width="64",
    )
        LayoutSider
    Layout 
        Header.header-con 
        Content.main-content-con
            Layout.main-layout-con  
                Content.content-wrapper 
                    router-view
</template>

<script>
import URL from '@/config/url';
import LayoutSider from './components/sider';

export default {
    components: { LayoutSider },
    data () {
        return {
            
        };
    },
    computed: {
        
    },
    methods: {
        getUserDetail () {
            this.$http.get(URL.USER_DETAIL).then(res => {
                let { flag, msg, data } = res.body;
                
            });
        }
    },
    created () {
        this.getUserDetail();
    }
};
</script>

<style lang="sass">
@import "./style"
</style>