const ArtToken = artifacts.require("ArtToken");

module.exports = async function (deployer, network, accounts) {
  const owner = accounts[0];
  await deployer.deploy(ArtToken, "ArtToken", "ART", { from: owner });
  const artToken = await ArtToken.deployed();
  console.log('Art Token deployed to:', artToken.address);
};
