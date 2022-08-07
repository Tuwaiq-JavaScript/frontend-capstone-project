export function RightSide() {
	return (
		<div className='widgets'>
			<div className='widgets__header'>
				<h2>news</h2>
				<i className='material-icons'> based on your following </i>
			</div>
			<div className='widgets__article'>
				<div className='widgets__articleLeft'>
					<i className='material-icons'>
						{' '}
						<img
							className='rs-img'
							src='https://avatars.githubusercontent.com/u/34512743?v=4'
							alt=''
						/>{' '}
					</i>
				</div>
				<div className='widgets__articleRight'>
					<h4>هادي يصرح </h4>
					<p>طلاب معسكر جافا سكريبت الافضل!!</p>
				</div>
			</div>

			<div className='widgets__article'>
				<div className='widgets__articleLeft'>
					<i className='material-icons'>
						{' '}
						<img
							className='rs-img'
							src='https://media-exp1.licdn.com/dms/image/C560BAQF_LdQghOBa8Q/company-logo_200_200/0/1584267814284?e=1667433600&v=beta&t=ZyJ8RUo12wX564kHppB7_0s-eKjsPJWbgvo6P_Eh8I8'
							alt=''
						/>{' '}
					</i>
				</div>
				<div className='widgets__articleRight'>
					<h4>جاهز في سوق الاسهم</h4>
					<p>جاهز تستعد للدخول في سوق الاسهم السعودي</p>
				</div>
			</div>

			<div className='widgets__article'>
				<div className='widgets__articleLeft'>
					<i className='material-icons'>
						{' '}
						<img
							className='rs-img'
							src='https://media-exp1.licdn.com/dms/image/C560BAQFrJStbvraiXw/company-logo_100_100/0/1519117083891?e=1667433600&v=beta&t=zWEmBCyhvwUNW_VtLFxdsOGc0CrDp9cepY0YYoeQitI'
							alt=''
						/>{' '}
					</i>
				</div>
				<div className='widgets__articleRight'>
					<h4>معسكر الامن السيبراني</h4>
					<p>افتتح اليوم</p>
				</div>
			</div>
		</div>
	);
}
