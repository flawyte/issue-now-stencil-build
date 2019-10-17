import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  outputTargets: [{
    type: 'www',
    serviceWorker: null,
    copy: [
      { src: `${__dirname}/now.json`,
        dest: 'now.json' },
    ]
  }],
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css'
};
