.attribution{
    position: absolute;
    bottom: 0px;

    }
@font-face {
    font-family: 'popins';
    src: url(assets/fonts/Poppins-BoldItalic.ttf);
}
@font-face {
    font-family: pop;
    src: url(assets/fonts/Poppins-Bold.ttf);
}
    *{
   
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body{
        background: grey;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card{
        padding:2rem ;
        background: white;
        width: 600px;
        /* height: 500px; */
        border-radius: 10px;
        border-bottom-right-radius: 100px;
    }

    .container{
font-family: pop;
font-size: 13px;
display: flex;
flex-direction: column;
    }

    /* form{
        display: flex;
        flex-direction: column;
    } */
    .formcontainer{
display: flex;
gap: 2rem; 
    }

.inputs{
    display: flex;
    flex-direction: column;
}

label{
    color: rgb(66, 66, 66);
}
input{
    width: 5.5rem;
    height: 2.6rem;
border-radius: 4px;
border: 1px solid rgb(151, 150, 150);
outline: none;
font-weight: 900;
font-size: 1.5rem;
display: flex;
align-items: center;
padding: 5px;
}

input:focus{
    border: 2px solid rgb(196, 75, 196);
}
.submit{
    display: flex;
    align-items: center;
}

hr{
    height: 2px;
    border-width:0;color:rgb(174, 172, 172);background-color:rgb(152, 152, 152);
    width: 100%;
}

button{
    background-color: rgb(182, 72, 182);
    padding: 0.5rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;

}

.output h1{
    font-family: popins;
    font-size: 4rem;
}
.output span{
    color: rgb(184, 65, 184);
}
small{
    color: red;
}



    @media screen and(max-width:600px) {
  
    }
