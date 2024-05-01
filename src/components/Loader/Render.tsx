import { MantineProvider, Loader } from "@mantine/core";
import { RingLoader } from "./RingLoader";

const Render = () => {
  return (
    <MantineProvider
      theme={{
        components: {
          Loader: Loader.extend({
            defaultProps: {
              loaders: { ...Loader.defaultLoaders, ring: RingLoader },
              type: "ring",
            },
          }),
        },
      }}
    >
      <Loader />
    </MantineProvider>
  );
};
export default Render;
