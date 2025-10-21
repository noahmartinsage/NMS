// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Vm} from "forge-std/Script.sol";

library DeployConfig {
    function getEnvStringOr(Vm vm, string memory key, string memory defaultVal) internal returns (string memory) {
        try vm.envString(key) returns (string memory v) {
            return v;
        } catch {
            return defaultVal;
        }
    }

    function getEnvUintOr(Vm vm, string memory key, uint256 defaultVal) internal returns (uint256) {
        try vm.envUint(key) returns (uint256 v) {
            return v;
        } catch {
            return defaultVal;
        }
    }

    function getEnvAddressOr(Vm vm, string memory key, address defaultVal) internal returns (address) {
        try vm.envAddress(key) returns (address v) {
            return v;
        } catch {
            return defaultVal;
        }
    }
}
