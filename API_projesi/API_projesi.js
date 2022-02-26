const profile = new Profile();
const ui = new UI();
const searchProfile = document.querySelector('#searchProfile');


searchProfile.addEventListener('keyup', (event)=>{
    let text = event.target.value;

    if(text!==''){
        profile.getProfile(text)
        .then(res => { 
                if(res.profile.length === 0){

                }else{
                   ui.showProfile(res.profile[0]);
                }
            })
        }    

})