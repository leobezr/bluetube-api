import User from "./user.js";

const BASE_API = "/api/v1/"

export default function (app) {
   Endpoints.use(app, [
      User,
   ])
}

const Endpoints = {
   use(app, arr = []) {
      arr.forEach(endpoint => endpoint.call(this, {app, api: BASE_API}))
   }
}
