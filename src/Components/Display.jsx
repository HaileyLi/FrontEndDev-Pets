
function Display(props) {
    return (
        <div>
            <h1>Male:</h1>
            {props.maleCat.length === 0 ?
                <span>No Cats Recorded</span> :
                <ul>
                    {props.maleCat.sort().map((item, i) =>
                        <li key={"mkey" + i}>{item}</li>
                    )}
                </ul>}
            <h1>Female:</h1>

            {props.femaleCat.length === 0 ?
                <span>No Cats Recorded</span> :
                <ul>
                    {props.femaleCat.sort().map((item, i) =>
                        <li key={"fkey" + i}>{item}</li>
                    )}
                </ul>}

        </div>
    );
};

export default Display;
