import './ImagePanel.css';

export default function ImagePanel() {
    return(
        <div className="img-component">
            <h2 className='details-title'>Six days trip to Manchester</h2>

            <div className="slider-container">
                <div className="small-container">
                    <div className="small-img">
                        <img src="https://i2-prod.manchestereveningnews.co.uk/incoming/article17428679.ece/ALTERNATES/s615/1_MWOCT19-121051JPG.jpg" alt="" />
                    </div>
                    <div className="small-img">
                        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f8/25/ba/caption.jpg?w=1200&h=-1&s=1" alt="" />
                    </div>
                </div>
                <div className="big-container">
                    <div className="big-img">
                        <img src="https://chartrange.com/wp-content/uploads/2019/02/Manchester-Town-Hall.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}