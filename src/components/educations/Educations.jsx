
const Educations = () => {
    return (
        <div className="p-3">
            <h1 className="text-center txt-primary ">Technical Educations</h1>
            <div className=" row gap-5 justify-content-center p-5">
                <div className="shadow-sm col-lg-5 col-md-5 col-sm-12 p-3" >
                    <div className="card-body">
                        <h5 className="card-title mb-2">Diploma in Electronics Engineering</h5>
                        <p className="txt-primary">
                            Board of Technical Education, Lucknow, Uttar-Pradesh
                        </p>
                        <div className="card-text text-secondary">Academic Year : 2015-2018</div>
                    </div>
                </div>
                <div className="shadow-sm col-lg-5 col-md-5 col-sm-12 p-3" >
                    <div className="card-body">
                        <h5 className="card-title mb-2 ">Bachelor of Technology (ECE)</h5>
                        <p className="card-text txt-primary">
                            Veer Bahadur Singh Purvanchal University, Jaunpur, Uttar-Pradesh
                        </p>
                        <div className="card-text text-secondary">Academic Year : 2018-2021</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Educations
