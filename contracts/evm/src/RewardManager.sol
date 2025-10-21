// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract RewardManager {
    event RewardProcessed(address indexed account, uint256 amount, bytes32 indexed rewardId);
    event PoolUpdated(bytes32 indexed poolId, uint256 newAllocation);

    function processReward(address account, uint256 amount, bytes32 rewardId) external {
        emit RewardProcessed(account, amount, rewardId);
    }

    function updatePool(bytes32 poolId, uint256 allocation) external {
        emit PoolUpdated(poolId, allocation);
    }
}
