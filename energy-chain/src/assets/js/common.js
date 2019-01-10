var host = "http://212.64.2.19:8080/";
var accountAddress;

var SaleClockAuctionAbi = [{
            "constant": true,
            "inputs": [{"name": "", "type": "uint256"}],
            "name": "originIndexToOwner",
            "outputs": [{"name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "minter",
            "outputs": [{"name": "", "type": "address", "value": "0x7e336799d85c78297a0b402ef30ec18f5118dfef"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "receiver", "type": "address"}, {"name": "sender", "type": "address"}, {
                "name": "amount",
                "type": "uint256"
            }],
            "name": "send",
            "outputs": [{"name": "", "type": "bool"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "item_id", "type": "uint256"}, {"name": "tot_price", "type": "uint256"}, {
                "name": "status",
                "type": "uint256"
            }, {"name": "buyer", "type": "address"}],
            "name": "buy",
            "outputs": [{"name": "success", "type": "bool"}],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "", "type": "address"}],
            "name": "balances",
            "outputs": [{"name": "", "type": "uint256", "value": "0"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "receiver", "type": "address"}, {"name": "amount", "type": "uint256"}],
            "name": "recharge",
            "outputs": [{"name": "", "type": "bool"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [],
            "name": "unpause",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "paused",
            "outputs": [{"name": "", "type": "bool", "value": false}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "ns",
            "outputs": [{"name": "quant", "type": "uint256", "value": "0"}, {
                "name": "time",
                "type": "uint256",
                "value": "0"
            }, {"name": "creator", "type": "address", "value": "0x0000000000000000000000000000000000000000"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [{"name": "", "type": "address", "value": "0x7e336799d85c78297a0b402ef30ec18f5118dfef"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "newItemId", "type": "uint256"}, {"name": "status", "type": "uint256"}, {
                "name": "quant",
                "type": "uint256"
            }, {"name": "time", "type": "uint256"}, {"name": "seller", "type": "address"}],
            "name": "createItem",
            "outputs": [{"name": "success", "type": "bool"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "originSolarId", "type": "uint256"}, {"name": "status", "type": "uint256"}, {
                "name": "quant",
                "type": "uint256"
            }, {"name": "time", "type": "uint256"}, {"name": "creator", "type": "address"}],
            "name": "createnewSolar",
            "outputs": [{"name": "success", "type": "bool"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "item_id", "type": "uint256"}, {"name": "status", "type": "uint256"}, {
                "name": "u_price",
                "type": "uint256"
            }, {"name": "seller", "type": "address"}],
            "name": "sale",
            "outputs": [{"name": "success", "type": "bool"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "elec",
            "outputs": [{"name": "u_price", "type": "uint256", "value": "0"}, {
                "name": "status",
                "type": "uint256",
                "value": "0"
            }, {"name": "seller", "type": "address", "value": "0x0000000000000000000000000000000000000000"}, {
                "name": "buyer",
                "type": "address",
                "value": "0x0000000000000000000000000000000000000000"
            }, {"name": "quant", "type": "uint256", "value": "0"}, {"name": "time", "type": "uint256", "value": "0"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "", "type": "uint256"}],
            "name": "itemIndexToOwner",
            "outputs": [{"name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": false, "name": "item_id", "type": "uint256"}, {
                "indexed": false,
                "name": "u_price",
                "type": "uint256"
            }, {"indexed": false, "name": "sender", "type": "address"}, {
                "indexed": false,
                "name": "status",
                "type": "uint256"
            }, {"indexed": false, "name": "result", "type": "bool"}],
            "name": "Sale",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": false, "name": "item_id", "type": "uint256"}, {
                "indexed": false,
                "name": "sender",
                "type": "address"
            }, {"indexed": false, "name": "status", "type": "uint256"}, {"indexed": false, "name": "result", "type": "bool"}],
            "name": "Buy",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": false, "name": "newItemId", "type": "uint256"}, {
                "indexed": false,
                "name": "u_price",
                "type": "uint256"
            }, {"indexed": false, "name": "quant", "type": "uint256"}, {
                "indexed": false,
                "name": "status",
                "type": "uint256"
            }, {"indexed": false, "name": "owner", "type": "address"}],
            "name": "CreateItem",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": false, "name": "originSolarId", "type": "uint256"}, {
                "indexed": false,
                "name": "quant",
                "type": "uint256"
            }, {"indexed": false, "name": "status", "type": "uint256"}, {
                "indexed": false,
                "name": "time",
                "type": "uint256"
            }, {"indexed": false, "name": "owner", "type": "address"}],
            "name": "CreateOrigin",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": false, "name": "from", "type": "address"}, {
                "indexed": false,
                "name": "to",
                "type": "address"
            }, {"indexed": false, "name": "amount", "type": "uint256"}],
            "name": "Sent",
            "type": "event"
}];

var SaleClockAuctionAddress = "0x6cf358e7167AD82c6d53eBf55612471D8d3a0123";

var request = function (url, data, sync, type) {
    var arr;
    $.ajax({
        url: host + url,
        type: type,
        data: data,
        async: sync,
        dataType: "json",
        success: function (result) {
            arr = result;
        },
        error: function (xhr) {
            arr = xhr;
        }
    });
    return arr;
};