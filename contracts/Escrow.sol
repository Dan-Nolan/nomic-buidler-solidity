pragma solidity ^0.6.2;

import "@nomiclabs/buidler/console.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

contract EscrowContract {
	address public arbiter;
	address public beneficiary;
	address public depositor;

	constructor(address, address) public {
			console.log("Escrow has been deployed!");
	}
}
