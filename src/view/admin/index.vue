<template lang="pug">
.admin
    .admin-header.clearfix
        .left 你好，当前系统开通账号为3个
        .right
            Select.control(
                placeholder="请选择部门"
            )
                Option(v-for="item in departOption", :label="item.label", :value="item.value", :key="item.value")
            Input.control(placeholder="请搜索姓名", search)
                Icon(type="ios-search", slot="suffix")
            Button.control.btn-control(type="primary") 创建账号
    .admin-list 
        Table(
            :data="table",
            :columns="tableColumns",
            :loading="tableLoading"
        )
</template>

<script>
import URL from '@/config/url';

export default {
    data () {
        return {
            table: [],
            tableColumns: [
                { title: '账号', key: 'userName' },
                { title: '姓名', key: 'realName' },
                { title: '管理员', key: 'isAdmin' },
                { title: '操作', width: 140, render: (h, params) => {
                    return h('div', [
                        h('Button', {
                            props: {
                                type: 'primary',
                                size: 'small'
                            },
                            style: { 'margin-right': '10px' },
                            on: {
                                click: () => {
                                    // this.userEdit(params.row);
                                }
                            }
                        }, '编辑'),
                        h('Button', {
                            props: {
                                type: 'error',
                                size: 'small'
                            },
                            on: {
                                click: () => {
                                    this.$Modal.confirm({
                                        title: '确认删除该账号吗？',
                                        content: '删除无法恢复，请谨慎操作',
                                        onOk: () => {
                                            // this.userDelete(params.index);
                                        }
                                    });
                                }
                            }
                        }, '删除')
                    ]);
                }}
            ],
            tableLoading: false,
            departOption: [
                { label: '部门一', value: '部门一' },
                { label: '部门二', value: '部门二' },
                { label: '部门三', value: '部门三' },
            ],
        };
    },
    computed: {
        
    },
    methods: {
        getList () {
            this.tableLoading = true;
            this.$http.get(URL.USER_LIST).then(res => {
                let { flag, msg, data = [] } = res.body;
                this.table = data;

                this.tableLoading = false;
            });
        }
    },
    created () {
        this.getList();
    }
};
</script>

<style lang="sass">
@import "./style"
</style>