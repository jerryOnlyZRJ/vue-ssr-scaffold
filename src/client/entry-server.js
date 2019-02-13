import {
	createApp
} from './app.js';

export default context => {
	return new Promise((resolve, reject) => {
		const {
			app,
			router,
			store
		} = createApp();
		router.push(context.url);
		router.onReady(() => {
			const matchCompents = router.getMatchedComponents();
			Promise.all(matchCompents.map(({
				asyncData
			}) => {
				if (asyncData) {
					// 在node中拿到每个**路由组件**的asyncData并执行
					return asyncData({
						store,
						router: router.currentRoute
					})
				}
			})).then(() => {
				context.state = store.state;
				resolve(app);
			}).catch(reject)
		}, reject);
	});
}