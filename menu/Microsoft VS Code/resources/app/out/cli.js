"use strict";const bootstrap=require("./bootstrap"),bootstrapNode=require("./bootstrap-node"),product=require("../product.json");bootstrap.avoidMonkeyPatchFromAppInsights(),bootstrapNode.configurePortable(product),bootstrap.enableASARSupport(void 0),require("./bootstrap-amd").load("vs/code/node/cli");

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/3c4e3df9e89829dce27b7b5c24508306b151f30d/core/cli.js.map
