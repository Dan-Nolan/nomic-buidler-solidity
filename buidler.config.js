usePlugin("@nomiclabs/buidler-truffle5");

module.exports = {
    defaultNetwork: "buidlerevm",
    mocha: {
        // reporter: require("./mocha-reporter"),
    },
    solc: {
        version: "0.6.2",
        optimizer: {
            enabled: false,
            runs: 0
        }
    }
};
