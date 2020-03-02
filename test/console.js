const { readArtifactSync } = require("@nomiclabs/buidler/plugins");
const Console = artifacts.require('Console');
const { _artifactsPath } = artifacts;
// attempts to replace the link placeholder inside of the artifact
// unfortunately, the contract must be compiled together to work
const consoleContract = Console.new();

const link = (destinationArtifact) => {
  const { linkReferences } = readArtifactSync(_artifactsPath, destinationArtifact.contractName);

  const linksData = linkReferences["contracts/Console.sol"]["Console.sol"];

  const firstLinkData = linksData[0];

  // link data is exressed in bytes, but the bytecode is hex encoded, so we
  // need to multiply everything by 2.
  const linkPlaceholder = destinationArtifact.bytecode.substr(
    firstLinkData.start * 2 + 2, // The + 2 is because of the 0x prefix
    firstLinkData.length * 2
  );

  const libraryIdentifier = linkPlaceholder
    .slice(2)
    .replace(/_+$/, "")
    .replace(/\$/g, "\\$");

  libraryAddresses[libraryIdentifier] = library.address;
}

module.exports = {
  link,
}
