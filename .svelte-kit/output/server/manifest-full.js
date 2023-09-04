export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.bcf82e9a.js","app":"_app/immutable/entry/app.640205ef.js","imports":["_app/immutable/entry/start.bcf82e9a.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.69ca5fbc.js","_app/immutable/entry/app.640205ef.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.62c37e82.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
