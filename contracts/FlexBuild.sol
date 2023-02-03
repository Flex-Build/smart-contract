// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;

contract FlexBuild {
    constructor() {}

    struct Component {
        address owner;
        string code_hash;
        uint256 price;
        string name;
    }

    event ComponentBought(address buyer, uint256 component_id);
    event ComponentCreated(address owner, string code_hash, uint256 price, uint256 id, string name);
    struct Order {
        address buyer;
        uint256 component_id;
    }
    uint256 order_id_counter = 0;
    mapping(uint256 => Order) public id_to_order;
    uint256 id_counter = 0;
    mapping(uint256 => Component) public id_to_component;

    function createComponent(string memory code_hash, uint256 price, string memory name) public {
        id_to_component[id_counter].owner = msg.sender;
        id_to_component[id_counter].code_hash = code_hash;
        id_to_component[id_counter].price = price;
        id_to_component[id_counter].name = name;
        emit ComponentCreated(msg.sender, code_hash, price, id_counter, name);
        id_counter++;
    }

    function buyComponents(uint256[] memory ids) public payable {
        uint256 total_price_to_pay = 0;
        for (uint256 i = 0; i < ids.length; i++) {
            total_price_to_pay += id_to_component[ids[i]].price;
        }
        require(msg.value == total_price_to_pay, "total price doesn't match");
        for (uint256 i = 0; i < ids.length; i++) {
            id_to_order[order_id_counter].buyer = msg.sender;
            id_to_order[order_id_counter].component_id = ids[i];
            payable(id_to_component[ids[i]].owner).transfer(id_to_component[ids[i]].price);
            emit ComponentBought(msg.sender, ids[i]);
            order_id_counter++;
        }
    }

    function getComponents() public view returns (Component[] memory) {
        Component[] memory ret = new Component[](id_counter);
        for (uint i = 0; i < id_counter; i++) {
            ret[i] = id_to_component[i];
        }
        return ret;
    }
}
