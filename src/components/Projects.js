import React from "react";
import AchievementsPreview from "../media/steam-achievements-preview.png";
import GitHubIcon from "../media/github-mark-white.svg";

export default function Projects() {
  return (
    <div>
      <div
        id="main-container"
        className="w-screen h-full py-[18vh] bg-[rgb(209,220,223)] content-center flex flex-col sm:grid sm:grid-cols-2 gap-8"
      >
        <h1 className="text-center text-4xl col-span-2">Projects</h1>
        {/* Vimeo Demo Reel - Intouch Stages */}
        <div id="react-demo-reel" className="sm:ml-4 bg-white/60 rounded-3xl p-6">
          <div className="iframe-container overflow-hidden relative pt-[57%] pb-[-50%]">
            <iframe
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full"
              src="https://player.vimeo.com/video/956921520?badge=0&amp"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="2024 Demo Reel - Reactjs InTouch Stages"
            />
          </div>
          <div id="achievements-header" className="text-2xl text-center">
            React - InTouch Demo Reel
          </div>
        </div>
        <div id="achievements-container" className="sm:mr-4 bg-white/60 rounded-3xl p-6">
          <div
            id="live-icon"
            className="absolute ml-2 sm:ml-4 mt-4 inline-flex justify-center items-center bg-red-500 rounded-xl text-white w-20 border-2 border-red-300"
          >
            <div className="text-4xl">•</div>
            <div className="text-2xl">LIVE</div>
          </div>
          <div id="achievements-img">
            <a href="https://achievements.patrickwcode.com/">
              <img
                alt="Achievements Preview"
                id="achievements-img"
                className="sm:mt-0 w-full aspect-[16/9] object-cover"
                src={AchievementsPreview}
              ></img>
            </a>
          </div>
          <div
            id="achievements-info"
            className="flex flex-col items-center gap-3"
          >
            <div id="achievements-header" className="text-2xl text-center">
              Steam Achievements Search
            </div>
            <div id="github-links-container" className="text-lg">
              <div
                id="github-react-container"
                className="flex items-center mb-2"
              >
                <div className="github-icon">
                  <img alt="GitHub Icon" className="" src={GitHubIcon}></img>
                </div>
                <div id="github-react">
                  <a href="https://github.com/patrickwcode/SteamAchievementsReactJS">
                    SteamAchievementsReactJS
                  </a>
                </div>
              </div>
              <div id="github-node-container" className="flex items-center">
                <div className="github-icon">
                  <img alt="GitHub Icon" className="" src={GitHubIcon}></img>
                </div>
                <div id="github-node">
                  <a href="https://github.com/patrickwcode/steam-achievements-node">
                    steam-achievements-node
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Vimeo Demo Reel - Motion Graphics */}
        <div id="graphics-demo-reel" className="sm:ml-4 bg-white/60 rounded-3xl p-6">
          <div className="iframe-container overflow-hidden relative pt-[57%]">
            <iframe
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full"
              src="https://player.vimeo.com/video/956919270?badge=0&amp"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="2024 Demo Reel - Motion Graphics"
            />
          </div>
          <div id="achievements-header" className="text-2xl text-center">
            Motion Graphics Demo Reel
          </div>
        </div>
      </div>
    </div>
  );
}
