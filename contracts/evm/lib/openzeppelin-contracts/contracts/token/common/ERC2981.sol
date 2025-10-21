// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IERC165} from "../../utils/introspection/IERC165.sol";
import {ERC165} from "../../utils/introspection/ERC165.sol";
import {IERC2981} from "../../interfaces/IERC2981.sol";

contract ERC2981 is IERC2981, ERC165 {
    struct RoyaltyInfo {
        address receiver;
        uint96 royaltyFraction;
    }

    RoyaltyInfo private _defaultRoyaltyInfo;

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {
        return interfaceId == type(IERC2981).interfaceId || super.supportsInterface(interfaceId);
    }

    function _feeDenominator() internal pure virtual returns (uint96) {
        return 10000;
    }

    function _setDefaultRoyalty(address receiver, uint96 feeNumerator) internal virtual {
        require(feeNumerator <= _feeDenominator(), "fee too high");
        require(receiver != address(0), "invalid receiver");
        _defaultRoyaltyInfo = RoyaltyInfo(receiver, feeNumerator);
    }

    function royaltyInfo(uint256, uint256 salePrice) public view virtual override returns (address, uint256) {
        RoyaltyInfo memory info = _defaultRoyaltyInfo;
        if (info.receiver == address(0)) {
            return (address(0), 0);
        }
        uint256 royaltyAmount = (salePrice * info.royaltyFraction) / _feeDenominator();
        return (info.receiver, royaltyAmount);
    }
}
