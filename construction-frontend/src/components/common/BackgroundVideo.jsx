import React from "react";
import bgVideo from "../../assets/videos/construction-bg.mp4";

const BackgroundVideo = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-[#0F172A]">
      {/* Dark overlay mask to ensure content text stays readable over the video */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-[#0F172A]/95 z-10" />

      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
      >
        {/* Replace with your local construction video asset path or an external URL */}
        <source
          src={bgVideo}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;