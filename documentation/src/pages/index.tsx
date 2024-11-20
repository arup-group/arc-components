import React from 'react';
import Layout from '@theme/Layout';
import { breakpoint } from '../utils';

export default function Home(): JSX.Element {
  const isTablet = breakpoint(1200);
  const isMobile = breakpoint(768);

  return (
    <Layout title="Arup Reuseable Components" description="">
      <div style={{ display: 'grid', gap: '1.2rem', padding: '2.2rem' }}>
        <img src="/arc-cover.svg" />

        <div style={{ display: 'grid', gap: '1.2rem' }}>
          <h1
            style={{
              textAlign: 'left',
              width: isMobile ? '100%' : '50%',
              fontFamily: 'Times New Roman, serif',
              fontWeight: 200,
            }}
          >
            Accessible, Reproducible & Consistent Digital Design for the Built &
            Natural Environment.
          </h1>
        </div>

        <div
          style={{
            display: 'grid',
            gap: '1.2rem',
            gridTemplateColumns: isMobile
              ? '1fr'
              : isTablet
                ? '1fr 1fr'
                : '1fr 1fr 1fr 1fr',
          }}
        >
          <a
            style={{
              padding: '1.2rem',
              textDecoration: 'none',
              border: '2px solid var(--ifm-color-primary)',
              color: 'var(--ifm-color-primary)',
            }}
            href="/docs/introduction"
            aria-label="Get Started"
          >
            <h2>Overview</h2>
            <p>
              Learn about the ARC components library and how to use it in your
              projects.
            </p>
          </a>

          <a
            style={{
              padding: '1.2rem',
              textDecoration: 'none',
              border: '2px solid var(--ifm-color-primary)',
              color: 'var(--ifm-color-primary)',
            }}
            href="/docs/design-guides/getting-started"
            aria-label="Design Documentation"
          >
            <h2>Design Documentation</h2>
            <p>
              Learn how to incorporate ARC into your design process and designs.
            </p>
          </a>

          <a
            style={{
              padding: '1.2rem',
              textDecoration: 'none',
              border: '2px solid var(--ifm-color-primary)',
              color: 'var(--ifm-color-primary)',
            }}
            href="/docs/dev-guides/getting-started"
            aria-label="Developer Documentation"
          >
            <h2>Developer Documentation</h2>
            <p>
              Learn how to incorporate the ARC components library into your
              project.
            </p>
          </a>

          <a
            style={{
              padding: '1.2rem',
              textDecoration: 'none',
              border: '2px solid var(--ifm-color-primary)',
              color: 'var(--ifm-color-primary)',
            }}
            href="/docs/status"
            aria-label="Component & Feature Status"
          >
            <h2>Component & Feature Status</h2>
            <p>Track the progress of ARC components and features.</p>
          </a>
        </div>

        <div
          style={{
            display: 'grid',
            gap: '0.4rem',
            gridTemplateColumns: isTablet ? '1fr 1fr' : '1fr 2fr 1fr 3fr',
            height: '800px',
          }}
        >
          <img
            src="/img/image-02.png"
            style={{
              height: isTablet ? '400px' : '800px',
              width: '100%',
              objectFit: 'cover',
            }}
          />
          <img
            src="/img/desktop.svg"
            style={{
              width: '100%',
              height: isTablet ? '400px' : '800px',
              objectFit: 'cover',
              overflow: 'hidden',
            }}
          />
          <img
            src="/img/image-01.png"
            style={{
              height: isTablet ? '400px' : '800px',
              width: '100%',
              objectFit: 'cover',
            }}
          />
          <img
            src="/img/mobile.svg"
            style={{
              width: '100%',
              height: isTablet ? '400px' : '800px',
              objectFit: 'cover',
              overflow: 'hidden',
            }}
          />
        </div>
      </div>
    </Layout>
  );
}
