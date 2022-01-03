import { Ref, ref } from 'vue';
import { useFetch } from "@/use/fetch";

interface User {
  id: number
  name: string
  email: string
}

type UsableUsers = Promise<{users: Ref<User[] | undefined>}>

export async function useUsers(): UsableUsers {
  const loading: Ref<boolean> = ref(false)
  // const loading = ref<boolean>(false)

  const {response: users, request} = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');

  if (!loading.value) {
    await request()
    loading.value = true
  }

  return {users}
}