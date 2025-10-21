// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {RewardNFT} from "../src/RewardNFT.sol";

contract RewardNFTTest {
    function testNameSymbol() public {
        RewardNFT nft = new RewardNFT("Reward", "RWD", address(0), 0);
        require(keccak256(bytes(nft.name())) == keccak256(bytes("Reward")), "name mismatch");
        require(keccak256(bytes(nft.symbol())) == keccak256(bytes("RWD")), "symbol mismatch");
    }

    function testMint() public {
        RewardNFT nft = new RewardNFT("R", "R", address(0), 0);
        uint256 id = nft.mint(address(this));
        require(id == 1, "expected token id 1");
        require(nft.ownerOf(id) == address(this), "owner mismatch");
    }
}
