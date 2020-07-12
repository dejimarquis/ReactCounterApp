import { ApplicationInsights } from '@microsoft/applicationinsights-web'

const config = require('./config.json');
const appInsightsConfig = config.appInsights;

export const appInsights = new ApplicationInsights({
    config: {
        instrumentationKey: appInsightsConfig.instrumentationKey
    }
}).loadAppInsights();