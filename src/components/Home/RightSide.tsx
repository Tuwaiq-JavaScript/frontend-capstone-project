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
			<a href='http://localhost:3000/company'>
				<div className='widgets__article'>
					<div className='widgets__articleLeft'>
						<i className='material-icons'>
							{' '}
							<img
								className='rs-img'
								src='https://media-exp1.licdn.com/dms/image/C4D0BAQFNR_cY6gfEPw/company-logo_200_200/0/1576696557525?e=1668038400&v=beta&t=B7q2LHA2sSuiBF5f_FzC4HGk0MxXXLOi0iQKIvIt9ak'
								alt=''
							/>{' '}
						</i>
					</div>
					<div className='widgets__articleRight'>
						<h4>Stc solutions</h4>
						<p>نُقدم لك الحلول الأكثر تقدماً لتنمو أعمالك بسرعة وبتناغم ‫#نقود_المستقبل‬</p>
					</div>
				</div>
			</a>
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
