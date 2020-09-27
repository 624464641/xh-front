/* eslint-disable no-debugger */
<template>
  <div class="hello">
    <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="longin"
    >
      <a-row>
        <a-col :span="10">
          <a-form-item label="用户名:">
            <a-input
              v-decorator="[
                'name',
                {
                  rules: [
                    { required: true, message: 'Please input your name!' },
                  ],
                },
              ]"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="10">
          <a-form-item label="密码:">
            <a-input
              v-decorator="[
                'pasword',
                {
                  rules: [
                    { required: true, message: 'Please input your pasword!' },
                  ],
                },
              ]"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="10">
          <a-form-item label="记住密码:">
            <a-checkbox v-decorator="['pasword']"></a-checkbox>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>

    <a-button type="primary" @click="open">取消</a-button>
    <a-button type="primary" style="margin-left: 5px" @click="longin"
      >登录</a-button
    >
  </div>
</template>

<script>
import { get } from '../utils/request'
export default {
  name: 'Login',
  data() {
    return {
      form: this.$form.createForm(this, { name: 'coordinated' }),
      config: {},
    }
  },
  methods: {
    longin() {
      get('/api/auth/login', { name: 'admin', password: '/123' }).then(
        (res) => {
          console.info(res)
          if (res.status === 200) {
            this.logginSucess()
          }
        }
      )
    },
    logginSucess() {
      this.$router.push({ path: '/home' })
    },
  },
}
</script>

<style scoped>
</style>
