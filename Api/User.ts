import axios from "@/Utils/Request"
import storage from "@/Utils/Storage"
import type { TypeCookie, TypeRequest } from "../Type/Request"
const cookie: TypeCookie = storage.parse("token")

/**
 * 登录
 *
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function Login(
  username: String,
  password: String,
): Promise<TypeRequest> {
  return await axios({
    method: "get",
    params: {
      username,
      password,
    },
    url: "/newuser/login",
  })
}

/**
 * 获取用户信息
 *
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function UserInfo(): Promise<TypeRequest> {
  return await axios.get("/user", {
    params: {
      cookie: cookie.token,
    },
  })
}

/**
 * 注册：检查用户名是否重复
 *
 * @param username {string} 用户名
 * @constructor
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function CheckName(username: String): Promise<TypeRequest> {
  return await axios({
    method: "get",
    url: "/newuser/checkname",
    params: {
      username,
    },
  })
}

/**
 * 注册：邮箱验证码
 *
 * @param {mail} String email
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function SendMail(email: String): Promise<TypeRequest> {
  return await axios({
    method: "get",
    url: "/newuser/sendmail",
    params: {
      email,
    },
  })
}

/**
 * 注册
 *
 * @param {data} Object username,password,email,code
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
interface RegisterParams {
  username: String
  password: String
  email: String
  code: String
}
export async function Register(data: RegisterParams): Promise<TypeRequest> {
  return await axios({
    method: "get",
    url: "/newuser/register",
    params: {
      username: data.username,
      password: data.password,
      email: data.email,
      code: data.code,
    },
  })
}

/**
 * 获取用户信息
 *
 * @author Zero
 * @since 2022
 */
export async function GetUserSingleInfo(id: number): Promise<TypeRequest> {
  return await axios({
    method: "get",
    url: "/user/info",
    params: { id },
  })
}

/**
 * 获取用户文章
 *
 * @author Zero
 * @since 2022
 * @return Promise<TypeRequest>
 */
export async function GetUserPost(id: number): Promise<TypeRequest> {
  return await axios({
    method: "get",
    url: "/post/user/" + id,
  })
}

/**
 * 删除用户文章
 *
 * @author Zero
 * @since 2022
 * @return Promise<TypeRequest>
 */
export async function DeleteUserPost(id: number): Promise<TypeRequest> {
  return await axios({
    method: "delete",
    url: "/post",
    params: {
      cookie: cookie.token,
      id,
    },
  })
}

/**
 * 获取用户统计数据
 *
 * @author Zero
 * @since 2022
 * @return Promise<TypeRequest>
 */
export async function GetUserStatic(
  id: number = cookie.id,
): Promise<TypeRequest> {
  return await axios({
    url: "/follow/" + id,
    method: "get",
  })
}

/**
 * 获取用户关注列表
 *
 * @author Zero
 * @since 2022
 * @return Promise<TypeRequest>
 */
export async function GetUserFollowList(id = cookie.id): Promise<TypeRequest> {
  return await axios({
    url: "/follow",
    method: "get",
    params: {
      type: "follow",
      id,
    },
  })
}
