import { Ref, ref } from 'vue';
import { useFetch } from "@/use/fetch";

export async function useUsers(): Promise<any> {
  const loading: Ref<boolean> = ref(false)
  // const loading = ref<boolean>(false)

  const {response: users, request} = useFetch('https://jsonplaceholder.typicode.com/users');

  if (!loading.value) {
    await request()
    loading.value = true
  }

  return {users}
}