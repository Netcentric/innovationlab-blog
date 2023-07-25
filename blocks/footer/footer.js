import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  // fetch footer content
  const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});

  if (resp.ok) {
    // decorate footer DOM
    const footer = document.createElement('div');
    footer.innerHTML = await resp.text();

    const [logo, social, nav, contact, copyright] = footer.children;

    logo.classList.add('footer-logo');
    social.classList.add('footer-social');
    nav.classList.add('footer-nav');
    contact.classList.add('footer-contact');
    copyright.classList.add('footer-copyright');

    block.innerHTML = footer.innerHTML;

    decorateIcons(block);
  }
}
