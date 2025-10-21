// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract RewardManager {
    event RewardProcessed(address indexed account, uint256 amount, bytes32 indexed rewardId);
    event PoolUpdated(bytes32 indexed poolId, uint256 newAllocation);

    // basic state for pools and processed rewards
    mapping(bytes32 => uint256) public poolAllocations;
    mapping(bytes32 => bool) public rewardSeen;
    mapping(address => uint256) public totalRewarded;

    function processReward(address account, uint256 amount, bytes32 rewardId) external {
        require(account != address(0), "invalid account");
        require(amount > 0, "invalid amount");
        require(!rewardSeen[rewardId], "duplicate reward");

        rewardSeen[rewardId] = true;
        totalRewarded[account] += amount;

        emit RewardProcessed(account, amount, rewardId);
    }

    function updatePool(bytes32 poolId, uint256 allocation) external {
        poolAllocations[poolId] = allocation;
        emit PoolUpdated(poolId, allocation);
    }
}
