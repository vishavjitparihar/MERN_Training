// component in React must start wiyh an uppercase character and should be pascal case

const SomeComponent = () => {
    return (
        <>
        <div id="my-special-div">Hello World</div>
        <p>some text</p>
        <div>Goodbye</div>
        <div> ---- </div>
    </>
    )
}


//export syntax
// module.expoorts = SomeComponent; wil not work as we will need to export the function name at the begining and then also destructure the component name
//just to give an example how module.exports work in REACT

//Regular export and to obtain it, you must destructire by name
//"named export"
export const x = 2



//default exports allow us to call it whatever we want in other file. Does not use destructure synatx
//There may only be one default export per file
export default SomeComponent;