// export const Profile = () => {
//     return (
//         <>
//             <h1>Profile card</h1>
//             <ProfileCard />

//         </>
//     )
// }

const Profile = () => {
    return (
        <div>
        <h1>Profile card challange</h1>
        <ProfileCard
            name = "Abhay"
            age = {20}
            greeting = {
                <div>
                    <strong>Hi Abhay, Have a wonderful day!</strong>
                </div>
            }
        />
        <p>Hobbies : Singing, dancing</p>
        <button>Contact</button>
        </div>
    )
}

export default Profile;

function ProfileCard(props){
    return (
        <>
            <p>Name : {props.name}</p>
            <p>Age : {props.age} </p>
            <p> {props.greeting}</p>
            <div> {props.children} </div>
        </>
    )
}