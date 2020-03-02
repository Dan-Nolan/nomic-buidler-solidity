pragma solidity ^0.6.2;

import "./Console.sol";

contract EscrowContract {
	uint public x;

	constructor() public {
		x = Console.getFive();
	}
}
