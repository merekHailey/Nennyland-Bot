
function FindChallenger(Platform, usernameToChallenge){
    let challengedUser;
    if(usernameToChallenge.startsWith("@")){
        challengedUser = usernameToChallenge.slice(1)
    }
    else{
        challengedUser = usernameToChallenge;
    }
    
}

module.exports = FindChallenger