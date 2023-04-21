// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './lib-franklin.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

function injectScript(src) {
  window.scriptsLoaded = window.scriptsLoaded || [];

  if (window.scriptsLoaded.indexOf(src)) {
    const head = document.querySelector('head');
    const script = document.createElement('script');

    script.src = src;
    script.setAttribute('async', 'true');
    head.append(script);
    window.scriptsLoaded.push(src);
  }
}

function loadAdobeDatacollection() {
  window.adobeDataLayer = window.adobeDataLayer || [];

  const src = window.location.host === 'newhorizons-blog.innovationlab.cx'
    ? 'https://assets.adobedtm.com/2d725b839720/84e64346d33d/launch-96e515074f06.min.js'
    : 'https://assets.adobedtm.com/2d725b839720/84e64346d33d/launch-87d8e5f3357c-staging.min.js';
  injectScript(src);
}

loadAdobeDatacollection();
