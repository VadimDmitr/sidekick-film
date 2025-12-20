# Security Policy

## 🔒 Reporting Security Issues

If you discover a security vulnerability in Sidekick Media, please **do not** open a GitHub issue. Instead:

1. **DO NOT** publicly disclose the vulnerability
2. Email: [Contact repository maintainer for email address]
3. Include details:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if available)

We will acknowledge receipt within 48 hours and work on a fix.

---

## 📋 Supported Versions

| Package | Version | Support Status | Security Updates |
|---------|---------|-----------------|-----------------|
| Next.js | 16.x | ✅ Active | Yes |
| React | 19.x | ✅ Active | Yes |
| Node.js | 22.x | ✅ LTS | Yes |

---

## 🛡️ Recent Security Updates

### December 2025
- **CVE-2025-55184 & CVE-2025-67779**: Next.js App Router DoS - Fixed (16.0.7+)
- **CVE-2025-55183**: Next.js Source Code Exposure - Fixed (16.0.7+)
- **CVE-2025-66478**: React Server Components Critical - Fixed (19.2.1+)
- **CVE-2025-64756**: glob CLI Command Injection - Fixed (11.0.0+)

---

## ✅ Security Best Practices

This project follows these security practices:

- ✅ Regular dependency updates
- ✅ Automated security audits (`npm audit`)
- ✅ Environment variable management
- ✅ No hardcoded secrets
- ✅ CORS properly configured
- ✅ CSP headers recommended for production
- ✅ X-Frame-Options set to DENY/SAMEORIGIN

---

## 🔍 How We Handle Vulnerabilities

1. **Report received** → Acknowledge within 48 hours
2. **Assessment** → Evaluate severity and impact
3. **Development** → Create fix in private branch
4. **Testing** → Verify fix doesn't introduce new issues
5. **Release** → Deploy patch version
6. **Disclosure** → Publish security advisory

---

## 📚 Security Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [Next.js Security](https://nextjs.org/docs/app/building-your-application/routing/api-routes#security)
- [React Security](https://react.dev/reference/react/Fragment)

---

## 🚀 Staying Secure

We recommend:

1. **Keep dependencies updated**: `npm update`
2. **Run security audits**: `npm audit`
3. **Use strong environment variables**: `.env.local` with strong values
4. **Enable 2FA**: On GitHub and npm account
5. **Monitor security**: Watch for notifications

---

Last Updated: December 20, 2025
