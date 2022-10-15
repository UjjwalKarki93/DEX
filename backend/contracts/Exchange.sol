//SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Exchange is ERC20 {
    address public tokenAddress;  
     
    constructor(address _tokenAddress) ERC20("Shares Token","ST"){
        require(_tokenAddress != address(0),"token address cant be null");
        tokenAddress=_tokenAddress;
    } 


   // to get the ACO token reserve of this contract.
    function getReserve() public view returns(uint){
        return ERC20(tokenAddress).balanceOf(address(this));
    }
    

    //ACO token holder can add liquidity in the contract's trading pool
    function addLiquidity(uint _amount) public payable returns (uint liquidity){
        _amount=_amount*10**18;
        uint ethBalance = address(this).balance;
        uint AC0tokenReserve= getReserve();
        ERC20 ACOtokenInstance = ERC20(tokenAddress);

        if(AC0tokenReserve == 0){   
            ACOtokenInstance.transferFrom(msg.sender,address(this),_amount);
            liquidity =  ethBalance;
            _mint(msg.sender,liquidity);
        } else {

            uint ethReserve = ethBalance - msg.value;
            uint  ACOtokenAmount= (AC0tokenReserve * msg.value)/(ethReserve);
            require(_amount >= ACOtokenAmount,"Token amount is less than minimum token required" );
            ACOtokenInstance.transfer(address(this),ACOtokenAmount);
            liquidity= (totalSupply()*msg.value)/ethReserve;
            _mint(msg.sender,liquidity);
        }
        return liquidity;

    }


    function removeLiquidity(uint _shareAmount) public returns (uint ethAmount,uint ACOtokenAmount){
        _shareAmount=_shareAmount*10**18;

        require(_shareAmount>0,"amount should be greater");
        uint ethReserve = address(this).balance;
        uint shareTokenReserve= totalSupply();

        //calculate proportion of eth and acotoken to be sent based on the portion of ST held
        ethAmount= (ethReserve*_shareAmount)/shareTokenReserve;
        ACOtokenAmount=(getReserve() * _shareAmount)/shareTokenReserve;
        _burn(msg.sender,_shareAmount);
        
        //transfer eth to the liquidity provider;
        payable(msg.sender).transfer(ethAmount);

        //transfer token from contract's trading pool to the liquidity provider;
        ERC20(tokenAddress).transfer(msg.sender,ACOtokenAmount);
        return (ethAmount,ACOtokenAmount);

        
    }
    
    function amountCalculator(uint input,uint inputReserve,uint outputReserve)public pure returns(uint outputAmount){ 
    require(inputReserve >0 && outputReserve > 0,"reserves are empty");
    //charge 1% fees
    uint inputAmountWithFee = input*99;
    outputAmount=(outputReserve-inputAmountWithFee)/(input+inputReserve);
    return outputAmount;
    }


    function ethToAco() public payable{
        uint ACOreserve=getReserve();
        uint tokenAmountToget= amountCalculator(msg.value,address(this).balance-msg.value,ACOreserve);
        ERC20(tokenAddress).transfer(msg.sender,tokenAmountToget);
    } 

    function AcoToEth(uint _tokenForSwap)public {
        uint ACOreserve = getReserve();
        uint ethToGet = amountCalculator(_tokenForSwap,ACOreserve,address(this).balance);
        payable(msg.sender).transfer(ethToGet);
    }









} 
