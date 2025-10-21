// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Script, Vm} from "forge-std/Script.sol";
import {RewardNFT} from "../src/RewardNFT.sol";
import {RewardManager} from "../src/RewardManager.sol";
import {DeployConfig} from "./ConfigLib.s.sol";

contract Deploy is Script {
    using DeployConfig for Vm;

    function run() external {
        uint256 privateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(privateKey);

        string memory name = vm.getEnvStringOr("NFT_NAME", "RewardNFT");
        string memory symbol = vm.getEnvStringOr("NFT_SYMBOL", "RNFT");
        address royaltyReceiver = vm.getEnvAddressOr("ROYALTY_RECEIVER", address(0));
        uint256 royaltyFeeNumerator = vm.getEnvUintOr("ROYALTY_FEE_NUMERATOR", 0);

        RewardNFT nft = new RewardNFT(name, symbol, royaltyReceiver, uint96(royaltyFeeNumerator));
        RewardManager manager = new RewardManager();

        // Prevent unused variable warnings
        nft;
        manager;

        vm.stopBroadcast();
    }
}
