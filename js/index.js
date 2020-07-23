const login = document.getElementById('login');

// login buttton event handler
login.addEventListener('click',function(event){
     const loginArea = document.getElementById('login-area');  //get the login Area
     loginArea.style.display = 'none'; //Hide an elements
     const transactionArea = document.getElementById('transaction-area'); //get the nextPage area
     transactionArea.style.display = 'block';  //Show the elements
    
})


// Deposite functionality starts 


const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click',function(event){
   
    const depositAmount = document.getElementById('depositAmount').value;

     const depositNumber = parseFloat(depositAmount);
     
     const depositRemAmount = document.getElementById('depositRemAmount').innerText;  

     const CurrentDeposite = parseFloat(depositRemAmount);  // Convert string to float 

     const totalDeposite = depositNumber+CurrentDeposite;  //totalDeposite


     document.getElementById('depositRemAmount').innerText = totalDeposite;  //change the previous value 

     document.getElementById('depositAmount').value = '';   //clear the input 

     const balance = document.getElementById('balanceAmount').innerText;  //main account balance

     const balanceNumber = parseFloat(balance);
      

     document.getElementById('balanceAmount').innerText=balanceNumber+totalDeposite;
     
})

// Deposite functionality ends 



// WithDraw Functionality Starts 

const withdrawBtn = document.getElementById('withdraw-btn');

withdrawBtn.addEventListener('click',function(event){

  const WithdrawAmount = document.getElementById('addWithdraw').value;

  const WithdrawAmountNumber = parseFloat(WithdrawAmount);

  const WithdrawBar = document.getElementById('withdrawbar').innerText;

  const WithdrawNumber = parseFloat(WithdrawBar) ;

  const total = WithdrawAmountNumber + WithdrawNumber ;

  document.getElementById('withdrawbar').innerText = total ;

  const balance = document.getElementById('balanceAmount').innerText;  //main account balance

  const balanceNumber = parseFloat(balance) ;

  const remBalance = balanceNumber - total ;

  document.getElementById('balanceAmount').innerText=remBalance;


  document.getElementById('addWithdraw').value='';

   
})


// WithDraw Functionality ends 


