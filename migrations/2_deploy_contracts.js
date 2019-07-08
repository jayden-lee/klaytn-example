const fs = require('fs')
const AdditionGame = artifacts.require('./AdditionGame.sol')

module.exports = function (deployer) {
  deployer.deploy(AdditionGame)
    .then(() => {
        if (AdditionGame._json) {
            fs.writeFile('deployedABI', JSON.stringify(AdditionGame._json.abi),
            (err) => {
                if(err) throw err;
                console.log("Success Write ABI Content");
            }
            )

            fs.writeFile('deployedAddress', AdditionGame.address, 
                (err) => {
                    if (err) throw err;
                    console.log("Success Write Address Content")
                }
            )
        }
    })
}
