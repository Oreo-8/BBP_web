import request from '../network/request'

export function getBlogPage(obj) {
    return request({
        url: "/blog/getBlogPage",
        method: "get",
        params: obj
    })
}