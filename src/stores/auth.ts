import { defineStore } from 'pinia'
import dayjs from 'dayjs'

export const useAuthStore = defineStore('a4v-auth-store', () => {
  const router = useRouter()

  const lastUserGetTime = ref(0)

  const userInfo = useStorage('a4v-user-info-scheme', null, undefined, {
    serializer: {
      read: (val: string) => (val ? JSON.parse(val) : null),
      write: (val: any) => JSON.stringify(val),
    },
  })

  async function loadUserInfo() {
    try {
      lastUserGetTime.value = dayjs().valueOf()
    }
    catch (error: any) {
      window.$message.error(error)
    }
  }

  const lastMenuGetTime = ref(0)

  function clear() {
    lastMenuGetTime.value = 0
    lastUserGetTime.value = 0
    userInfo.value = null
  }

  async function logout() {
    try {
      clear()
      router.replace('/login')
    }
    catch (error: any) {
      window.$message.error(error)
    }
  }

  async function login(data: any) {
    try {
      userInfo.value = data
      router.push('/')
    }
    catch (error: any) {
      window.$message.error(error)
    }
  }

  return {
    lastMenuGetTime,
    lastUserGetTime,
    userInfo,
    loadUserInfo,
    clear,
    logout,
    login,
  }
})
