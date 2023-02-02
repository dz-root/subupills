// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./ERC721A.sol";

contract SUBUPILLSNFT is Ownable, ERC721A {
    using Strings for uint;

    constructor() ERC721A("SubuPills", "SBP") {}

    function mint(uint256 quantity) external onlyOwner {
        _mint(msg.sender, quantity);
    }

    function tokenURI(uint _tokenId) public view virtual override returns (string memory) {
        require(_exists(_tokenId), "URI query for nonexistent token");
        
        uint Id = _tokenId+1;
        return string(abi.encodePacked("ipfs://bafybeia7wjdypy5uusdb7hglkwnqpb7jiirkacgwdi4qlaam4tuasvjvni/", Id.toString(), ".json"));
    }
}