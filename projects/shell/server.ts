import { initNodeFederation } from '@softarc/native-federation-node';

console.log('Starting SSR for Shell');

(async () => {

  await initNodeFederation({
    remotesOrManifestUrl: '../browser/federation.manifest.json',
    relBundlePath: '../browser/',
    // throwIfRemoteNotFound: true,
  });
  
  await import('./bootstrap-server');

})();
