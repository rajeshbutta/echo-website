import React from 'react';

export function VideoSection() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
          See Echo in Action
        </h2>
        <p className="text-[#c2c6d6] text-base max-w-xl mx-auto">
          Watch how Echo transforms post-call workflows for financial advisory teams.
        </p>
      </div>
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/30 max-w-4xl mx-auto">
        <video
          controls
          playsInline
          className="w-full"
          poster=""
        >
          <source src="/echo-marketing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
