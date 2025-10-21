// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Counter} from "../src/Counter.sol";

contract CounterTest {
    function testIncrement() public {
        Counter c = new Counter();
        c.increment();
        require(c.number() == 1, "counter should increment to 1");
    }

    function testSetNumber() public {
        Counter c = new Counter();
        c.setNumber(42);
        require(c.number() == 42, "counter should be set to 42");
    }
}
