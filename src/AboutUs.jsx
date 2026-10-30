import React from 'react';
import { Leaf, Heart, Sprout } from 'lucide-react';

export default function AboutUs() {
  return <section className="about-section" id="about">
    <div className="about-copy"><span className="eyebrow">ROOTED IN CARE</span><h2>A little more green.<br/><em>A lot more joy.</em></h2>
      <p>At Paradise Nursery, we believe every home deserves a touch of nature. We make it easy to find healthy, beautiful houseplants that bring calm, character, and fresh energy into your everyday spaces.</p>
      <p>From first-time plant parents to lifelong leaf lovers, we're here with thoughtfully selected plants and simple care guidance to help your green companions thrive.</p>
    </div>
    <div className="about-values"><article><Leaf/><h3>Plants with purpose</h3><p>Handpicked greenery for happier homes.</p></article><article><Heart/><h3>Care that grows</h3><p>Friendly guidance at every step.</p></article><article><Sprout/><h3>Grow at your pace</h3><p>Beautiful options for every experience level.</p></article></div>
  </section>;
}
