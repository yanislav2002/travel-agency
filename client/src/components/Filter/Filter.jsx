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
                <select name="selectMoney">
                    <option value="">Select Money</option>
                    <option value="500">Up to 500</option>
                    <option value="1000">Up to 1000</option>
                    <option value="1500">Up to 1500</option>
                    <option value="2000">Up to 2000</option>
                    <option value="2500">Up to 2500</option>
                    <option value="3000">Up to 3000</option>
                    <option value="3001">Above 3000</option>
                </select>
            </label>

            <label>
                <p>Days</p>
                <select name="selectDays">
                    <option value="">Select Days</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                    <option value="6">Six</option>
                    <option value="7">Seven</option>
                    <option value="8">Eight and above</option>
                </select>
            </label>

            <button type="submit">Filter</button>

            <button type="submit">Clear</button>
        </form>
    );
}