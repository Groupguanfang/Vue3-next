import axios from "@/Utils/Request"
import type { TypeRequest } from "../Type/Request"
/**
 * 获取app详细信息
 * @param name
 * @constructor
 */
export async function GetApp(name: string): Promise<TypeRequest> {
  return await axios({
    method: "get",
    url: "/app",
    params: { name },
  })
}

/**
 * 获取公告
 *
 * @params
 * @returns [object]
 * @author Zero
 * @since 2022
 */
export async function GetAnnouncement(): Promise<TypeRequest> {
  return await axios.get("/announcement")
}
