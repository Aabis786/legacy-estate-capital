# Shared-hosting deployment

## Requirements

- Apache hosting with PHP, HTTPS, and access to a directory outside the public document root.
- Node.js 22 and pnpm 10 on the build machine. Node is not required on the production server.
- A working enquiry mailbox and mail transport if notifications are required.

## Build and publish

1. Run `pnpm install --frozen-lockfile`, `pnpm build`, and `pnpm test`.
2. Syntax-check `public/contact.php` with `php -l public/contact.php` on a PHP-capable machine.
3. Back up the complete existing domain document root to a dated directory outside public access.
4. Upload the contents of `out/` to a separate staging directory. Include the hidden `.htaccess` file.
5. Confirm the release contains `index.html`, `_next/`, `contact.php`, all legal routes, and brand assets.
6. Copy the staged release into the site's document root, replacing matching website files. Preserve certificate challenge directories, unrelated files, and private enquiry storage. Do not delete the entire document root.
7. Verify HTTPS, the homepage, mobile navigation, FAQ disclosures, the legal routes, `/robots.txt`, `/sitemap.xml`, and a missing-page response.
8. Submit one clearly identified test enquiry. Check the private record and mailbox delivery separately.

Never upload `.git/`, dependency directories, environment files, source archives, or enquiry records to the public document root.

## Form storage and mail

With the document root at `/home/ACCOUNT/DOMAIN`, the endpoint writes to `/home/ACCOUNT/legacy-private-enquiries`. It creates that directory with mode `0700` and records with mode `0600`. Keep this path outside the public document root and include it in private backup and retention procedures. The rate-limit directory is created under the server temporary directory.

Allowed origins and the notification address are currently explicit in `public/contact.php`. Changing the domain or recipient requires updating those values and rebuilding. If several sites share the account, review the fixed private-directory name before reusing this endpoint.

`mail()` acceptance is not delivery. A `200` response acknowledges private persistence, even if notification mail fails. The original handoff had mailbox provisioning pending; confirm current status with the owner. SMTP configuration, enquiry retention, and mailbox monitoring are deployment responsibilities.

## Rollback

Keep the last release and backup outside the public document root. Restore the backed-up website files if verification fails. Preserve newly captured enquiry records during a frontend rollback. Recheck the homepage, legal pages, and form endpoint after restoration.

## Production changes

No GitHub workflow deploys to production. CI builds and validates only. Publishing remains an explicit, backup-first operation through the hosting account.
