import './Filter.css';

export default function Filter(){
    return(
        <form className='filter'>
            <label>
                <p>Location</p>
                <select>
                    <option value="">Select Location</option>
                    <option value="Bulgaria">Bulgaria</option>
                </select>
            </label>

            <label>
                <p>Price</p>
                <select>
                    <option value="">Select Money</option>
                    <option value="1000">Up to 1000</option>
                </select>
            </label>

            <label>
                <p>Days</p>
                <select >
                    <option value="">Select Days</option>
                    <option value="one">One</option>
                </select>
            </label>

            <button type="submit">Filter</button>
        </form>
    );
}