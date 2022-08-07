import { Button, Form, Modal, Container } from 'react-bootstrap';
export function Popup(props: any) {
	const { show, setShow } = props;

	const AddExperience = (e: any) => {
		e.preventDefault();
		const form = e.target;
		let UsersData = JSON.parse(localStorage.getItem('formData') || '[]');
		let ProfileData = JSON.parse(localStorage.getItem('Profile') || '[]');

		const body = {
			avatar: form.elements.avatar.value,
			title: form.elements.title.value,
			company: form.elements.company.value,
			place: form.elements.place.value,
		};
		let ExperienceDataArray = [...ProfileData.experience];
		ExperienceDataArray.push(body);
		const ProfileBody = {
			id: ProfileData.id,
			name: ProfileData.name,
			email: ProfileData.email,
			password: ProfileData.password,
			avatar: ProfileData.avatar,
			post: ProfileData.post,
			educations: ProfileData.educations,
			experience: ExperienceDataArray,
			certificates: ProfileData.certificates,
			aboutMe: ProfileData.aboutMe,
		};
		const userIndex = UsersData.findIndex((u: any) => u.email == ProfileData.email);
		UsersData[userIndex] = Object.assign({}, UsersData[userIndex], ProfileBody);
		localStorage.setItem('Profile', JSON.stringify(ProfileBody));
		// localStorage.setItem("formData", JSON.stringify(UsersData))
	};
	return (
		<>
			<Modal show={show} size='lg' onHide={() => setShow(false)}>
				<Container>
					<Modal.Header closeButton>
						<Modal.Title>Add Experience</Modal.Title>
					</Modal.Header>
					<Form style={{ margin: '30px' }} onSubmit={AddExperience}>
						<Form.Group>
							<Form.Label>avatar</Form.Label>
							<Form.Control type='text' placeholder='Enter Avatar' name='avatar' />
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label>Title</Form.Label>
							<Form.Control type='text' placeholder='Enter Title' name='title' />
						</Form.Group>
						<Form.Group>
							<Form.Label>Company </Form.Label>
							<Form.Control type='text' placeholder='Enter Authority' name='company' />
						</Form.Group>
						<Form.Group>
							<Form.Label>Place</Form.Label>
							<Form.Control type='text' placeholder='Enter Authority' name='place' />
						</Form.Group>
						<Modal.Footer>
							<Button variant='secondary' onClick={() => setShow(false)}>
								Close
							</Button>
							<Button variant='primary' type='submit' onClick={() => setShow(false)}>
								Submit
							</Button>
						</Modal.Footer>
					</Form>
				</Container>
			</Modal>
		</>
	);
}
