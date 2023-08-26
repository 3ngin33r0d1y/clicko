import { PiCursorClickBold } from "react-icons/pi";
import { PiTimerBold } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";

import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center max-w-[1280px] mx-auto border border-palette-100 rounded-xl bg-palette-100 backdrop-filter backdrop-blur-sm bg-opacity-20 divide-x-2 divide-palette-100">
      <FeatureCard
        icon={<PiCursorClickBold className="text-5xl text-neutral-300" />}
        title="Click tracking"
        desc="See where your users are clicking on your website."
      />
      <FeatureCard
        icon={<PiTimerBold className="text-5xl text-neutral-300" />}
        title="Watch time"
        desc="See how long your users are spending on your website."
      />
      <FeatureCard
        icon={<PiEyeBold className="text-5xl text-neutral-300" />}
        title="Heatmaps"
        desc="See where your users are looking on your website."
      />
    </div>
  );
}

export default Features;