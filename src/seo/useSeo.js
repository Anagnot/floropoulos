import { useEffect } from 'react';

export const SITE_ORIGIN = 'https://floropoulosedu.gr';
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/og-image.jpg`;

function setMeta(selector, attr, value) {
  if (value == null) return;
  let el = document.head.querySelector(selector);
  if (!el) {
    const [tag, ...rest] = selector.split('[');
    el = document.createElement(tag);
    const attrPart = rest.join('[').replace(/\]$/, '');
    const [k, v] = attrPart.split('=');
    if (k && v) el.setAttribute(k, v.replace(/['"]/g, ''));
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function setLink(rel, href, extra = {}) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]${extra.hreflang ? `[hreflang="${extra.hreflang}"]` : ''}`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (extra.hreflang) el.setAttribute('hreflang', extra.hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function removeJsonLd(id) {
  const el = document.getElementById(id);
  if (el && el.parentNode) el.parentNode.removeChild(el);
}

export function useSeo({
  title,
  description,
  path = '/',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  breadcrumbs,
  jsonLd
} = {}) {
  useEffect(() => {
    const canonical = `${SITE_ORIGIN}${path}`;

    if (title) document.title = title;
    if (description) setMeta('meta[name="description"]', 'content', description);

    setLink('canonical', canonical);
    setLink('alternate', canonical, { hreflang: 'el-gr' });
    setLink('alternate', canonical, { hreflang: 'x-default' });

    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[property="og:type"]', 'content', ogType);
    setMeta('meta[property="og:image"]', 'content', ogImage);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', ogImage);

    if (breadcrumbs && breadcrumbs.length) {
      setJsonLd('jsonld-breadcrumbs', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: `${SITE_ORIGIN}${b.path}`
        }))
      });
    } else {
      removeJsonLd('jsonld-breadcrumbs');
    }

    if (jsonLd) {
      setJsonLd('jsonld-page', jsonLd);
    } else {
      removeJsonLd('jsonld-page');
    }
  }, [title, description, path, ogImage, ogType, JSON.stringify(breadcrumbs), JSON.stringify(jsonLd)]);
}
