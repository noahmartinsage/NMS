// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC165} from "../../utils/introspection/ERC165.sol";

contract ERC721 is ERC165 {
    // Minimal ERC721 subset sufficient for compilation and basic mint tests
    string private _name;
    string private _symbol;

    // owner and balances
    mapping(uint256 => address) internal _owners;
    mapping(address => uint256) internal _balances;

    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    function name() public view virtual returns (string memory) {
        return _name;
    }

    function symbol() public view virtual returns (string memory) {
        return _symbol;
    }

    function balanceOf(address owner) public view virtual returns (uint256) {
        require(owner != address(0), "zero address");
        return _balances[owner];
    }

    function ownerOf(uint256 tokenId) public view virtual returns (address) {
        address owner = _owners[tokenId];
        require(owner != address(0), "nonexistent token");
        return owner;
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
        // 0x80ac58cd is ERC721 interface id
        return interfaceId == 0x80ac58cd || super.supportsInterface(interfaceId);
    }

    function _exists(uint256 tokenId) internal view returns (bool) {
        return _owners[tokenId] != address(0);
    }

    function _mint(address to, uint256 tokenId) internal virtual {
        require(to != address(0), "mint to zero address");
        require(!_exists(tokenId), "token already minted");
        _balances[to] += 1;
        _owners[tokenId] = to;
        emit Transfer(address(0), to, tokenId);
    }

    // Unimplemented ERC721 methods for brevity in this stub
    function transferFrom(address, address, uint256) public virtual {
        revert("not implemented");
    }

    function approve(address, uint256) public virtual {
        revert("not implemented");
    }

    function setApprovalForAll(address, bool) public virtual {
        revert("not implemented");
    }

    function getApproved(uint256) public view virtual returns (address) {
        return address(0);
    }

    function isApprovedForAll(address, address) public view virtual returns (bool) {
        return false;
    }
}
