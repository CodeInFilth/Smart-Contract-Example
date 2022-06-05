var Scorecard = artifacts.require("./Scorecard.sol");

module.exports = function(deployer) {
	//scorecard is the contract's name
	
	let n = 1;
	deployer.deploy(Scorecard, {from: arguments[2][n]});
}