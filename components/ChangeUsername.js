import { useMoralis } from "react-moralis"

function ChangeUsername() {
    const {setUserData,isUserUpdating,user,userError }=useMoralis();
    const setUserName=()=>{
        const username =prompt(`Enter Your Username (Current :${user.getUsername()})`);
        if(!username) return ;
        setUserData({
            username,
        })
    }
    return (
        <div className="text-sm absolute top-5 right-5">
            <button disabled={isUserUpdating}
            onClick={setUserName}
            className="hover:text-pink-700">
                Change your UserName
            </button>
        </div>
    )
}

export default ChangeUsername
