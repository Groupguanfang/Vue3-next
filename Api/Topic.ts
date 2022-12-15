import axios from "@/Utils/Request"
import storage from "@/Utils/Storage"
import type { TypeRequest, TypeCookie } from "../Type/Request"
import type { RouteParamValue } from "vue-router"
const cookie: TypeCookie = storage.parse("token")

/**
 * 获取帖子列表
 *
 * @return {Promise<TypeRequest>}
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function GetTopic(
  order: Number,
  limit: Number,
  offset: Number,
): Promise<TypeRequest> {
  return await axios({
    method: "get",
    url: "/topic",
    params: { order, limit, offset },
  })
}

/**
 * 获取话题列表
 *
 * @return {Promise<TypeRequest>}
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */

export async function GetTag(
  order: Number,
  limit: Number,
  offset: Number,
): Promise<TypeRequest> {
  return await axios({
    method: "get",
    url: "/tag",
    params: { order, limit, offset },
  })
}

/**
 * 获取单个帖子
 *
 * @return {Promise<TypeRequest>}
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function GetSingleTopic(
  id: string | RouteParamValue[] | number,
): Promise<TypeRequest> {
  return await axios({
    method: "get",
    url: "/topic/single",
    params: { id },
  })
}
