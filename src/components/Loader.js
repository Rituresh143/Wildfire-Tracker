import spinner from './spinner.gif'

const Loader = () => {
    return (
        <div className="loader">
           <img src={spinner} alt="Loading" />
           <h1>The Fire is Visible</h1>
        </div>
    )
}

export default Loader