const profile = new Profile();
const searchProfile = document.querySelector('#searchProfile');


searchProfile.addEventListener('keyup', (event)=>{
    let text = event.target.value;

    if(text!==''){
        profile.getProfile(text)
        .then(res => console.log(res));
    }
})