import request from "@/Utils/Request"

export async function GetPostList(
  limit?: number,
  offset?: number,
): Promise<object> {
  return await request({
    url: "/post",
    params: { limit, offset },
  })
}
