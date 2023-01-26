import 'react-toastify/dist/ReactToastify.css'
import {toast, ToastContainer} from "react-toastify";
import React from "react";

// toast.configure();

const CostomeToasty = ({closeToast}) => {
	return (<> Somting went Worn
				<button onClick={closeToast}> Close</button>      </>
	)}

export const ReactToastify = () => {
	const notify = () => {
		toast.success(<CostomeToasty/>,
			{
				position: "top-left",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			}
			);

			toast.info('🦄 Wow so easy!',
			{
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});

			toast.warn('🦄 Wow so easy!',
			{
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			}
			);
			toast.error('🦄 Wow so easy!',
			{
				position: "bottom-left",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			}
			);
			toast('🦄 Wow so easy!',
			{
				position: "bottom-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			}
			);
			}


			return (
			<div>
				<button onClick={notify}>Notify</button>

				<ToastContainer
						// position="top-left"
						// autoClose={5000}
						// hideProgressBar={false}
						// newestOnTop={false}
						// closeOnClick
						// rtl={false}
						// pauseOnFocusLoss
						// draggable
						// pauseOnHover
						// theme="dark"

				/>
				{/*<ToastContainer*/}
				{/*		position="top-right"*/}
				{/*		autoClose={5000}*/}
				{/*		hideProgressBar={false}*/}
				{/*		newestOnTop={false}*/}
				{/*		closeOnClick*/}
				{/*		rtl={false}*/}
				{/*		pauseOnFocusLoss*/}
				{/*		draggable*/}
				{/*		pauseOnHover*/}
				{/*		theme="colored"*/}
				{/*/>*/}
				{/*<ToastContainer*/}
				{/*		position="bottom-center"*/}
				{/*		autoClose={5000}*/}
				{/*		hideProgressBar={false}*/}
				{/*		newestOnTop={false}*/}
				{/*		closeOnClick*/}
				{/*		rtl={false}*/}
				{/*		pauseOnFocusLoss*/}
				{/*		draggable*/}
				{/*		pauseOnHover*/}
				{/*		theme="light"*/}
				{/*/>*/}

			</div>
			);
			}