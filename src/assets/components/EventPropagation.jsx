import "./EV.css";

export const EventPropagation = () => {

    const hadleGrandParent = () => {
        console.log("GrandParent clicked");
    };

    const handleParent = () => {
        console.log("Parent clicked ");
    };

    const handleChildClick = (event) => {
        console.log(event);
        event.stopPropagation();
        console.log("child clicked ");
    };

    return (
        <section className="main-div">
            {/* <div className="g-div" onClick={hadleGrandParent}>  in this Bubbling */}
            {/* in the use of onClickCapture  Capturing phase */}
            <div className="g-div" onClickCapture={hadleGrandParent}>
                <div className="p-div" onClickCapture={handleParent}>
                    <button className="c-div" onClickCapture={handleChildClick}>
                        Child Div
                    </button>
                </div>
            </div>
        </section>
    );
};