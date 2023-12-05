import './ImagePanel.css';

export default function ImagePanel({title, imgUrl1, imgUrl2, imgUrl3}) {
    return(
        <div className="img-component">
            <h2 className='details-title'>{title}</h2>

            <div className="slider-container">
                <div className="small-container">
                    <div className="small-img">
                        <img src={imgUrl1} />
                    </div>
                    <div className="small-img">
                        <img src={imgUrl2} />
                    </div>
                </div>
                <div className="big-container">
                    <div className="big-img">
                        <img src={imgUrl3} />
                    </div>
                </div>
            </div>
        </div>
    );
}