const LukiuToken = artifacts.require("./LukiuToken.sol");

module.exports = function (deployer, network, accounts) {
		console.log(`Accounts: ${accounts}`);

		let lukiuToken = null;

		const owner = accounts[0];
		const admin = accounts[1];

		return deployer.deploy(
			LukiuToken, admin,  { from: owner }
		).then(() => {
			return LukiuToken.deployed().then(instance => {
				lukiuToken = instance;
				console.log(`LukiuToken deployed at \x1b[36m${instance.address}\x1b[0m`)
			});
		});
};		
