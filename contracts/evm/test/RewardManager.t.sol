// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {RewardManager} from "../src/RewardManager.sol";

contract RewardManagerTest {
    function testProcessAndUpdate() public {
        RewardManager m = new RewardManager();
        m.processReward(address(0xBEEF), 100, keccak256(bytes("reward-1")));
        m.updatePool(keccak256(bytes("pool-1")), 42);
    }
}
