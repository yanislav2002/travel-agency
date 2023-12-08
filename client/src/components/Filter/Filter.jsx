import './Filter.css';


const FORM_KEYS = {
    selectedPrice: 'price',
    selectedDays: 'days', 
};

export default function Filter({ onFilterSubmit }){

    const editOfferSubmitHandler = async (event) => {
        event.preventDefault();

        const values = Object.fromEntries(new FormData(event.currentTarget));

        try {
            onFilterSubmit(values);

        } catch (err) {
            console.log(err);
        }
    };

    return(
        <form className='filter' onSubmit={editOfferSubmitHandler}>
            <label>
                <p>Price</p>
                <select name={FORM_KEYS.selectedPrice}>
                    <option value="100000">Select Price</option>
                    <option value="500">Up to 500</option>
                    <option value="1000">Up to 1000</option> 
                    <option value="1500">Up to 1500</option>
                    <option value="2000">Up to 2000</option>
                    <option value="2500">Up to 2500</option>
                    <option value="3000">Up to 3000</option>
                </select>
            </label>

            <label>
                <p>Days</p>
                <select name={FORM_KEYS.selectedDays}>
                    <option value="100">Select Days</option>
                    <option value="3">Up to Three</option>
                    <option value="4">Up to Four</option>
                    <option value="5">Up to Five</option>
                    <option value="6">Up to Six</option>
                    <option value="7">Up to Seven</option>
                </select>
            </label>

            <button type="submit">Filter</button>
        </form>
    );
}