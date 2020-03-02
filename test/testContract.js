const EscrowContract = artifacts.require('EscrowContract');
const Console = artifacts.require('Console');

contract('EscrowContract', function(accounts) {
    let contract;
    let _depositor = accounts[0];
    let _arbiter = accounts[1];
    let _beneficiary = accounts[2];
    before(async () => {
        const cs = await Console.new();
        EscrowContract.link(cs);
        console.log(EscrowContract.bytecode)
        contract = await EscrowContract.new({
            from: _depositor,
            gasPrice: 0,
        });
    });
    describe('Contract Stage tests', function() {
        it('should get 5', async function() {
            const five = await contract.x.call();
            assert.equal(five, 5);
        });
    });
});
