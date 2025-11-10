# Deploying to Coolify - Step by Step Guide

This guide will walk you through deploying your Etsy Marketing Site to a VPS using Coolify.

## Prerequisites

1. **VPS Server** (Ubuntu 22.04 LTS recommended)
   - Minimum 2GB RAM
   - 20GB storage
   - A domain name (optional but recommended)

2. **SSH Access** to your VPS

## Step 1: Set Up Your VPS

### 1.1 Connect to Your VPS
```bash
ssh root@your-vps-ip
```

### 1.2 Update the System
```bash
apt update && apt upgrade -y
```

### 1.3 Install Docker (if not already installed)
```bash
curl -fsSL https://get.docker.com | sh
systemctl enable docker
systemctl start docker
```

## Step 2: Install Coolify

### 2.1 Run Coolify Installation Script
```bash
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

This will:
- Install Coolify and its dependencies
- Set up the Coolify dashboard
- Start all required services

### 2.2 Access Coolify Dashboard
After installation completes (takes 2-5 minutes), access Coolify at:
```
http://your-vps-ip:8000
```

**Note:** On first access, you'll be prompted to create an admin account.

### 2.3 Initial Setup
1. Create your admin account (email + password)
2. Set up your instance name
3. Configure email settings (optional, for notifications)

## Step 3: Configure DNS (Recommended)

### 3.1 Point Your Domain to the VPS
In your domain registrar (e.g., Namecheap, GoDaddy, Cloudflare):

1. Add an **A record**:
   - Name: `@` (or `www`)
   - Value: `your-vps-ip`
   - TTL: 3600

2. Wait 5-15 minutes for DNS propagation

### 3.2 Verify DNS
```bash
nslookup your-domain.com
```

## Step 4: Push Your Code to Git

Coolify works best with Git repositories.

### 4.1 Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "Initial commit"
```

### 4.2 Push to GitHub/GitLab/Bitbucket
```bash
# For GitHub
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main
```

## Step 5: Deploy on Coolify

### 5.1 Create a New Project
1. Log in to Coolify dashboard: `http://your-vps-ip:8000`
2. Click **"+ New Project"**
3. Give it a name (e.g., "Etsy Marketing")

### 5.2 Add a New Resource
1. Click **"+ New Resource"**
2. Select **"Public Repository"** or **"Private Repository"** (if you added SSH keys)

### 5.3 Configure the Application

**Repository Settings:**
- Repository URL: Your Git repository URL
- Branch: `main` (or your default branch)
- Build Pack: Select **"Dockerfile"**

**General Settings:**
- Name: `etsy-marketing-site`
- Port: `80` (the port exposed in Dockerfile)

**Domain Settings:**
- If you have a domain: Enter `yourdomain.com`
- If no domain: Use the auto-generated URL from Coolify

**Environment Variables:**
- None required for this static site (add if you need any in the future)

### 5.4 Deploy
1. Click **"Save"**
2. Click **"Deploy"** button
3. Monitor the build logs

The deployment process will:
- Clone your repository
- Build the Docker image
- Start the container
- Set up SSL (if domain is configured)

## Step 6: Enable SSL (HTTPS)

### 6.1 Automatic SSL with Let's Encrypt
If you configured a domain:

1. In your application settings, find **"SSL/TLS"**
2. Click **"Enable SSL"** or **"Generate Certificate"**
3. Coolify will automatically obtain a Let's Encrypt certificate

### 6.2 Verify SSL
Visit `https://yourdomain.com` - you should see a secure connection.

## Step 7: Set Up Automatic Deployments (Optional)

### 7.1 Configure Webhooks
1. In Coolify, go to your application settings
2. Find **"Webhooks"** section
3. Copy the webhook URL

### 7.2 Add to GitHub
1. Go to your GitHub repository
2. Settings → Webhooks → Add webhook
3. Paste the Coolify webhook URL
4. Content type: `application/json`
5. Events: Select "Just the push event"
6. Save

Now every push to your main branch will trigger automatic deployment!

## Step 8: Verify Deployment

### 8.1 Check Application Status
In Coolify dashboard:
- Status should show **"Running"** (green)
- Click on logs to see application output

### 8.2 Visit Your Site
Open your domain (or Coolify-provided URL) in a browser:
```
https://yourdomain.com
```

## Troubleshooting

### Build Fails
- Check build logs in Coolify dashboard
- Verify Dockerfile is correct
- Ensure all dependencies are in package.json

### Container Won't Start
- Check that port 80 is exposed in Dockerfile
- Review container logs in Coolify
- Verify nginx configuration

### SSL Issues
- Ensure domain DNS is properly configured
- Wait for DNS propagation (can take up to 24 hours)
- Check Coolify SSL logs

### Out of Memory
- Upgrade your VPS to at least 2GB RAM
- Or add swap space:
```bash
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo '/swapfile none swap sw 0 0' | tee -a /etc/fstab
```

## Useful Commands

### View Running Containers
```bash
docker ps
```

### View Container Logs
```bash
docker logs <container-id>
```

### Restart Coolify
```bash
systemctl restart coolify
```

### Update Coolify
```bash
curl -fsSL https://cdn.coollabs.io/coolify/upgrade.sh | bash
```

## Security Best Practices

1. **Change SSH Port** (optional but recommended)
2. **Set up Firewall**:
```bash
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 8000/tcp
ufw enable
```

3. **Regular Updates**:
```bash
apt update && apt upgrade -y
```

4. **Use Strong Passwords** for Coolify admin panel

5. **Enable 2FA** in Coolify settings (if available)

## Monitoring & Maintenance

### Check Resource Usage
```bash
htop
docker stats
```

### Database Backups (if applicable)
Set up automated backups in Coolify settings

### Update Your Application
Just push to your git repository:
```bash
git add .
git commit -m "Update site"
git push origin main
```

If webhooks are configured, deployment happens automatically!

## Next Steps

- Set up monitoring (e.g., Uptime Robot)
- Configure CDN (e.g., Cloudflare)
- Set up analytics (e.g., Google Analytics)
- Configure email notifications in Coolify

## Support

- **Coolify Documentation**: https://coolify.io/docs
- **Coolify Discord**: https://coollabs.io/discord
- **GitHub Issues**: https://github.com/coollabsio/coolify

---

**Congratulations! Your site is now live! 🎉**

