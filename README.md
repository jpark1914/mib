# Men in Blue Security

Production-ready React/Vite redesign for Men in Blue Security, Inc. The application includes Home, Services, About, Careers, Contact, Privacy, Accessibility, and not-found routes.

## Local development

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run typecheck
npm run build
npm run preview
```

The build output is `dist/`.

## Contact form behavior

The site remains fully static. The contact form validates required fields and prepares a prefilled email in the visitor's default mail application. Before launch, this can be replaced with a secure hosted form endpoint or small API without exposing email credentials in the browser.

## Content checks before launch

- Confirm the exact service area and whether the company should be described as Memphis-only or regional.
- Have the client review all service descriptions, licensing language, and career expectations.
- Production domain metadata and Nginx routing are configured for `meninbluesecurityinc.com` and `www.meninbluesecurityinc.com`.
- Have counsel or an authorized client reviewer approve the privacy copy.
- Confirm whether the Calendly URL and public email address remain current.
- Replace stock photography with approved company photography when available.

## EC2 deployment model

The included GitHub Actions workflow deploys `main` to the `production` GitHub environment. It builds the app, temporarily opens SSH to the current GitHub runner, deploys a versioned release with `rsync`, moves the `current` symlink, retains five releases, and revokes only the temporary security-group rule it created.

Recommended server setup:

```bash
sudo apt update
sudo apt install -y nginx rsync
sudo adduser --disabled-password --gecos "" deploy
sudo mkdir -p /var/www/meninblue-security/releases
sudo chown -R deploy:www-data /var/www/meninblue-security
sudo chmod -R 775 /var/www/meninblue-security
```

Copy `deploy/nginx.conf` to `/etc/nginx/sites-available/meninblue-security`, enable the site, and verify before reload:

```bash
sudo ln -s /etc/nginx/sites-available/meninblue-security /etc/nginx/sites-enabled/meninblue-security
sudo nginx -t
sudo systemctl reload nginx
```

After DNS points to the EC2 Elastic IP, install Certbot and request a certificate using the real root and `www` domain names.

## Required GitHub environment secrets

- `AWS_ROLE_TO_ASSUME`
- `AWS_REGION`
- `EC2_SECURITY_GROUP_ID`
- `EC2_HOST` — Elastic IP or stable deployment hostname
- `EC2_USER` — normally `deploy`
- `EC2_PORT` — normally `22`
- `EC2_DEPLOY_PATH` — recommended `/var/www/meninblue-security`
- `EC2_SSH_KEY`

Configure these secrets in the `production` GitHub environment. The AWS role should trust GitHub OIDC for `repo:jpark1914/mib:environment:production`, with permission limited to authorizing and revoking ingress on the selected security group.

