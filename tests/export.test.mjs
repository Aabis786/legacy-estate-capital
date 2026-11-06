import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve('out');
const read = (path) => readFile(resolve(root, path), 'utf8');

test('required pages are exported with titles and canonical URLs', async () => {
  for (const page of ['index.html', 'privacy/index.html', 'terms/index.html', 'disclaimer/index.html']) {
    const html = await read(page);
    assert.match(html, /<title>[^<]+<\/title>/);
    assert.match(html, /rel="canonical"/);
    assert.match(html, /<html lang="en"/);
  }
});

test('homepage internal routes and referenced static assets exist', async () => {
  const html = await read('index.html');
  const references = [...html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)].map((match) => match[1]);
  for (const url of new Set(references)) {
    const path = url.endsWith('/') ? `${url}index.html` : url;
    assert.ok((await stat(resolve(root, `.${path}`))).isFile(), `Missing exported reference: ${url}`);
  }
});

test('discovery files and PHP endpoint are shipped', async () => {
  assert.match(await read('robots.txt'), /Sitemap:/);
  assert.match(await read('sitemap.xml'), /https:\/\/legacyestatecapital\.com/);
  assert.match(await read('contact.php'), /<\?php/);
  assert.match(await read('.htaccess'), /Options -Indexes/);
});
