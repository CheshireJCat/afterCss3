import "./index.css";
import { Composition } from "remotion";
import { AfterWebPlatformPromo, DURATION_IN_FRAMES, FPS, HEIGHT, WIDTH } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="AfterWebPlatformPromo"
        component={AfterWebPlatformPromo}
        durationInFrames={DURATION_IN_FRAMES}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};
