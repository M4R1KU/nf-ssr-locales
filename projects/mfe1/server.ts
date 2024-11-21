import { initNodeFederation } from '@softarc/native-federation-node';
import { cwd } from 'process';
import * as path from 'node:path';

(async () => {

  await initNodeFederation({
    relBundlePath: '../browser/'
  });
  
  import('./bootstrap-server');

})();
