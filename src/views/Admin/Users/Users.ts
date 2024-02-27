import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants"
import { userServiceApi } from "@/service/user.api"
import { ref } from "vue"

export const useUsers = () => {
    const users = ref([])
    const query = DEFAULT_COMMON_LIST_QUERY
    const getAllUsers = async () => {
        try {
            const res = await userServiceApi._getList(query)
            if (res.success) {
                return {
                    data: res.data.items,
                    totalItems: res.data.totalItems
                }
            }
            return null

        }
        catch (error) {
            console.error('Error:', error);
        }
    }


    return {
        users,
        query,
        getAllUsers,
    }
}