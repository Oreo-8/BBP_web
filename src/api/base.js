import request from "../network/request"

export function getRoutes() {
    return request({
        url: "/menu/getRoutes",
        method: "get",
    })
}