'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MdMail, MdPhone, MdPlayArrow } from 'react-icons/md';
import { siteConfig } from '@/lib/site';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Skills', href: '/skills' },
    { label: 'Contact', href: '/contact' }
  ];

  const actionLinks = [
    { icon: MdMail, label: 'Email', href: siteConfig.emailHref },
    { icon: MdPhone, label: 'Call', href: siteConfig.phoneHref },
    { icon: MdPlayArrow, label: 'Portfolio', href: siteConfig.ctas.portfolio },
  ];

  return (
    <footer className="py-12 px-4 md:px-6 lg:px-8 border-t" style={{ backgroundColor: '#000000', borderColor: 'rgba(220, 38, 38, 0.2)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div data-reveal style={{ '--reveal-delay': '0s' } as React.CSSProperties}>
            <Link href="/" className="mb-4 inline-block" aria-label="Kamesh J home">
              <Image src="/logo.png" alt="Kamesh J logo" width={104} height={44} />
            </Link>
            <p style={{ color: 'rgba(245, 245, 245, 0.7)' }} className="text-sm">
              Creative video editor crafting cinematic stories for brands and creators.
            </p>
          </div>

          <div data-reveal style={{ '--reveal-delay': '0.1s' } as React.CSSProperties}>
            <h3 className="font-bold mb-4" style={{ color: '#DC2626' }}>Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:opacity-70"
                    style={{ color: 'rgba(245, 245, 245, 0.7)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal style={{ '--reveal-delay': '0.2s' } as React.CSSProperties}>
            <h3 className="font-bold mb-4" style={{ color: '#DC2626' }}>Contact</h3>
            <div className="space-y-3">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2 text-sm transition-opacity hover:opacity-80"
                style={{ color: 'rgba(245, 245, 245, 0.7)' }}
              >
                <MdPhone size={18} />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <a
                href={siteConfig.emailHref}
                className="flex items-center gap-2 text-sm transition-opacity hover:opacity-80"
                style={{ color: 'rgba(245, 245, 245, 0.7)' }}
              >
                <MdMail size={18} />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          <div data-reveal style={{ '--reveal-delay': '0.3s' } as React.CSSProperties}>
            <h3 className="font-bold mb-4" style={{ color: '#DC2626' }}>Quick Actions</h3>
            <div className="flex gap-3">
              {actionLinks.map((action, index) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={index}
                    href={action.href}
                    aria-label={action.label}
                    className="p-2 rounded-lg transition-all duration-300 hover:scale-110 inline-flex items-center justify-center"
                    style={{
                      backgroundColor: 'rgba(17, 17, 17, 0.92)',
                      color: '#DC2626',
                      border: '1px solid rgba(220, 38, 38, 0.2)'
                    }}
                  >
                    <Icon size={20} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(220, 38, 38, 0.2)', marginBottom: '1rem' }}></div>

        <div className="flex justify-center text-sm text-center" style={{ color: 'rgba(245, 245, 245, 0.6)' }}>
          <p>&copy; 2025 Kamesh.J. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
