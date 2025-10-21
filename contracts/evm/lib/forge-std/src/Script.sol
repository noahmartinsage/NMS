// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface Vm {
    function envUint(string calldata key) external returns (uint256);
    function envAddress(string calldata key) external returns (address);
    function envString(string calldata key) external returns (string memory);
    function envBytes(string calldata key) external returns (bytes memory);
    function startBroadcast(uint256 privateKey) external;
    function stopBroadcast() external;
}

abstract contract Script {
    // Cheatcode address used by Foundry
    address constant internal CHEATCODE_ADDRESS = address(uint160(uint256(keccak256("hevm cheat code"))));
    Vm constant internal vm = Vm(CHEATCODE_ADDRESS);
}
