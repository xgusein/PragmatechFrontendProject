class Profile {
    constructor(){
        this.clientid = '',
        this.clientSecret =''
    }

    async getProfile(username){
        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?usernam=${username}`);
        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}