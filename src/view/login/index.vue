<template lang="pug">
.login
    .login-con   
        Card(icon="log-in", title="流程管理大数据平台", :bordered="false")
            .form-con  
                Form(
                    :model="form",
                    :rules="rules",
                    ref="loginForm",
                    @keydown.enter.native="submit"
                )
                    FormItem(prop="userName")
                        Input(v-model="form.userName", placeholder="请输入用户名")
                            span(slot="prepend")
                                Icon(type="ios-person", size="16")
                    FormItem(prop="password")
                        Input(v-model="form.password", placeholder="请输入密码")
                            span(slot="prepend")
                                Icon(type="md-lock", size="14")
                    FormItem
                        Button(type="primary", long, @click="submit") 登录
</template>

<script>
import STATUS from '@/config/status';
import URL from '@/config/url';

export default {
    data () {
        return {
            form: {
                userName: '',
                password: ''
            },
            rules: {
                userName: { required: true, message: '账号不能为空', trigger: 'blur' },
                password: { required: true, message: '密码不能为空', trigger: 'blur' }
            }
        };
    },
    computed: {
        
    },
    methods: {
        submit () {
            this.$refs.loginForm.validate(valid => {
                if (!valid) return;
                this.login();
            }); 
        },
        login () {
            let params = this.form;
            this.$http.get(URL.LOGIN, { params }).then(res => {
                let { flag, msg, data } = res.body;
                if (flag === STATUS.HTTP_FAIL) {
                    this.$Message.error(msg);
                    return;
                }
                let { sessionId } = data;
                this.$cookie.set('session_id', sessionId);
                this.$Message.success(msg);
                this.$router.push({ name: 'home' });
            });
        }
    },
    created () {
        
    }
};
</script>

<style lang="sass">
@import "./style"
</style>