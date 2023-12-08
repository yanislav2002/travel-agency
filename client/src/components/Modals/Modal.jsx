import './Modal.css'; // Import your CSS file

export default function Modal ({children}) {
    return (
        <div id="myModal" className="modal">


            {/* <form className='modal-form'>  */}

                {children}

            {/* </form> */}

        </div>
    );
}
