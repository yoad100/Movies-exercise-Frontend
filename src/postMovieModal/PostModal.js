import React,{useContext, useEffect} from "react";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { MoviesContext } from "../MoviesContext";
import Form from './Form'
function PostModal() {
	const {isMoviesModalOpen,handleWithModal} = useContext(MoviesContext)
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	  };
	  
	return (
		<Modal
			open={isMoviesModalOpen}
			onClose={handleWithModal}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description">
			<Box sx={style}>
				<Form/>
			</Box>
		</Modal>
	);
}

export default PostModal;
