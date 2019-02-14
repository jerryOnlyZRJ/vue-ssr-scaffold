import {
    route,
    GET,
} from 'awilix-koa'

@route('/user')
class UserRouter {
    @GET()
    getUser(ctx) {
        ctx.body = {
            data: 'this is the user service'
        }
    }

    @route("/getusername")
    @GET()
    getUserName(ctx){
        ctx.body = {
            name: 'Ranjay'
        }
    }
}

export default UserRouter