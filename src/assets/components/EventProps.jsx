export const EventProps = () => {

    const HandleWelcomeUser = (user) => {
        alert(`Hey, ${user}`);
    }

    const handleHover = () =>{
        alert(`Hey, Thanks for hovering me`);
    };

    return (
        <>
            <WelcomeUser
                // here in the parents class we can also write buttonOnClick but not in the child
                onClick = {() => HandleWelcomeUser("Abhay")}
                onMouseEnter={handleHover}
            />
        </>
    );
};

const WelcomeUser = (props) => {

    const handleGreeting= () => {
        console.log("Hey user, welcome back");
        props.onClick();
    }
    return (
    <>
    <button onClick={props.onClick}>Click</button>
    <button onMouseEnter={props.onMouseEnter}>Hover me</button>
    <button onClick={handleGreeting}>Greeting</button>
    
    </>
    )
}