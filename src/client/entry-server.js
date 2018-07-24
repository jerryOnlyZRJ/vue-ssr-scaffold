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
					return asyncData({
						store
					})
				}
			})).then(() => {
				context.state = store.state;
				resolve(app);
			}).catch(reject)
		}, reject);
	});
}