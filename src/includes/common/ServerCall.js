import axios from "axios";

export class ServerCall{
    static sendGet() {

    }
    static sendPost(url,data) {
        return axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`,data)
    }
}