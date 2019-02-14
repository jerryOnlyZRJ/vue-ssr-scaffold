import {
    route,
    GET,
    POST,
    before
} from 'awilix-koa'

@route('/')
@route('/helloworld')
class IndexRouter {
    constructor({
        indexService
    }) {
        this.indexService = indexService
    }

    @GET()
    async getIndex(ctx, next) {
        await this.indexService.init(ctx)
    }

}

export default IndexRouter