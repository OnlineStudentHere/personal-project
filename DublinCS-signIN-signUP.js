


const signIN = document.querySelector('.btn-signIN');
const signUP = document.querySelector('.btn-signUP');

signUP.addEventListener('click', (e) => { 
    e.preventDefault()

    const form_itself = document.querySelector('.form-itself');
    form_itself.firstElementChild.remove()
    ADD_form_2()
  }) 


signIN.addEventListener('click', (e) => { 
    e.preventDefault()

  const form_itself = document.querySelector('.form-itself');
  form_itself.firstElementChild.remove()
  ADD_form_1()

  const do_not_have_account = document.querySelector('.do-not-have-account');
  do_not_have_account.removeEventListener("click", do_not_account());
  })


 function ADD_form_2 () {

    const form_itself = document.querySelector('.form-itself');
    function createForm() {
        const form_2 = document.createElement('div');
        form_2.classList.add('form-wrapper-2');


        form_2.innerHTML = `
        <div class="form-wrapper-2">
        <label for="new_name">Name for the account</label>
        <input id="new_name" type="text" name="name" placeholder="Create Account Name">

        <label for="new_email">Email for the account</label>
        <input id="new_email" type="email" name="email" placeholder="Create Email ">

        <label for="new_password">Password for the account</label>
        <input id="new_password" type="password" name="password" placeholder="Create Password">

        <label for="confirm_password">Confirm password for the account</label>
        <input id="confirm_password" type="password" name="confirm_password"  placeholder="Confirm Pnode -assword">

        <button type="button" class="create-account-btn">Create Account</button>

      </div>
        `;
        return form_2;
    }

    form_itself.appendChild(createForm());
}


function ADD_form_1 () {

    const form_itself = document.querySelector('.form-itself');

    function createForm() {
        const form_1 = document.createElement('div');
        form_1.classList.add('form-wrapper-1');

        form_1.innerHTML = `
    <div class="form-wrapper-1">
        <label for="your_name">Your name</label>
        <input type="text" id="your_name" name="name" placeholder="user name"/>

        <label for="your_password">Password</label>
        <input type="password" id="your_password" name="name" placeholder="**********"/>

    <div class="checkbox-wrapper"> 
        <input type="checkbox" name="remember-me" id="remember-me">
        <label for="remember-me">Remember me</label>
    </div>

    <button type="button" class="btn-to-your-account">Log In to Your Account</button>

    <div class="or">         
         <hr>
         <p>OR</p>
         <hr>    
    </div>

    <div class="social-icons-wrapper">
        <a class="facebook"> <span> <i class="fa fa-facebook" style="font-size: 25px;"></i> </span> <span>Sign in with Facebook</span> </a>
        <a class="twitter">  <span> <i class="fa fa-twitter" style="font-size: 25px;" ></i> </span> <span>Sign in with Twitter</span> </span> </a>
        <a class="google">   <span> <i class="fa fa-google-plus" style="font-size: 25px;"></i> </span> <span>Sign in with Google</span> </span> </a>  
    </div>

    <span class="do-not-have-account">Don't have an account?</span>

</div>
        `;
        return form_1;
    }
    form_itself.appendChild(createForm());
}


function do_not_account () {  
    const do_not_have_account = document.querySelector('.do-not-have-account');
    do_not_have_account.addEventListener('click', (e) => {
    e.preventDefault()
    const form_itself = document.querySelector('.form-itself');
    form_itself.firstElementChild.remove()
    ADD_form_2()
      }
    )}
do_not_account();


const section_3_form = document.querySelector('.section-3-form')
section_3_form.addEventListener('click', (e) => {
    
    target = e.target;

    if(target.classList.contains('create-account-btn')){
           //console.log('Yes')
           const modal_window_wrapper = document.querySelector('.modal-window-wrapper');
           modal_window_wrapper.classList.remove('hide-WINDOW');
    }
    else{
        //console.log('NO')
    }
 })


const modal_window_wrapper = document.querySelector('.modal-window-wrapper  ');
const close_X = document.querySelector('.close-X');
modal_window_wrapper.addEventListener('click', (e) => {
    const target = e.target;
    if(target === modal_window_wrapper || target === close_X){
         modal_window_wrapper.classList.add('hide-WINDOW');
    }
})



