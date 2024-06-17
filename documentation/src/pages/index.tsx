import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const [isMobile] = useState(window.matchMedia('(max-width: 768px)').matches);

  return (
    <Layout title="Arup Reuseable Components" description="">
      <div style={{ display: 'grid', gap: '1.2rem' }}>
        <div
          style={{
            display: 'grid',
            height: '100%',
            overflow: 'hidden',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <div style={{ position: 'relative', height: '100%' }}>
            <img
              src="/img/arup.svg"
              style={{ position: 'absolute', bottom: 0, left: 0, width: '25%' }}
            />
          </div>
          <img src="/img/arc-cover.svg" />
        </div>

        <div
          style={{
            display: 'grid',
            gap: '0.4rem',
            gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 2fr 1fr 3fr',
            height: '800px',
          }}
        >
          <img
            src="/img/image-02.png"
            style={{
              height: isMobile ? '400px' : '800px',
              width: '100%',
              objectFit: 'cover',
            }}
          />
          <img
            src="/img/desktop.svg"
            style={{
              width: '100%',
              height: isMobile ? '400px' : '800px',
              objectFit: 'cover',
              overflow: 'hidden',
            }}
          />
          <img
            src="/img/image-01.png"
            style={{
              height: isMobile ? '400px' : '800px',
              width: '100%',
              objectFit: 'cover',
            }}
          />
          <img
            src="/img/mobile.svg"
            style={{
              width: '100%',
              height: isMobile ? '400px' : '800px',
              objectFit: 'cover',
              overflow: 'hidden',
            }}
          />
        </div>

        <div style={{ display: 'grid', gap: '1.2rem', padding: '2.2rem' }}>
          <h1
            style={{
              textAlign: 'left',
              width: '75%',
              fontFamily: 'Times New Roman, serif',
              fontWeight: 200,
            }}
          >
            Accessible, Reproducible & Consistent Digital Design for the Built &
            Natural Environment.
          </h1>
        </div>
      </div>
    </Layout>
  );
}
