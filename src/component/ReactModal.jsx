import Modal from 'react-modal'
import {useState} from "react";

export const ReactModal = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	Modal.setAppElement('#root'); // agar tidak error
	const customStyles = {
		content: {
			// top: '80%',
			// left: '80%',
			// right: 'auto',
			// bottom: 'auto',
			// transform: 'translate(-50%, -50%)',
		},
	};


	return (
			<div>
				<button onClick={() => setModalIsOpen(true)}>Open modal</button>
				<Modal

						isOpen={modalIsOpen}
						onRequestClose={() => setModalIsOpen(false)}
						// style={customStyles}
						style={
							{
								content: {color: 'red'},
								overlay: {backgroundColor: 'grey'}
							}
						}
						contentLabel="Example Modal"
						// onAfterOpen={afterOpenModal}
						shouldCloseOnOverlayClick={false}
				>
					<h2>Modal Title</h2>
					<p>Modal Body</p>
					<button onClick={
						() => setModalIsOpen(false)}>Close
					</button>
				</Modal>
			</div>
	);
}