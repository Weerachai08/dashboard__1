<template>
    <div class="wrapper center" >
        <form action="text" class="center">
            <h2>login</h2>
            <div class="input-box">
                <input type="text" placeholder="Uername" required>
                <i class='bx bxs-user-circle'></i>  <!-- iconuser -->
            </div>
            <div class="input-box">
                <input type="password" placeholder="Password" required>
                <i class='bx bxs-lock'></i> <!-- iconlock -->
            </div>    
            <div class="remember-forgot">
                <label><input type="checbox">Remember me</label>
                <a href="#">Forgot Password?</a> 
            </div>
            <button type="submit" class="btn">Login</button>
            <div class="register-link">
                <p>don't have an account? <a href="/">Register</a></p>
            </div>
        </form>

        <a href="./login.vue" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                  <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
                  </svg>
                  Login
        </a>
        <div>

            <router-view></router-view> 
       </div>
    </div>
</template>

<script>
export default {
    

}

</script>

<style scoped>
    *  {
        margin: 0px;
        padding: 0px;
        box-sizing: center;
        align-items: center;
        font-family:"Poppins", sans-serif;
    }

    body{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: sienna;
        background-image: url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80); /* background */
        background-size: cover;
        background-position: center;
    }

    .wrapper{
        width: 420px;
        background: transparent;
        border: 2px solid rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(20px);
        box-shadow: 0 0 10px rgba(0, 0, 0, .2);
        color:rgb(0, 0, 0);
        border-radius : 10px;
    }

    .wrapper h2{
        font-size: 32px;
        text-align: center;
    }

    .wrapper .input-box{
        width: 100%;
        height: 50px;
        background: rgb(87, 87, 87);
        margin: 30px 0;
    }

    .input-box input{
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;   
        outline: none;
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 40px;
        font-size: 16px;
        color: #fff;
        padding: 20px 45px 20px 20px;
    }

    .input-box input::placeholder{
        color:#fff;
    }

    .input-box i{
        position: absolute;
        top: 50%;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
    }

    .remember-forgot{
       display: flex;
       justify-content: space-between;
       font-size: 14.5px;
       margin: -15px 0 15px;
    }

    .remember-forgot label input{
        accent-color: #fff;
        margin-right: 3px;
    }

    .remember-forgot a{
        color: #fff;
        text-decoration: none;
    }

    .remember-forgot a:hover{
        text-decoration: underline;
    }

    .wrapper .btn{
        width: 100%;
        height: 45px;
        background: #fff;
        border: none;
        outline: none;
        border-radius: 40px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
        cursor: pointer;
        font-size: 16px;
        color: #333;
        font-weight: 600;
    }

    .wrapper .register-link{
        font-size: 14.5px;
        text-align: center;
        margin: 20px 0 15px;
    }

    .register-link p a{
        color: #fff;
        text-decoration: none;
        font-weight: 600;
    }

    .register-link p a:hover{
        text-decoration: underline;
    }
</style>