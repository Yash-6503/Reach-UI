import React from 'react';
import Hero from '../components/Hero';
import TrustCredentials from '../components/TrustCredentials';
import ImpactMetrics from '../components/ImpactMetrics';
import ProductShowcase from '../components/ProductShowcase';
import WhoWeServe from '../components/WhoWeServe';
import PlatformCapabilities from '../components/PlatformCapabilities';
import TestimonialSlider from '../components/TestimonialSlider';
import CallToAction from '../components/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustCredentials />
      <ImpactMetrics />
      <ProductShowcase />
      <WhoWeServe />
      <PlatformCapabilities />
      <TestimonialSlider />
      <CallToAction />
    </>
  );
}
