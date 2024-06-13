<script setup lang="ts">
definePage({
  meta: {
    layout: 'blank',
    ignoreAuth: true,
  },
})

const { login } = useAuthStore()
const formRef = ref()
const model = ref({
  userName: 'admin',
  password: '123456',
})
const rules = {
  userName: { required: true, message: '请输入用户名', trigger: ['blur', 'input'] },
  password: { required: true, message: '请输入密码', trigger: ['blur', 'input'] },
}
const [isLoading, toggleLoading] = useToggle()
async function handleLogin() {
  try {
    toggleLoading(true)
    await formRef.value.validate()
    login({
      nickName: '管理员',
    })
  }
  finally {
    toggleLoading(false)
  }
}
</script>

<template>
  <div class="relative h-100vh w-full flex-center overflow-hidden bg-#fff dark:bg-#101014">
    <div class="absolute right-0 top-0 z-10 h-full w-50% flex-center flex-col">
      <div class="mb-24px flex items-end text-48px font-bold leading-none">
        <img
          src="/public/vite.svg"
          class="mr-12px w-48px"
        >
        <span>a4v</span>
      </div>
      <div class="mb-48px text-16px tracking-1px">
        admin for vue
      </div>
      <NForm
        ref="formRef"
        :model="model"
        :rules="rules"
        label-placement="left"
        :show-require-mark="false"
        size="large"
        class="w-300px"
      >
        <NFormItem path="userName">
          <NInput
            v-model:value="model.userName"
            placeholder="请输入用户名"
            clearable
          >
            <template #prefix>
              <div class="i-icon-park-outline-user mr-4px text-#c2c2c2 dark:text-#ffffffe6" />
            </template>
          </NInput>
        </NFormItem>
        <NFormItem path="password">
          <NInput
            v-model:value="model.password"
            placeholder="请输入密码"
            clearable
            type="password"
            show-password-on="mousedown"
            @keyup.enter="handleLogin"
          >
            <template #prefix>
              <div class="i-icon-park-outline-lock mr-4px text-#c2c2c2 dark:text-#ffffffe6" />
            </template>
          </NInput>
        </NFormItem>
        <NFormItem>
          <NButton
            :loading="isLoading"
            type="primary"
            block
            @click="handleLogin"
          >
            登录
          </NButton>
        </NFormItem>
      </NForm>
    </div>

    <div class="absolute left-0 top-0 h-full w-90vw rotate-180 -scale-y-100">
      <img
        src="/public/login-bg.svg"
        class="wh-full"
      >
    </div>
  </div>
</template>
