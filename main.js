import {initEnv} from './src/env.js';
import {handleRequest} from './src/router.js';
import {errorToString} from './src/utils.js';


export default {
  async fetch(request, env) {
    try {
      initEnv(env);
      const resp = await handleRequest(request);
      return resp || new Response('NOTFOUND', {status: 404});
    } catch (e) {
      console.error(e);
      return new Response(errorToString(e), {status: 500});
    }
  },
};
