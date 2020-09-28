import React from 'react';
import {Link} from 'react-router-dom';
import {StudentAboutCompanyBar, CompanyDetailContentsWindow} from '../company'

interface Props {
    thisPage: string;
}

const CompanyDetailContents:React.FC<Props> = props => {
    return (
        <section className="app-main companyDetail-contents signle">
            <Link to="/company-detail/:id/about" className="btn pageBack-link"><span className="heading4">企業詳細へ</span></Link>
            <StudentAboutCompanyBar />

            <CompanyDetailContentsWindow thisPage={props.thisPage}/>
        </section>
    );
}

export default CompanyDetailContents;
