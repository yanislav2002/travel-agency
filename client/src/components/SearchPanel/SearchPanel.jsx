import './SearchPanel.css';

export default function SearchPanel() {
    return(
        <div className='search-panel-container'>
            <form action="" className='search-bar'>
                <input type="text" className='search-text' placeholder='To where?'/>
                <button type='submit' className='search-submit'>Submit</button>
            </form>
            <div className='img-container'>
                <img src="https://wallpapercosmos.com/w/full/3/0/0/293533-3840x2160-desktop-4k-rome-wallpaper.jpg" alt="" />
            </div>
        </div>
    );
}