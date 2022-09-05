import type { IOAuthApps, IUser } from '@rocket.chat/core-typings';

import type { OauthAppsGetParams, UpdateOAuthAppParams, DeleteOAuthAppParams } from '..';

export type OAuthAppsEndpoint = {
	'/v1/oauth-apps.list': {
		GET: (params: { uid: IUser['_id'] }) => {
			oauthApps: IOAuthApps[];
		};
	};

	'/v1/oauth-apps.get': {
		GET: (params: OauthAppsGetParams) => {
			oauthApp: IOAuthApps;
		};
	};

	'/v1/oauth-apps.updateOAuthApps': {
		GET: (params: UpdateOAuthAppParams) => void;
	};

	'/v1/oauth-apps.deleteOAuthApp': {
		GET: (params: DeleteOAuthAppParams) => void;
	};
};
