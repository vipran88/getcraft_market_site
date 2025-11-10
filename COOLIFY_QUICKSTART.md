# Coolify Deployment - Quick Start

## TL;DR - Fast Track Deployment

### 1. Install Coolify on your VPS
```bash
ssh root@your-vps-ip
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

### 2. Access Coolify
Open: `http://your-vps-ip:8000`
Create your admin account.

### 3. Push Your Code to Git
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 4. Deploy in Coolify
1. **New Project** → Name it (e.g., "Etsy Marketing")
2. **New Resource** → Public/Private Repository
3. **Configure:**
   - Repo URL: `https://github.com/yourusername/your-repo.git`
   - Branch: `main`
   - Build Pack: **Dockerfile**
   - Port: `80`
   - Domain: `yourdomain.com` (or use Coolify's auto-generated URL)
4. **Deploy** → Watch it build!

### 5. Enable SSL (if using custom domain)
In application settings → **SSL/TLS** → **Enable SSL**

Done! Your site is live! 🚀

---

## What I've Added to Your Project

### 1. `Dockerfile`
- Multi-stage build for optimized image size
- Uses Node 20 for building
- Serves static files with Nginx

### 2. `nginx.conf`
- Gzip compression for faster loading
- Security headers
- Static asset caching
- SPA routing support
- Health check endpoint

### 3. `.dockerignore`
- Excludes unnecessary files from Docker image
- Keeps image size small

### 4. `DEPLOYMENT_GUIDE.md`
- Complete step-by-step instructions
- Troubleshooting tips
- Security best practices

---

## Local Testing (Optional)

Want to test the Docker build locally?

```bash
# Build the image
docker build -t etsy-marketing .

# Run it
docker run -p 3000:80 etsy-marketing

# Visit http://localhost:3000
```

---

## Common Issues & Solutions

**Build fails?**
- Make sure all files are committed to Git
- Check Coolify build logs

**Can't access the site?**
- Check if port 80 and 443 are open on your VPS
- Verify DNS settings (if using custom domain)

**SSL not working?**
- Wait for DNS propagation (up to 24 hours)
- Ensure domain A record points to VPS IP

---

## Automatic Deployments

Set up webhook in Coolify → Copy URL → Add to GitHub webhooks

Now every `git push` automatically deploys! 🎯

---

## Cost Estimate

**VPS Options:**
- **DigitalOcean**: $6-12/month (Basic Droplet)
- **Hetzner**: €4-8/month (CX21/CX31)
- **Linode**: $5-10/month (Nanode/Shared)
- **Vultr**: $6-12/month (Regular Cloud Compute)

**Domain**: $10-15/year (if you don't have one)

**SSL Certificate**: FREE (Let's Encrypt via Coolify)

**Total**: ~$6-12/month + domain cost

---

## Need Help?

- **Full Guide**: See `DEPLOYMENT_GUIDE.md`
- **Coolify Docs**: https://coolify.io/docs
- **Coolify Discord**: https://coollabs.io/discord

Good luck with your deployment! 🎉

