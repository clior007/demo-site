import {createClient , OAuthStrategy} from '@wix/sdk';

export useWixClient = () => {
    const wixClient = createClient({
        auth:  new OAuthStrategy({
            clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID
        })
    });
    return wixClient;
}

