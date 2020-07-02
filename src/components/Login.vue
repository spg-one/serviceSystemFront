<template>
    <div>
        <div style="width:100%;height:30px;display:flex;flex-direction:row;justify-content:center;border-bottom:1px solid #ddd;margin-bottom:45px;">
            <div>
                <span style="color:black;background:white;font-size:38px;line-height:58px;padding:0 20px;">登录</span>
            </div>
        </div>
        <div style="width:100%;display:flex;flex-direction:row;justify-content:center"> 
            <div style="width:300px;display:flex;flex-direction:column">
                <iview-input v-model="user_name" placeholder="用户名或邮箱" style="width: 300px;margin-top:20px;">
                    <Icon type="ios-contact" slot="prefix" />
                </iview-input>
                <iview-input @on-enter="login()" maxlength="15" type="password" v-model="password" placeholder="密码" style="width: 300px;margin-top:20px;">
                    <Icon type="ios-lock" slot="prefix" />
                </iview-input>
                <Button :disabled="disabled" :loading="loading" style="margin-top:20px;" type="primary" @click="login()">登录</Button>
            </div>
        </div>
        
    </div>
</template>

<script>
import Banner from "@/components/common/Banner.vue"
import {Spin, Message, Icon, Input, Button} from "view-design"
export default {
    name: 'UserCenter',
    components: {
        "banner": Banner,
        "iview-input": Input,
        Spin,
        Icon,
        Button
    },
    data () {
        return {
            password:'',
            user_name:'',
            loading: false,
            disabled: false
        }
    },
    created () {
        
    },
    methods: {
        login() {
            var that = this;
            let param = new URLSearchParams();
            param.append('user_name', this.user_name);
            param.append('password', this.password);
            this.loading = true;
            this.axios.post("/api/login/login-post",param)
            .then(res => {
                that.disabled = true;
                that.loading = false;
                Message.success({
                    content: res.data.success,
                    duration: 3,
                    closable: true,
                    onClose: function() {
                        that.$router.replace("/");
                    }
                });
            }).catch(err => {
                that.loading = false;
                Message.error(err.response.data.error);
            })
        }
    }
}
</script>

<style>
</style>