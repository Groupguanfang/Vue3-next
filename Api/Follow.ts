import axios from "@/Utils/Request"
import storage from "@/Utils/Storage"
import type { TypeCookie, TypeRequest } from "../Type/Request"
const cookie: TypeCookie = storage.parse("token")

export async function GetUserFollowList(
  id: number = cookie.id,
  type: "follow" | "fans",
  limit: number,
  offset: number,
): Promise<TypeRequest> {
  return await axios({
    url: "/follow",
    params: {
      cookie: cookie.token,
      type,
      limit,
      offset,
    },
  })
}
