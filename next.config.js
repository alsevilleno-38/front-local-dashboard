const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, {defaultConfig}) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            excludeFiles: "data",
            node: {
                "__dirname": false
            }
        }    
    }
    
    throw new Error("Non-dev configs are not available.")
}