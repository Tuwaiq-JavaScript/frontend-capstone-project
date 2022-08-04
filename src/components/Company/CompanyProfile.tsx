import '../../styles/company.css';


export function CompanyProfilePage() {

	return (
		<>

			<div className='container-profile-page'>
				<div className="main-box">

					<input type='file' className='input-file' id="imgInp" />
					<button className='input-btn upload' id='input_btn'><i className="fa fa-camera cam"></i></button>
					<img className="cover" id="blah" src="https://media-exp1.licdn.com/dms/image/C4D1BAQFcwLc-JZgm1A/company-background_10000/0/1625640033999?e=1660114800&v=beta&t=KipM6oaDPPmIsiIf9W8iVHVTzplISbbYluiVmTrC_mA" alt="" />
					<div className="dp-container"><img className="dp-company" src='https://media-exp1.licdn.com/dms/image/C4D0BAQFNR_cY6gfEPw/company-logo_100_100/0/1576696557525?e=1667433600&v=beta&t=flyOIf50DWyTo9QVaI8Sh3MBWi21Mb10JsWLEOsQle0' alt="" />
						<button className='pen-btn upload'><i className="fa fa-pencil pen"></i></button>


						<div className="company-content-box">
							<div className="main-content">
								<h3>solutions by stc</h3>
								
								<h4>!Growth ? here we go
								</h4>
								<div className="content">
									<h4>Riyadh, Saudi Arabia</h4>
									<ul className="content">
										<li><span>97 connection</span></li>
										<li><span>contact info</span></li>
									</ul>
								</div>
								<div className='btn-header-profile'>

									<button className="but">متابعة <i className="fa fa-caret-down"></i></button>
									<a href="https://solutions.com.sa/"><button className="but1">زيارة الموقع الالكتروني <i className="fa fa-caret-down clr" ></i></button></a>
									<button className="but1">المزيد</button>
								</div>
							</div>


						</div>
					</div>
				</div>
			</div >
		</>
	)
}
