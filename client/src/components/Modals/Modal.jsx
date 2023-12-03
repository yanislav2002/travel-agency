import './Modal.css'; // Import your CSS file

export default function Modal ({children}) {
    return (
        <div id="myModal" className="modal">

            <span className="close">&times;</span>

            {/* <form className='modal-form'>  */}

                {children}

            {/* </form> */}

        </div>
    );
}
