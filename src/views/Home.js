import React from "react";
import Grid from "@material-ui/core/Grid";
export const Home = () => {
  return (
    <Grid style={{ marginTop: "5px", marginLeft: "5px", marginRight: "5px" }}>
      <Grid>
        <div>
          <h3>This is a quick and dirty image cropper</h3>
        </div>
      </Grid>
      <Grid>
        <div>
          <p>
            This is a quick and dirty image cropper for the digital photoframe
            from Denver. The model of the photoframe is&nbsp;
            <a href="https://denver-electronics.com/products/frameo/denver-pff-1010black/c-1024/c-1262/p-2991">
              PFF-1010BLACK MK2
            </a>
          </p>
          <h3>
            source code can be found on &nbsp;
            <a href="https://github.com/rasmusglintborg/photocropper">github</a>
          </h3>
        </div>
      </Grid>
    </Grid>
  );
};
